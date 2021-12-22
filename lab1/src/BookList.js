import React from "react";import { useState } from "react";
import Book from "./Book";

const book_lib=[
    {
        id:1,
        name:"React",
        img_url:"https://vectorsjungle.com/cache/icon_256/icons/20-vectorsjungle/XuIYcq/preview.png",
        desc:"this is a book react,a javascript library",
        price:49,
        votes:12
    },
    {
        id:2,
        name:"Computer vision",
        img_url:"https://vectorsjungle.com/cache/icon_256/icons/20-vectorsjungle/kOaaDf/preview.png",
        desc:"this is a book on one of the more prominent fields of ai.",
        price:230,
        votes:25

    },
    {
        id:3,
        name:"Machine Learning",
        img_url:"https://m.media-amazon.com/images/I/51O8jFfksSL._CR0,65,381,381_UX256.jpg",
        desc:"this is not a book",
        price:320,
        votes:36

    }
]
function BookList(){
    // function addVote(id){
    //     console.log("clicked id: " +id);
    //     let index=book_lib.findIndex(Obj => Obj.id===id);
    //     book_lib[index].vote_count++;
    //     console.log(book_lib);
    // }

    const [vote_count,set_vote_count]=useState(book_lib);

    
        
        
        const increment=(id)=>{
            let index=book_lib.findIndex(Obj => Obj.id===id);
            book_lib[index].vote_count++;
            set_vote_count(book_lib);
            
            

            

        };


    

    const newbookList=book_lib.sort((a,b)=>b.votes-a.votes).map((bk)=>(
    <Book key={bk.id} id={bk.id} name={bk.name} img_url={bk.img_url} desc={bk.desc} price={bk.price} votes={bk.votes} upVote={bk.increment}>
        <p>this is a long paragraph</p>
    </Book>

    ));
 
    return(
        <div><h1>Book List</h1>
        {newbookList}
        </div>
    );
}
export default BookList;