import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export default function CartWidget() {
        const divStyles = {color: "#60269e", FontSize:"30px", margin: "25px"} 
    return (
        <div style={divStyles}>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    )
}