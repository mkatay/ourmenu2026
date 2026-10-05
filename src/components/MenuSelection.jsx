import React from "react";
import { foods } from "../data";
import { useState } from "react";
import { useEffect } from "react";
import { MyModal } from "./MyModal";

const MenuSelection = ({selectedCateg}) => {
  const [menu, setMenu] = useState(foods);
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)

console.log(selectedCateg);

useEffect(() => {
 setMenu(()=>selectedCateg=='all' ? foods : foods.filter(({category})=>category==selectedCateg))
  
}, [selectedCateg])

  const toggle = ({title,img}) => {
    setSelectedFood({title,img})
    setIsOpen(!isOpen)
  }



  return (
    <div className="flex flex-wrap gap-4">
      {menu.map(({ id, title, category, price, img, desc }) => (
        <div key={id} className=" pt-4 flex flex-col brp600:flex-row gap-4 basis-full brp900:basis-[calc(50%-20px)] shadow-2xl shadow-gray-600 rounded-2xl">
            <div className="flex-1 ">
                <img  onClick={()=>toggle({title,img})}
                  className="w-full h-60 brp600:h-48 object-cover  rounded-2xl brp600:rounded-l-2xl brp600:rounded-r-none" src={"images/"+img} alt="" />
            </div>
            <div className="flex-1">
                <div className=" text-xl flex justify-between text-amber-400 p-4 border-b border-b-amber-400 ">
                    <span className="capitalize  ">{title}</span>
                    <span>{price}</span> 
                </div>
                <div className="p-4">
                    {desc}
                </div>
            </div>
        </div>
      ))}

      {isOpen && <MyModal isOpen={isOpen} setIsOpen={setIsOpen} selectedFood={selectedFood}/>}
    </div>
  );
};

export default MenuSelection;
