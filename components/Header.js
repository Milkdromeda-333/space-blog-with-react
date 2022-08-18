import React from "react"

export default function Header(){
    return(
        <header className="header">
            <nav className="navbar flex-row">
                <span>React Space Blog</span>
                <ul className="nav--nav-list flex-row">
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Sample Post</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="hero flex-col">
                <h1>Space Blog</h1>
                <p>A Blog about space, in react.js!</p>
            </div>
            
        </header>
    )
}