import { useState } from "react";

const AllBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "addidas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "fila" },
  { id: "5", brandName: "reebok" },
];

function HooksUseStateExercise02() {
    const [selectBrand, setselectBrand]=useState([]);

    const onAddToCartClick=(id)=>{
        const selectItems=AllBrands.find(item => item.id===id)
        setselectBrand([...selectBrand, selectItems])
    }

    const onRemoveClick=(id)=>{
        const filteredItems=selectBrand.filter(item => item.id!=id)
        setselectBrand(filteredItems);

    }
  return (
    <>
      <div>
        <p>Add Brand to your cart</p>
        {AllBrands.map((brand) => (
          <div key={brand.id}>
            <span>{brand.brandName}</span>
            <button onClick={()=>onAddToCartClick(brand.id)}>ADD to Cart</button>
          </div>
        ))}
      </div>

      <div>
      <p>Your Cart </p>
      {
        selectBrand && selectBrand.map(brand=> <p>{brand.brandName} - <button onClick={() => onRemoveClick(brand.id)}>Remove</button></p>)
      }
      </div>
    </>
  );
}

export default HooksUseStateExercise02;
