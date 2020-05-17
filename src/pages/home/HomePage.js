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



class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ControlledCarousel/>
        <ProductCenter/>
        <ProductIntroduce/>
        <AboutUs/>
        <Culture/>
        <ProductIdea/>
        <Footer/>
      


        
        
      </div>
    );
  }
}

export default HomePage;