import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { faqServiceList } from "./faq.service";


const createFaq = catchAsync(async (req: Request, res: Response) => {
    const result = await faqServiceList.createFaq(req.body)
    if (typeof (result) === "string") {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Faq Not Found"
        })
    }
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Faq created successfully",
        data: result
    })
})
const getAllFaq = catchAsync(async (req: Request, res: Response) => {
    const result = await faqServiceList.getAllFaq()
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Faqs retrieved successfully",
        data: result
    })
})


const updateFaq = catchAsync(async (req: Request, res: Response) => {
    const result = await faqServiceList.updateFaq(req.params.id, req.body)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Faq Updated successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Faq Not Found",
        })
    }
})
const deleteFaq = catchAsync(async (req: Request, res: Response) => {
    const result = await faqServiceList.deleteFaq(req.params.id)
    res.json({
        success: true,
        statusCode: httpStatus.OK,
        message: "Faq deleted successfully",
        data: result
    })
})

export const FaqController = {
    createFaq, getAllFaq, updateFaq, deleteFaq
}