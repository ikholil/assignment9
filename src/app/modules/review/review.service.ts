import { Review } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const createReview = async (data: Review) => {
    const result = await prisma.review.create({ data })
    return result
}

const updateReview = async (id: string, data: Partial<Review>) => {
    const isExist = await prisma.review.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Found')
    }
    const result = await prisma.review.update({ where: { id }, data })
    return result
}
const deleteReview = async (id: string) => {
    const isExist = await prisma.review.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Found')
    }
    const result = await prisma.review.delete({ where: { id } })
    return result
}
export const reviewServices = {
    createReview, updateReview, deleteReview
}