import React, { Component } from 'react';
import {Carousel,Button,Container} from 'react-bootstrap'
import ControlledCarousel from '../../components/ControlledCarousel'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCenter  from '../../components/ProductCenter'
import AboutUs from '../../components/AboutUs'
import ProductIntroduce from '../../components/ProductIntroduce'
import ProductIdea from '../../components/ProductIdea'
import Culture from '../../components/Culture'
import Purpose from '../../components/Purpose'
import ContactUs from '../../components/Contactus'


class HomePage extends Component {
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
        // 找到锚点
        console.log(anchorName)
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }
  render() {
    return (
      <div>
        <Header scrollToAnchor={this.scrollToAnchor}/>
        <ControlledCarousel/>
        <ProductCenter/>
        <ProductIntroduce/>
        <AboutUs/>
        <Culture/>
        <ContactUs/>
        <ProductIdea/>
        <Footer/>
      


        
        
      </div>
    );
  }
}

export default HomePage;