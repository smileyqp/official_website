import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav} from 'react-bootstrap'
import logo from "../images/logo.jpg"

export default class Header extends Component {
    render(){
        return(
            <Navbar bg="light" expand="lg"  sticky="top" className='header'>
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#home" className='navbtn'>首页</Nav.Link>
                    <Nav.Link href="#prdcenter" className='navbtn'>产品中心</Nav.Link>
                    <Nav.Link href="#prdintro" className='navbtn'>产品介绍</Nav.Link>
                    <Nav.Link href="#aboutus">关于我们</Nav.Link>
                    <Nav.Link href="#culture">企业文化</Nav.Link>
                    
                </Navbar.Collapse>
                
            </Navbar>
        )
    }

}