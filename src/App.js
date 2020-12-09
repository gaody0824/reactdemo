import React from 'react';
// 从react-router-dom 包中导入Router和Route，BrowserRouter是Router中的一种
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
// import { connect } from 'react-redux'
import Routers from './route/routerMap'

// 404页面
import NotFound from './views/not_found/not_found'

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Router >
                <Switch>
                    {Routers.map((item, index) => {
                        return <Route key={index} path={item.path} exact render={(props) =>
                            (!item.auth ? (<item.component {...props} />) :
                                    (<Redirect to={{ pathname: '/', state: { from: props.location }}} />)
                            )} />
                   })}

                   <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}
// // redux拿到token并挂载到App的props上面
// const mapStateToProps = (state, ownProps) => {
//     return { token: '1234' }
// }

export default App;