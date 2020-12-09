import React from 'react'
import {Redirect}  from 'react-router-dom'
import {Form, Input, Button, Checkbox, message} from 'antd';
import './login.less'

const layout = {
    wrapperCol: {offset: 3, span: 18},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

class Login extends React.Component {
    constructor() {  // 用于创建和初始化class创建的对象的特殊方法
        super();
        this.state = {
            isLoginSuccess:false
        }
    }
    onFinish = (values) => {
        if (!values.username) {
            message.warn('请输入用户名！');
            return
        }
        if (!values.password) {
            message.warn('请输入密码！');
            return
        }
        if (values.username !== 'admin' || values.password !== 'admin') {
            message.error('用户名或密码错误！');
            return
        }
        message.success('登录成功!');
        this.setState({
            isLoginSuccess:true
        })
    };

    render() {
        if(this.state.isLoginSuccess){
            return <Redirect to={{ pathname:"/Page1"}} />;
        }
        return (
            <div className="bg">
                <div className="login_wrap">
                    <div className="login">
                        <div className="status">
                            <i style={{top: 0}}>登</i>
                            <i style={{right: '5px'}}>录</i>
                        </div>
                        <div className="login_form">
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item name="username">
                                    <Input placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item name="password">
                                    <Input.Password placeholder="请输入密码"/>
                                </Form.Item>
                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>记住密码</Checkbox>
                                </Form.Item>

                               <div className="login_btn">
                                   <Button ghost htmlType="submit">
                                       登录
                                   </Button>
                               </div>
                            </Form>
                        </div>

                    </div>
                    <div className="login_img">
                      <span className="circle">
                          <span></span>
                          <span></span>
                      </span>
                        <span className="star">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                      </span>
                        <span className="fly_star">
                          <span></span>
                          <span></span>
                      </span>
                        <p className="title">
                            <i>不知道什么系统</i>
                        </p>
                    </div>
                </div>
            </div>
        )
    };

}

export default Login;