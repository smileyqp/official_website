import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import classnames from 'classnames'
export default class ChapterTitle extends Component {
    render(){
        const {style} = this.props; 
        const {name} = this.props;
        return(
        <div  className={classnames('chapter-title',{'chapter-white':style=='white'})}>{name}</div>
        )
    }

}