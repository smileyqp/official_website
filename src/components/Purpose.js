import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import ChapterTitle from './ChapterTitle';

export default class Purpose extends Component {
    render(){
        return(
        <section className='aboutus' id='aboutus'>
            <ChapterTitle name='企业宗旨' style='white'/>
            <div className='aboutus-font'>
            </div>
        </section>
        )
    }

}