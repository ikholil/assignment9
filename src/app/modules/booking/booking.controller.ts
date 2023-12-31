import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { bookingServiceList } from "./booking.service";


const createBooking = catchAsync(async (req: Request, res: Response) => {
    const user = req.user
    const bookingData = {
        ...req.body,
        userId: user?.id
    }
    const result = await bookingServiceList.createBooking(bookingData)
    if (typeof (result) === "string") {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Serivce Not Found"
        })
    }
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking created successfully",
        data: result
    })
})
const getAllBooking = catchAsync(async (req: Request, res: Response) => {

    const result = await bookingServiceList.getAllBooking(req.query)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Bookings retrieved successfully",
        meta: result.meta,
        data: result.data
    })
})

const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await bookingServiceList.getSingleBooking(req.params.id)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Booking retrieved successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Booking Not Found",
        })
    }
})
const updateBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await bookingServiceList.updateBooking(req.params.id, req.body)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Booking retrieved successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Booking Not Found",
        })
    }
})
const deleteBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await bookingServiceList.deleteBooking(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking deleted successfully",
        data: result
    })
})

export const bookingController = {
    createBooking, getAllBooking, getSingleBooking, updateBooking, deleteBooking
}