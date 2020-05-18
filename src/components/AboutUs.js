import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import ChapterTitle from './ChapterTitle';

export default class AboutUs extends Component {
    render(){
        return(
        <section className='aboutus' id='aboutus'>
            <ChapterTitle name='关于我们' style='white'/>
            <div className='aboutus-purpose'>用质量说话 诚信经营</div>
            <div className='aboutus-font'>
            <b>安徽邦方生物科技有限公司是一家集保健食品、功能食品研发、OEM、销售于一体的高科技、自动化、多元化企业。</b>
            公司于2020年注册成立，坐落于安徽省合肥市。为加快产学研一体化进程,集团公司于东营广元生物科技有限公司建立了长期战略合作，为集团提供政策、管理、营销、研发的高端服务。同时，邦方生物正持续不断的研发功能型产品，以满足全国大健康产业的火爆市场需求。
            </div>
        </section>
        )
    }

}