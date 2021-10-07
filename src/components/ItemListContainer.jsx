import React, {useState,useEffect} from 'react';
import ItemCount from './CountContainer';
import Item from './Item';
import jsonpack from './data.json';
import ItemList from './ItemList';


/*export default function ItemListContainer({saludo}) {
    
   //const divStyles = {color: "#60269e", FontSize:"20px"} 
    //return (
        //<div style={divStyles}>
            <h1>{saludo}</h1> 
            <div>
            <ItemCount product_name='Parlantes JBL 1200 Wats' stock={5} initial={1} />
            <ItemCount product_name='Subwoofer Alpine 12" 1500 Wats RMS' stock={9} initial={1} />
            </div>  
        </div>
    )
}

        <Item jsonpack={test2} />*/

const ItemListContainer = ({name}) => {
    const[item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })

    call.then(response=> {
        setItems(response)
    })



    return (

       <div name="test">



    <div className="p-3 mb-2 bg-dark text-white">
        {name}

        <ItemList items={item}/>

       </div>



           </div>
   )
}


export default ItemListContainer;