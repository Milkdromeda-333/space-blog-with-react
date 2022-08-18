import React from "react"

export default function Card(props){
    return(
        
        <div className="card border-radius">
            <a href="#" className="card--link">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
            <p className="card--meta-data">Posted by <span className="card--author">{props.author}</span> on {props.date}</p>
        </div>
        
    )
}