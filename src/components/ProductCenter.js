import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container,Card} from 'react-bootstrap'
import ProductItem from './ProductItem'
import product1 from '../images/product_1.jpg'
import product2 from '../images/product_2.jpg'
import product3 from '../images/product_3.jpg'
import product4 from '../images/product_4.jpg'
import ChapterTitle from './ChapterTitle';
const piclist = [
    {pd:product1,name:'鹿鞭人参'},
    {pd:product2,name:'鹿鞭人参'},
    {pd:product3,name:'黑枸杞秋葵牡蛎肽'},
    {pd:product4,name:'鹿草八珍'}
]

export default class ProductCenter extends Component {
    render(){
        return(
            <section className='productCenter' id='prdcenter'>
                <ChapterTitle name='产品中心'/>
                <div className='productCenter-con'>
                {piclist.map((item)=>{
                    return <ProductItem key={item.name} pic={item.pd} name={item.name}/>
                })}
                </div>
                
            </section>
        )
    }

}