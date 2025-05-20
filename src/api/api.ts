import type { AxiosResponse } from "axios"
import axios from "axios"
import type { SWRConfiguration } from "swr"
import useSWR from "swr"
import type { GetProductFilterOptionsResponse, GetProductsResponse } from "../interface/productInterfaces"

// INIT VARIABEL
const api_baseUrl = import.meta.env.VITE_API_BASE_URL || ""
const login_token_key = "loginToken"

// GET TOKEN
const getToken = ()=>{
  const lsTokenKey = login_token_key

  return localStorage.getItem(lsTokenKey) || ""
}

// FETCHER
export const fetcher = async <T>(url:string,query:string=''):Promise<T>=>{

  const token = getToken()

  const response:AxiosResponse<T> = await axios.get(api_baseUrl+url+query,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  return response.data
}

// Get Product
export const getProducts = (query?:string,config?:SWRConfiguration)=>useSWR<GetProductsResponse>(
  `product${query?"?"+query:""}`,
  fetcher,
  config
)

export const getProductFilterOptions = (config?:SWRConfiguration)=>useSWR<GetProductFilterOptionsResponse>(
  'product/filter-options',
  fetcher,
  config
)