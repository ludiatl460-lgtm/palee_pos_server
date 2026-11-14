import {prisma} from "../config/prisma";
import { Category } from "../@types/category.type";
export const CategoryService = {
  createCategory: async (category: Category) => await prisma.category.create({data: category}),
  getAllCategories: async() => await prisma.category.findMany(),
  updateCategory: async(id: number, category: Category) => await prisma.category.update({data: category, where : {
         categoryId: id
  }})
}