import { Faq } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const createFaq = async (data: Faq) => {
    const result = await prisma.faq.create({ data })
    return result
}

const getAllFaq = async () => {
    const faqs = await prisma.faq.findMany({});
    return faqs
};

const updateFaq = async (id: string, data: Partial<Faq>) => {
    const isExist = await prisma.faq.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Faq Not Found')
    }
    const result = await prisma.faq.update({ where: { id }, data })
    return result
}
const deleteFaq = async (id: string) => {
    const isExist = await prisma.faq.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Faq Not Found')
    }
    const result = await prisma.faq.delete({ where: { id } })
    return result
}
export const faqServiceList = {
    createFaq, getAllFaq, updateFaq, deleteFaq
}