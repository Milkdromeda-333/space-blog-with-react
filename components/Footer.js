import React from "react"

export default function Footer(){
    return (
    <footer className="flex-col">
        <div className="footer--social-links flex-row">
            <span className="fa fa-facebook-official fa-2x"></span>
            <span href="#" className="fa fa-angellist fa-2x"></span>
            <span href="#" className="fa fa-github-alt fa-2x"></span>
            <span href="#" className="fa fa-gittip fa-2x"></span>
            <span href="#" className="	fa fa-linux fa-2x"></span>
        </div>
        <p>Copyright © Your Website 2022</p>
    </footer>
    )
}