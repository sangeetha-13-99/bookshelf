import React, { useState } from 'react'

import styles from "./ProductCard.module.css"

import { useBooksContext } from '../store/books-context';
export const ProductCard = ({book}) => {

    const {dispatchBooksData} =useBooksContext();
    const [toggle,setToggle] = useState(false);
    const [value,setValue]=useState('')
    const toggleDropDownFunction=()=>{
        setToggle(prev=>!prev);
    }
    const changeHandler=(event)=>{
        setValue(event.target.value);
        if(event.target.value==="read"){
            dispatchBooksData({type:"READ",payload:{book}});
        }
        else if(event.target.value==="wish"){
            dispatchBooksData({type:"WISHREAD",payload:{book}});
        }
        else if(event.target.value==="reading"){
            console.log("reading")
            dispatchBooksData({type:"READING",payload:{book}});
        }
        else if(event.target.value==="none"){
            dispatchBooksData({type:"NONE",payload:{book}});
        }
    }
    console.log(book,"book");
  return (
    <div className={styles["book-card"]}>
        
        <img className={styles["book-image"]} src={book.imageLink} alt={book.title}/>
        <div className={styles["book-div"]}>
            {toggle &&  
            <div className={styles["book-category"]}>
                <select  value={value} onChange={changeHandler}>
                    <option value="" disabled>Add To</option>
                    <option value="read">Read</option>
                    <option value="wish">Wish</option>
                    <option value="reading">Reading</option>
                    <option value="none">None</option>
                </select>
            </div>}
            {!toggle && 
            <div  className={styles["book-details"]}> 
                <h3 className={styles["book-title"]} >{book.title}</h3>
                <p className={styles["book-author"]}><span>BY </span><span>{book.author}</span></p>
                <div className={styles["book-year-pages"]}>
                    <p><span>Year :</span><span>{book.year}</span> </p>
                    <p><span>Pages :</span><span>{book.pages}</span> </p>
                </div>
            </div>}
        </div>
        <button className={styles["category-button"]} onClick={toggleDropDownFunction}>▼</button>
    </div>
  )
}
