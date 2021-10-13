import React from "react"

const Header = function(props){
    document.title=`${props.text}`

    return(
        <h1 className="bg-dark text-light py-4 text-center">{props.text}</h1>
    )
}

export default Header