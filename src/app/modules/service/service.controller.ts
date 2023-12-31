import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { serviceList } from "./service.service";

const createService = catchAsync(async (req: Request, res: Response) => {
    const result = await serviceList.createService(req.body)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Service created successfully",
        data: result
    })
})
const getAllService = catchAsync(async (req: Request, res: Response) => {

    const result = await serviceList.getAllService(req.query)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Services retrieved successfully",
        meta: result.meta,
        data: result.data
    })
})
// const getServicesByCategoryId = catchAsync(async (req: Request, res: Response) => {
//     const result = await serviceList.getServicesbyCategory(req.params.categoryId)
//     res.json({
//         success: true,
//         statusCode: httpStatus.OK,
//         message: "Service retrieved successfully",
//         data: result
//     })
// })
const getSingleService = catchAsync(async (req: Request, res: Response) => {
    const result = await serviceList.getSingleService(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Service retrieved successfully",
        data: result
    })
})
const updateService = catchAsync(async (req: Request, res: Response) => {
    const result = await serviceList.updateService(req.params.id, req.body)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Service updated successfully",
        data: result
    })
})
const deleteService = catchAsync(async (req: Request, res: Response) => {
    const result = await serviceList.deleteService(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Service deleted successfully",
        data: result
    })
})

export const serviceController = {
    createService, getAllService, getSingleService, updateService, deleteService
}