import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { Category } from "../@types/category.type";
export const CategoryController = {
   createCategory: async( req: Request, res: Response) => {
     const data: Category = req.body;
     try {
         const newData = await CategoryService.createCategory(data);
         res.status(201).json({message: "ສຳເລັດ", result: newData});
     } catch (error) {
         console.error(error);
         res.status(500).json({message: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້"});
     }
   },
   updateCategory: async( req: Request, res: Response) => {
     const data: Category = req.body;
     const {id} = req.params;
     try {
         const newData = await CategoryService.updateCategory(Number(id), data);
         res.status(200).json({message: "ສຳເລັດ", result: newData});
     } catch (error) {
         console.error(error);
         res.status(500).json({message: "ບໍ່ສາມາດແກ້ໄຂຂໍ້ມູນໄດ້"});
     }
   },

   getAllCategories: async(req: Request, res: Response) => {
     try {
         const data = await CategoryService.getAllCategories();
         res.status(200).json(data)
     } catch (error) {
         console.error(error);
          res.status(500).json({message: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້"});
     }
   },

 
}