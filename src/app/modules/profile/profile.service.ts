import { Profile } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const getSingleProfile = async (id: string) => {
    const result = await prisma.profile.findUnique({ where: { id } })
    return result
}
const updateProfile = async (id: string, data: Partial<Profile>) => {
    const isExist = await prisma.profile.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Booking Not Found')
    }
    const result = await prisma.profile.update({ where: { id }, data })
    return result
}

export const profileServices = {
    getSingleProfile, updateProfile
}