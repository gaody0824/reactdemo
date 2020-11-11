import React from 'react';
// 从react-router-dom 包中导入Router和Route，BrowserRouter是Router中的一种
import { BrowserRouter as Router,Route} from 'react-router-dom';
// 下面依次引入各组件
import Home from "./views/home/home";
import Page1 from "./views/page1/page1";


// Router只能有一个子组件，所以要把所有Route标签用一个div包裹起来
// exact 默认不渲染Home组件

class App extends React.Component {
    render(){
        return(
            <Router >
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/Page1" component={Page1} />
                </div>
            </Router>
        )
    }
}
export default App;