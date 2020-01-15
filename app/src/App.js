import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSentence, removeSentence } from './store/actions';
import Features from './components/Features';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    return (
      <Features></Features>
    );
  }
}


export default App;
