import React from 'react'

import { ProductCard } from './ProductCard'
import styles from "./Products.module.css"

export const Products = ({products}) => {
  console.log(products,"products");
    const books=products.map(book=>{
        return (
            <ProductCard key={book._id} book={book}/>
        );
    });
  return (
    <div className={styles["products-section"]}>
        {books}
    </div>
  )
}
