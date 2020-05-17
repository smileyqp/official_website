import React, { Component } from 'react';
import {Carousel,Button} from 'react-bootstrap'
import pic_1 from '../images/1.jpg'
import pic_2 from '../images/2.jpg'
import pic_3 from '../images/3.jpg'

export default class ControlledCarousel extends Component {
    render(){
        return(
            <section id='home'>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pic_2}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pic_2}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={pic_2}
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </section>
        )
    }

}