import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import ChapterTitle from './ChapterTitle';
import bf from '../images/bf.png'
export default class ContactUs extends Component {
    render(){
        return(
        <section className='contactus' id='contactus'>
            <ChapterTitle name='联系我们'/>
            <div className='contactus-con'>
                <div className='contactus-box contactus-box-left'>
                    <div className='contactus-left'>
                    全国统一电话：4008929626<br/>
                    联系电话：15555611655<br/>
                    邮箱：bangfangshengwu@163.com<br/>
                    公司地址：安徽省合肥市滨湖区新地城3栋2122<br/>
                    </div>
                </div>
                <div className='contactus-box contactus-box-right'>
                    <img className='contactus-pic' src={bf}/>
                    
                </div>
            </div>
        </section>
        )
    }

}