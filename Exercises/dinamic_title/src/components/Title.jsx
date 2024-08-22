import { useState,useEffect } from 'react'


export const Title = ({title, randomColor}) =>{
    const [titleColor, setTitleColor] = useState([0, 0, 0])
    useEffect(()=>{
        console.log(randomColor)
        setTitleColor(randomColor)
    },[randomColor])
    
    return(
        <h1 style={{color:`rgb(${titleColor})`}}>{title}</h1>
    )
}