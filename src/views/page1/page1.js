import React from 'react';
import {Redirect} from "react-router-dom";
import {Button} from 'antd';

class Page1 extends React.Component{
    constructor() {  // 用于创建和初始化class创建的对象的特殊方法
        super();
        this.state = {
            isJump:false
        }
    }
    jump = () => {
        this.setState({
            isJump:true
        })
    };
    render(){
        if(this.state.isJump){
            return <Redirect to={{ pathname:"/Page2"}} />;
        }
        return(
            <div className='page1'>
                <div className='hh'>This is Page1!</div>
                <Button type="primary" onClick={this.jump}>Primary Button</Button>
            </div>
        );
    }
}

export default Page1;