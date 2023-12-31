import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { feedbackServices } from "./feedback.service";

const createFeedback = catchAsync(async (req: Request, res: Response) => {
    const feedbackData = {
        ...req.body,
        userId: req?.user?.id
    }
    const result = await feedbackServices.createFeedback(feedbackData);
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Feedback created successfully",
        data: result
    })
})
const getAllFeedback = catchAsync(async (req: Request, res: Response) => {

    const result = await feedbackServices.getAllFeedback()
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Feedbacks retrieved successfully",
        data: result
    })
})

const getSingleFeedback = catchAsync(async (req: Request, res: Response) => {
    const result = await feedbackServices.getSingleFeedback(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Feedbacks retrieved successfully",
        data: result
    })
})


export const feedbackController = {
    createFeedback, getAllFeedback, getSingleFeedback
}