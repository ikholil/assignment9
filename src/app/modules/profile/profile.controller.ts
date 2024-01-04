import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { profileServices } from "./profile.service";

const getSingleProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await profileServices.getSingleProfile(req.user?.id)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Profile retrieved successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Profile Not Found",
        })
    }
})
const updateProfile = catchAsync(async (req: Request, res: Response) => {

    const result = await profileServices.updateProfile(req.user?.id, req.body)
    if (result) {
        res.json({
            success: true,
            statusCode: httpStatus.OK,
            message: "Profile Updated successfully",
            data: result
        })
    }
    else {
        res.json({
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Profile Update Failed",
        })
    }
})


export const profileController = {
    getSingleProfile, updateProfile
}