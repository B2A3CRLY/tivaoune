import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/navbar/Navbar';
import TourList from './components/tourList';


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
        <TourList/>
        <Router>
          <Switch>
            <Route path="https://babacar-ly-tivaouane.netlify.com/" component={TourList}/>
            <Route path="/about" component={About}/>
            <Route path="/tours" component={TourList}/>
          </Switch>
        </Router>
      </div>
    )
  }
}



