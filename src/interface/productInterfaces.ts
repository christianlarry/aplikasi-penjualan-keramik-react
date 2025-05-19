import type { Pagination } from "./paginationInterfaces"

export interface Product{
  _id?: string,
  name: string,
  type: string,
  design: string,
  size: {
    width: number,
    height: number
  },
  color: string,
  finishing: string,
  texture: string,
  brand: string,
  price: number,
  image?: string | null,
  createdAt: string,
  updatedAt: string
}

export interface GetProductsResponse{
  data:Product[],
  page:Pagination
}