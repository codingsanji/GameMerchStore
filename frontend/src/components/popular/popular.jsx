import React from 'react'
import './popular.css'
import { phasmodata as data_product } from '../assets/phasmodata';
import Item from '../items/items'

const popular = () => {
    return(
        <div className='popular'>
            <h1>ALL PHASMOPHOBIA PRODUCTS</h1>
            <hr />
            <div>
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default popular 