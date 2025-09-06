/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PaginationHelper { 
    constructor(
        private prisma: PrismaService
    ) { }
    
    public async paginate<T>(
        model: string, // model for selecting table
        whereConditions: any, // filtering logic
        page: number = 1,
        limit: number = 10,
        includesRelations: any,
        orderBy?: any
    ): Promise<{ data: T[], meta: any }>{
        
        const skip = (page - 1) * limit;

        // calculating skipping items

        const [data, total] = await Promise.all([
            this.prisma[model].findMany({
                where: whereConditions,
                skip: skip,
                take: limit,
                include: includesRelations,
                orderBy: orderBy
            }) as T[],
            
        // count available total items for applied conditions
            
            this.prisma[model].count({
                where:whereConditions
            })
        ]);


        // calculating others pagination meta data

        const totalPages = Math.ceil(total / limit);
        const hasNextPage = page < totalPages;
        const hasPreviousPage = page > 1;

        return {
            data: data,
            meta: {
                 total,
                 page,
                 limit,
                totalPages,
                hasNextPage,
                hasPreviousPage
            }
        };
    }
}