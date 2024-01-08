import { Booking } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const createBooking = async (data: Booking) => {
    const { serviceId } = data
    const service = await prisma.service.findUnique({ where: { id: serviceId } })
    if (!service) {
        return "Service Not Found"
    }
    const result = await prisma.booking.create({ data })
    return result
}

type queryOptions = {
    page?: string;
    size?: string;
    sortBy?: string;
    sortOrder?: string;
    minPrice?: string;
    maxPrice?: string;
    category?: string;
    search?: string
}


type BookingOrderBy = {
    [key: string]: 'asc' | 'desc';
}

type BookingMeta = {
    page: number;
    size: number;
    total: number;
    totalPage: number;
}

type BookingResponse = {
    meta: BookingMeta;
    data: Booking[];
}
const getAllBooking = async (queries: queryOptions): Promise<BookingResponse> => {
    const { page, size, sortBy, sortOrder } = queries;
    const pageNumber = parseInt(page as string) || 1;
    const pageSize = parseInt(size as string) || 10;

    const orderBy: BookingOrderBy = {};

    // Apply sorting based on sortBy and sortOrder parameters
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder.toLowerCase() as 'asc' | 'desc';
    }

    const bookings = await prisma.booking.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy,
    });

    const totalBookings = await prisma.booking.count();

    return {
        meta: {
            page: pageNumber,
            size: pageSize,
            total: totalBookings,
            totalPage: Math.ceil(totalBookings / pageSize),
        },
        data: bookings,
    };
};

const getSingleBooking = async (id: string) => {
    const result = await prisma.booking.findUnique({ where: { id } })
    return result
}
const getUserBookings = async (id: string) => {
    const result = await prisma.booking.findMany({ where: { userId: id } })
    return result
}
// const getBooksbyCategory = async (categoryId: string) => {
//     console.log(categoryId)
//     const result = await prisma.booking.findMany({ where: { categoryId } })
//     return result
// }
const updateBooking = async (id: string, data: Partial<Booking>) => {
    const isExist = await prisma.booking.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Booking Not Found')
    }
    const result = await prisma.booking.update({ where: { id }, data })
    return result
}
const deleteBooking = async (id: string) => {
    const isExist = await prisma.booking.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Booking Not Found')
    }
    const result = await prisma.booking.delete({ where: { id } })
    return result
}
export const bookingServiceList = {
    getAllBooking, getSingleBooking, updateBooking, deleteBooking, createBooking, getUserBookings
}