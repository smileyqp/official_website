import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import ChapterTitle from './ChapterTitle';

const cultureData = [
    {title:'诚',content:'精益求精 诚信待人'},
    {title:'新',content:'改革创新 开拓进取'},
    {title:'德',content:'价格公道 一视同仁'},
    {title:'才',content:'以人为本 人才第一'},
    {title:'和',content:'团结协作 爱岗敬业'},

]
export default class Culture extends Component {
    render(){
        return(
        <section className='culture' id='culture'>
            <ChapterTitle name='企业文化'/>
            <div className='culture-con'>
                {cultureData.map((item)=>{
                    return (<div className='culture-item' key={item.title}>
                                <div className='cul-til'>{item.title}</div>
                                <div className='cul-content'>{item.content}</div>
                            </div>)
                })}
            </div>
           
        </section>
        )
    }

}