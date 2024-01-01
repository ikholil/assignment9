import { Blog } from "@prisma/client"
import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import prisma from "../../../shared/prisma"

const createBlog = async (data: Blog) => {
    const result = await prisma.blog.create({ data })
    return result
}

type queryOptions = {
    page?: string;
    size?: string;
    sortBy?: string;
    sortOrder?: string;
    category?: string;
    search?: string
}

type BlogFilter = {
    OR?: Array<{
        title?: {
            contains: string;
            mode: 'insensitive';
        };
        content?: {
            contains: string;
            mode: 'insensitive';
        };
    }>;
}

type BlogOrderBy = {
    [key: string]: 'asc' | 'desc';
}

type BlogMeta = {
    page: number;
    size: number;
    total: number;
    totalPage: number;
}

type BlogResponse = {
    meta: BlogMeta;
    data: Blog[];
}
const getAllBlog = async (queries: queryOptions): Promise<BlogResponse> => {
    const { page, size, sortBy, sortOrder, search } = queries;
    const pageNumber = parseInt(page as string) || 1;
    const pageSize = parseInt(size as string) || 10;

    const orderBy: BlogOrderBy = {};

    // Apply sorting based on sortBy and sortOrder parameters
    if (sortBy && sortOrder) {
        orderBy[sortBy] = sortOrder.toLowerCase() as 'asc' | 'desc';
    }
    const filters: BlogFilter = {};

    // Apply filters based on query parameters

    // Apply search filter
    if (search) {
        filters.OR = [
            {
                title: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
            {
                content: {
                    contains: search,
                    mode: 'insensitive',
                },
            },
        ];
    }
    const Blogs = await prisma.blog.findMany({
        where: filters,
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy,
    });

    const totalBlogs = await prisma.blog.count({ where: filters });

    return {
        meta: {
            page: pageNumber,
            size: pageSize,
            total: totalBlogs,
            totalPage: Math.ceil(totalBlogs / pageSize),
        },
        data: Blogs,
    };
};

const getSingleBlog = async (id: string) => {
    const result = await prisma.blog.findUnique({ where: { id } })
    return result
}

const updateBlog = async (id: string, data: Partial<Blog>) => {
    const isExist = await prisma.blog.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Blog Not Found')
    }
    const result = await prisma.blog.update({ where: { id }, data })
    return result
}
const deleteBlog = async (id: string) => {
    const isExist = await prisma.blog.findUnique({ where: { id } })
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Blog Not Found')
    }
    const result = await prisma.blog.delete({ where: { id } })
    return result
}
export const blogServiceList = {
    getAllBlog, getSingleBlog, updateBlog, deleteBlog, createBlog
}