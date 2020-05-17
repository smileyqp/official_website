import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import ProductItem from './ProductItem'
import heath from '../images/pdidea/heath.png'
import good from '../images/pdidea/good.png'
import safe from '../images/pdidea/safe.png'
import science from '../images/pdidea/science.png'
export default class ProductIdea extends Component {
    render(){
        return(
        <div className='product-idea'>
            <div className='cardIdea'>
                <img className="ideaPic" src={good}/>
                <div className='cardidea-font'>优质</div>
            </div>
            <div className='cardIdea'>
                <img className="ideaPic" src={heath}/>
                <div className='cardidea-font'>健康</div>
            </div>
            <div className='cardIdea'>
                <img className="ideaPic" src={science}/>
                <div className='cardidea-font'>科学</div>
            </div>
            <div className='cardIdea'>
                <img className="ideaPic" src={safe}/>
                <div className='cardidea-font'>安全</div>
            </div>
        </div>
        )
    }

}