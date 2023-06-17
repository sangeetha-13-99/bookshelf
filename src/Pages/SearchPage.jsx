import React, {  useEffect, useState } from 'react'
import { useBooksContext } from '../store/books-context';
import { Products } from '../components/Products';
import { Link } from 'react-router-dom';


export const SearchPage = () => {
  const [value,setValue]=useState("");
  const [filteredData,setFilteredData]=useState([]);
  const {booksData:{books}}=useBooksContext();


  console.log(books);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(value){
          const getAllFilteredBookss=books.filter((book)=>{
            const booksText=[book.title.toLowerCase(),book.author.toLowerCase(),book.language.toLowerCase(),book.country.toLowerCase()]
            return booksText.filter(text=>text.includes(value)).length>0?true:false;
          });
          if(getAllFilteredBookss.length===0){
            return;
          }
          setFilteredData(getAllFilteredBookss);
        }else{
          setFilteredData([]);
        }
    },1000);
    return ()=>clearInterval(timer);
  },[value,books]);

  const serachChangeHandler=(event)=>{
    setValue(event.target.value.trim());
  }
  return (
    <div >
      <Link to="/">Link to Main Page</Link>
      <input type="search" placeholder="Search By Title" value={value} onChange={serachChangeHandler}/>
      <div>
        {(value && filteredData.length===0) ? <p>Search for Any Books</p>:
          <Products products={filteredData}/>
        }
      </div>
    </div>
  )
}
