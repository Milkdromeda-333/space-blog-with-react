import React from "react"
import Header from "./Header"
import data from "../data"
import Card from "./Card"
import OtherPostsBtn from "./OtherPostsBtn"
import Footer from "./Footer"

export default function App(){
    const cards = data.map(item =>{
        return (
            <Card
        key={item.title}
        {...item}
            />
        )
    })
    
    return(
        <div>
            <Header />
            <div className="content-container flex-col">
                {cards}
                <OtherPostsBtn />
            </div>
            <Footer />
        </div>
    )
}