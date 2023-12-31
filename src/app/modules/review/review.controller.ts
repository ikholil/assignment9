import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { reviewServices } from "./review.service";

const createReview = catchAsync(async (req: Request, res: Response) => {
    const review = {
        ...req.body,
        userId: req?.user?.id
    }
    const result = await reviewServices.createReview(review)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Review created successfully",
        data: result
    })
})

const updateReview = catchAsync(async (req: Request, res: Response) => {
    const result = await reviewServices.updateReview(req.params.id, req.body)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Review updated successfully",
        data: result
    })
})
const deleteReview = catchAsync(async (req: Request, res: Response) => {
    const result = await reviewServices.deleteReview(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Review deleted successfully",
        data: result
    })
})

export const reviewController = {
    createReview, updateReview, deleteReview
}