import React from 'react';
import axios from 'axios';

class Welcome extends React.Component {
    state={
        insult: '',
    };
    async fetchInsult() {
        const insult = await axios.get('http://localhost:5000/insults');
        this.setState ({insult: insult.data});
    }
    componentDidMount() {
        this.fetchInsult();    
    }
    render() {
      return <h1>{this.state.insult}</h1>;
    }
  }
  export default Welcome;