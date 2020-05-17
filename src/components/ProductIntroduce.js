import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container,Alert} from 'react-bootstrap'
import ChapterTitle from './ChapterTitle';

const basicfuc = [
    '1.调理早泄：房事时间越来越长;',
　　'2.改善阳痿：勃起速度越来越快;',
　　'3.增硬度：勃起硬度越来越强;',
　　'4.补肾固精：调理改善肾虚肾亏疲乏;',
　　'5.增强活力：提高精子质量，有效助孕;',
　　'6.滋养睾丸：调理改善阴囊潮湿。'
]

const suiteperson = [
    '1、适合不同程度的早泄患者;',
　　'2、正常人想延长性福时间的男性;',
　　'3、手淫过度，造成时间短者的男性;',
　　'4、因心理障碍造成的房事时间短者;',
　　'5、勃起时间短，少于30分钟的男性;',
　　'6、性生活过程中出现中途疲软的男性;',
　　'7、举而不坚，硬度不够的男性;',
　　'8、性欲减退，对刺激不敏感的男性;',
　　'9、工作压力大，熬夜、酗酒的男性。'
]

export default class ProductIntroduce extends Component {
    render(){
        return(
        <section className='product-introduce-con' id='prdintro'>
            <ChapterTitle name='产品介绍'/>
            <div className='pd-intro-box'>
                <div className='pd-intro-box-item'>
                    <div className='intro-title'>基本功能</div>
                    <div className='intro-con'>
                        {basicfuc.map((item)=>{
                            return(<div key={item} className='intro-item'>{item}</div>)
                        })}
                    </div>
                </div>
                <div className='pd-intro-box-item'>
                    <div className='intro-title'>适用人群</div>
                    <div className='intro-con'>
                        {suiteperson.map((item)=>{
                            return(<div key={item} className='intro-item'>{item}</div>)
                        })}
                    </div>
                </div>
            </div>
           
        </section>
        )
    }

}