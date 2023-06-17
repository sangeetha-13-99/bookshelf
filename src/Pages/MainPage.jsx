import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./MainPage.module.css";
import { useBooksContext } from '../store/books-context';
import { Products } from '../components/Products';



export const MainPage = () => {
  const {booksData:{read,wish,reading}}=useBooksContext();
  console.log(reading,"reading inproducts")
  return (
    <div className=''>
      <button className={styles["search-button"]}>
        <Link to="/search">
          Search Books
        </Link>
      </button>
       <div className={styles["main-content"]}>
          <h2>Currently Reading Books</h2>
          <Products products={reading}/>
          <h2>ReadBooks</h2>
          <Products products={read}/>
          <h2>Added to WishList Books</h2>
          <Products products={wish}/>
        </div> 
    </div>
  )
}
