import React from "react";
import "./Book.css"
function Book(props,upVote){


    
        return(
            <div  className="book">
                <img src={props.img_url} alt=""/>
                <h2>Name : {props.name}</h2>
                <p>Description :{props.desc}</p>
                <span>Price :{props.price}</span><br/>
                <span className="vote_count">Likes :{props.votes}</span>
                <div><button onClick={upVote}><img src="assets/upvote.jpg" alt="" className="upvote_img"/></button></div>
                
            </div>)   
}

export default Book;

