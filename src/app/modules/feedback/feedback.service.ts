import { FeedBack } from "@prisma/client"
import prisma from "../../../shared/prisma"

const createFeedback = async (data: FeedBack) => {
    const result = await prisma.feedBack.create({ data })
    return result
}


const getAllFeedback = async () => {
    const feedbacks = await prisma.feedBack.findMany();
    return feedbacks
};

const getSingleFeedback = async (id: string) => {
    const result = await prisma.feedBack.findUnique({ where: { id } })
    return result
}


export const feedbackServices = {
    createFeedback, getAllFeedback, getSingleFeedback
}