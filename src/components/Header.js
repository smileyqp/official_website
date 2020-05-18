import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav} from 'react-bootstrap'
import logo from "../images/logo.jpg"

export default class Header extends Component {
    render(){
        const {scrollToAnchor} = this.props;
        return(
            <Navbar bg="light" expand="lg"  sticky="top" className='header'>
                <Navbar.Brand className='navbtn navlogo' onClick={()=>scrollToAnchor('home')} >
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                <div className='title-font' >邦方生物</div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link  className='navbtn' onClick={()=>scrollToAnchor('home')}>首页</Nav.Link>
                    <Nav.Link  className='navbtn'  onClick={()=>scrollToAnchor('prdcenter')}>产品中心</Nav.Link>
                    <Nav.Link  className='navbtn' onClick={()=>scrollToAnchor('prdintro')}>产品介绍</Nav.Link>
                    <Nav.Link className='navbtn' onClick={()=>scrollToAnchor('aboutus')}>关于我们</Nav.Link>
                    <Nav.Link className='navbtn' onClick={()=>scrollToAnchor('culture')}>企业文化</Nav.Link>
                    
                </Navbar.Collapse>
                
            </Navbar>
        )
    }

}