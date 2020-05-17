import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container,Card} from 'react-bootstrap'


export default class ProductItem extends Component {
    render(){
        const {pic,name} = this.props;
        return(
            <div className='cardItem'>
                <img className="cardPic" src={pic}/>
                <div className='cardItem-font'>{name}</div>
            </div>
        )
    }

}