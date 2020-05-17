import React, { Component } from 'react';
import {Carousel,Button,Navbar,Nav,Container} from 'react-bootstrap'
import bfcode from '../images/bfcode.png'
export default class Footer extends Component {
    render(){
        return(
        <div className='footer'>
            <div className='foot-con'>
                <img className='code' src={bfcode}/>
                <div className='foot-contactus'>
                    <div className='foot-contactus-title'>联系我们</div>
                    全国统一电话：4008929626<br/>
                    联系电话：15555611655<br/>
                    email：bangfangshengwu@163.com<br/>

                </div>
            </div>   
            <div className='foot-copyright'>
            版权所有 ©2020 安徽邦方生物科技有限公司 All rights reserved.
            </div>   
        </div>
        )
    }

}