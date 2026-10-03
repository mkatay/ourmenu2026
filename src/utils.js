import { foods } from "./data"

export const allCategories=()=>{
  const categories=[...new Set(foods.map(obj=>obj.category))]
  return [...categories,'all'].sort((a,b)=>a.localeCompare(b))
}