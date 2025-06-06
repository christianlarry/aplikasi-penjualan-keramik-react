import type { Pagination } from "./paginationInterfaces"

export interface Product{
  _id?: string,
  name: string,
  description?: string,
  specification:{
    size: {
      width: number,
      height: number
    },
    application: string[],
    design: string,
    color: string[],
    finishing: string,
    texture: string,
    isWaterResistant:boolean,
    isSlipResistant:boolean,
  }
  brand: string,
  price: number,
  finalPrice: number,
  discount?:number,
  isBestSeller?:boolean,
  isNewArrivals?:boolean,
  image?: string,
  recommended?: string[],
  createdAt: Date,
  updatedAt: Date
}

export interface ProductFilterOptions{
  _id:string,
  type:string,
  options:{label:string,value:string}[]
}

export interface GetProductsResponse{
  data:Product[],
  page:Pagination
}

export interface GetProductFilterOptionsResponse{
  data: ProductFilterOptions[]
}