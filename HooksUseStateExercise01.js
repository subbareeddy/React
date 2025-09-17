//search a brand and we can stop search it comes AllBrands
//using methods and optertas are ternary operator, map,filter,onChange and include methods


import {useState} from 'react';

const AllBrands=[
    {id: "1", brandName: "puma"},
    {id: "2", brandName: "addidas"},
    {id: "3", brandName: "nike"},
    {id: "4", brandName: "fila"},
    {id: "5", brandName: "reebok"}
]



function HooksUseStateExercise01(){

    const [search, setSearch]=useState();
    const [brands, setBrands]=useState(AllBrands)
    const onSearchChange=(e)=>{
        setSearch(e.target.value)
        const filters=e.target.value?.length >0 ? brands.filter(brand => brand.brandName.includes(e.target.value.toLowerCase())) : AllBrands;
        setBrands(filters);
    }
    return(
        <>
        <input onChange={onSearchChange} placeholder="Search a Brand" />
        <ul>
        {
            brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
        }
        </ul>
        </>
    );
}

export default HooksUseStateExercise01;