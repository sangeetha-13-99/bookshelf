import {createContext, useContext, useReducer} from "react"

import books from "../db/booksData";
import { booksReducerFunction, initialBooksData } from "./books-reducer";

const BooksContext=createContext(
    {
        booksData:{},
        dispatchBooksData:()=>{}
    }
);

export const BooksContextProvider=({children})=>{

    const [booksData,dispatchBooksData]=useReducer(booksReducerFunction,books,initialBooksData);
    return (
        <BooksContext.Provider value={{booksData,dispatchBooksData}}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooksContext=()=>{
    return useContext(BooksContext);
}