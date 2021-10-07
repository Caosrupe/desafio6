import React from 'react'
import ItemCount from './CountContainer';

export default function ItemListContainer({saludo}) {
    
   const divStyles = {color: "#60269e", FontSize:"20px"} 
    return (
        <div style={divStyles}>
            <h1>{saludo}</h1> 
            <div>
            <ItemCount product_name='Parlantes JBL 1200 Wats' stock={5} initial={1} />
            <ItemCount product_name='Subwoofer Alpine 12" 1500 Wats RMS' stock={9} initial={1} />
            </div>  
        </div>
    )
}