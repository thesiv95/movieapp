import {Component} from 'react';
import './App.css';

import axios from 'axios';
import Loader from './components/Loader';
import MainPage from './components/MainPage';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    axios.get('http://localhost:9000/allData')
      .then(response => this.setState({
        data: response.data
      }));
  }

  render(){
    return (
      <div className="container">
        {this.state.data ? <MainPage data={this.state.data} /> : <Loader />}
      </div>
    );
  }
  
}


