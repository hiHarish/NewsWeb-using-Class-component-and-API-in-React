import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <><Router>
        <NavBar/>
      <Switch>
          <Route exact path="/"> <News key={'general'} pagesize={10} category={'general'} country={"in"}/></Route>
          <Route exact path="/tech"> <News key={'tech'} pagesize={10} category={'technology'} country={"in"}/></Route>
          <Route exact path="/entertainment"> <News key={'enten'} pagesize={10} category={'entertainment'} country={"in"}/></Route>
          <Route exact path="/business"> <News pagesize={10} key={'bu'} category={'business'} country={"in"}/></Route>
          <Route exact path="/health"> <News pagesize={10} key={'health'} category={'health'} country={"in"}/></Route>
          <Route exact path="/science"> <News pagesize={10} key={'sci'} category={'science'} country={"in"}/></Route>
          <Route exact path="/sports"> <News pagesize={10} key={'sports'} category={'sports'} country={"in"}/></Route>
        </Switch>
        </Router>
      
      </>
      
    )
  }
}
