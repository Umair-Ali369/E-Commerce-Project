 import axios from 'axios'

 export const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products?limit=1200");
    return (data.products)
 }

 export const fetchCategories = async () => {
    const { data } = await axios.get('https://dummyjson.com/products/categories')
    return (data)
 }

//  export const fetchProductById = async (id) => {
//     const { data } = await axios.get(`https://dummyjson.com/products/:${id}`)
//     return data
//  }
 

 export const fetchProductByCategory = async (category) => {
    const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`)
    return data
 }