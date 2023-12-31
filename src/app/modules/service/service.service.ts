import { Service } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const createService = async (data: Service) => {
    const result = await prisma.service.create({ data })
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

type ServiceFilter = {
    price?: {
        gte?: number;
        lte?: number;
    };
    OR?: Array<{
        title?: {
            contains: string;
            mode: 'insensitive';
        };
        description?: {
            contains: string;
            mode: 'insensitive';
        };
    }>;
}

type ServiceOrderBy = {
    [key: string]: 'asc' | 'desc';
}

type ServiceMeta = {
    page: number;
    size: number;
    total: number;
    totalPage: number;
}

type ServiceResponse = {
    meta: ServiceMeta;
    data: Service[];
}
const getAllService = async (queries: queryOptions): Promise<ServiceResponse> => {
    const { page, size, sortBy, sortOrder, minPrice, maxPrice, search } = queries;
    const pageNumber = parseInt(page as string) || 1;
    const pageSize = parseInt(size as string) || 10;

    const filters: ServiceFilter = {};

    // Apply filters based on query parameters
    if (minPrice) {
        filters.price = {
            gte: parseFloat(minPrice),
        };
    }

    if (maxPrice) {
        filters.price = {
            ...(filters.price || {}),
            lte: parseFloat(maxPrice),
        };
    }

    // Apply search filter
    if (search) {
        filters.OR = [
            {
                title: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
            {
                description: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
        ];
    }

    const orderBy: ServiceOrderBy = {};

    // Apply sorting based on sortBy and sortOrder parameters
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder.toLowerCase() as 'asc' | 'desc';
    }

    const services = await prisma.service.findMany({
        where: filters,
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy,
    });

    const totalServices = await prisma.service.count({
        where: filters,
    });

    return {
        meta: {
            page: pageNumber,
            size: pageSize,
            total: totalServices,
            totalPage: Math.ceil(totalServices / pageSize),
        },
        data: services,
    };
};
// const getAllService = async (queries: queryOptions) => {
//     const { page, size, sortBy, sortOrder, minPrice, maxPrice, search } = queries;
//     const pageNumber = parseInt(page as string) || 1;
//     const pageSize = parseInt(size as string) || 10;

//     let filters:any = {};

//     // Apply filters based on query parameters
//     if (minPrice) {
//         filters.price = {
//             gte: parseFloat(minPrice),
//         };
//     }

//     if (maxPrice) {
//         filters.price = {
//             ...(filters.price || {}),
//             lte: parseFloat(maxPrice),
//         };
//     }


//     // Apply search filter
//     if (search) {
//         filters.OR = [
//             {
//                 title: {
//                     contains: search,
//                     mode: 'insensitive',
//                 },
//             },
//             {
//                 description: {
//                     contains: search,
//                     mode: 'insensitive',
//                 },
//             }
//         ];
//     }

//     const orderBy: any = {};

//     // Apply sorting based on sortBy and sortOrder parameters
//     if (sortBy && sortOrder) {
//         orderBy[sortBy] = sortOrder.toLowerCase();
//     }

//     const services = await prisma.service.findMany({
//         where: filters,
//         skip: (pageNumber - 1) * pageSize,
//         take: pageSize,
//         orderBy,
//     });

//     const totalServices = await prisma.service.count({
//         where: filters,
//     });

//     return {
//         meta: {
//             page: pageNumber,
//             size: pageSize,
//             total: totalServices,
//             totalPage: Math.ceil(totalServices / pageSize),
//         },
//         data: services,
//     }
// }
const getSingleService = async (id: string) => {
    const result = await prisma.service.findUnique({ where: { id } })
    return result
}
// const getBooksbyCategory = async (categoryId: string) => {
//     console.log(categoryId)
//     const result = await prisma.service.findMany({ where: { categoryId } })
//     return result
// }
const updateService = async (id: string, data: Partial<Service>) => {
    const isExist = await prisma.service.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'service Not Found')
    }
    const result = await prisma.service.update({ where: { id }, data })
    return result
}
const deleteService = async (id: string) => {
    const isExist = await prisma.service.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'service Not Found')
    }
    const result = await prisma.service.delete({ where: { id } })
    return result
}
export const serviceList = {
    getAllService, getSingleService, updateService, deleteService, createService
}