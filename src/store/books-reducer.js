
export const booksReducerFunction=(state,action)=>{

    switch (action.type) {
        case 'READ':{
            let read=state.read,reading=state.reading,wish=state.wish;
            if(state.read.find(book=>book._id===action.payload.book._id)){
                return state;
            }
            else if(state.wish.find(book=>book._id===action.payload.book._id)){
                read=[...state.read,{...action.payload.book,shelf:{read:true,wishToread:false,reading:false,default:false}}];
                wish=state.wish.filter(book=>book._id!==action.payload.book._id)
            }
            else if(state.reading.find(book=>book._id===action.payload.book._id)){
                read=[...state.read,{...action.payload.book,shelf:{read:true,wishToread:false,reading:false,default:false}}];
                reading=state.wish.filter(book=>book._id!==action.payload.book._id);
            }
            else{
                read=[...state.read,{...action.payload.book,shelf:{read:true,wishToread:false,reading:false,default:false}}]; 
            }
            const readBooks=state.books.map(book=>{
                if(book._id===action.payload.book._id){
                    return {...book,shelf:{read:true,wishToread:false,reading:false,default:false}};
                }
                return book;
            });
            return {...state,books:readBooks,read,wish,reading};
        }
        case 'WISHREAD':{
            let read=state.read,reading=state.reading,wish=state.wish;
            if(state.wish.find(book=>book._id===action.payload.book._id)){
                return state;
            }
            else if(state.read.find(book=>book._id===action.payload.book._id)){
                wish=[...state.wish,{...action.payload.book,shelf:{read:false,wishToread:true,reading:false,default:false}}];
                read=state.read.filter(book=>book._id!==action.payload.book._id)
            }
            else if(state.reading.find(book=>book._id===action.payload.book._id)){
                wish=[...state.wish,{...action.payload.book,shelf:{read:false,wishToread:true,reading:false,default:false}}];
                reading=state.wish.filter(book=>book._id!==action.payload.book._id);
            }
            else{
                wish=[...state.wish,{...action.payload.book,shelf:{read:false,wishToread:true,reading:false,default:false}}];
            }
            const readBooks=state.books.map(book=>{
                if(book._id===action.payload.book._id){
                    return {...book,shelf:{read:false,wishToread:true,reading:false,default:false}};
                }
                return book;
            });
            return {...state,books:readBooks,read,wish,reading};
        }
        case 'READING':{
            console.log("reading",action.payload);
            let read=state.read,reading=state.reading,wish=state.wish;
            if(state.reading.find(book=>book._id===action.payload.book._id)){
                return state;
            }
            else if(state.read.find(book=>book._id===action.payload.book._id)){
                reading=[...state.reading,{...action.payload.book,shelf:{read:false,wishToread:false,reading:true,default:false}}];
                read=state.read.filter(book=>book._id!==action.payload.book._id);
            }
            else if(state.wish.find(book=>book._id===action.payload.book._id)){
                reading=[...state.reading,{...action.payload.book,shelf:{read:false,wishToread:false,reading:true,default:false}}];
                wish=state.wish.filter(book=>book._id!==action.payload.book._id);
            }
            else{
                reading=[...state.reading,{...action.payload.book,shelf:{read:false,wishToread:false,reading:true,default:false}}];
            }
            const readBooks=state.books.map(book=>{
                if(book._id===action.payload.book._id){
                    return {...book,shelf:{read:false,wishToread:false,reading:true,default:false}};
                }
                return book;
            });
            console.log({...state,books:readBooks,read,wish,reading},"reading contex")
            return {...state,books:readBooks,read,wish,reading};
        }
        case 'NONE':{
            let read=state.read,reading=state.reading,wish=state.wish;
            if(state.reading.find(book=>book._id===action.payload.book._id)){
                reading=state.reading.filter(book=>book._id!==action.payload.book._id);
            }
            else if(state.read.find(book=>book._id===action.payload.book._id)){
                read=state.read.filter(book=>book._id!==action.payload.book._id);
            }
            else if(state.wish.find(book=>book._id===action.payload.book._id)){
                wish=state.wish.filter(book=>book._id!==action.payload.book._id);
            }
            const readBooks=state.books.map(book=>{
                if(book._id===action.payload.book._id){
                    return {...book,shelf:{read:false,wishToread:false,reading:false,default:true}};
                }
                return book;
            });
            return {...state,books:readBooks,read,wish,reading};
        }
        default:
            break;
    }

};


export const initialBooksData=(books)=>{
    const booksData=books.map(book=>{
        const shelf={read:false,wishToread:false,reading:false,default:true};
        return {...book,shelf};
    })
    return {
        books:booksData,
        read:[],
        wish:[],
        reading:[]
    };
}