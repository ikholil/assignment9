import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { blogServiceList } from "./blog.service";


const createBlog = catchAsync(async (req: Request, res: Response) => {
    const user = req.user
    const blogData = {
        ...req.body,
        authorId: user?.id
    }
    const result = await blogServiceList.createBlog(blogData)
    if (typeof (result) === "string") {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Blog Not Found"
        })
    }
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog created successfully",
        data: result
    })
})
const getAllBlog = catchAsync(async (req: Request, res: Response) => {

    const result = await blogServiceList.getAllBlog(req.query)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "blogs retrieved successfully",
        meta: result.meta,
        data: result.data
    })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
    const result = await blogServiceList.getSingleBlog(req.params.id)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Blog retrieved successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Blog Not Found",
        })
    }
})
const updateBlog = catchAsync(async (req: Request, res: Response) => {
    const result = await blogServiceList.updateBlog(req.params.id, req.body)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Blog Updated successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Blog Not Found",
        })
    }
})
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
    const result = await blogServiceList.deleteBlog(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Blog deleted successfully",
        data: result
    })
})

export const blogController = {
    createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog
}