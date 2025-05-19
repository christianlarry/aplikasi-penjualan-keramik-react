const productImgBaseUrl = import.meta.env.VITE_API_PRODUCT_IMG_BASEURL || ""

export const getProductImgUrl = (imagePath:string):string=>{
  return productImgBaseUrl+imagePath
}