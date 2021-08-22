import React from 'react';
import './App.css';

class App extends React.Component {


constructor() {
  super();

  this.state = {
    data:false
  };
}

componentDidMount() {
  let url = 'https://api.hatchways.io/assessment/sentences/1';
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((result) => {
    // result.json().then((resp)=>{

    //   this.setState({data:resp})
    // })
    result.json().then((resp) => {
      // resp is: {"data":{"sentence":"I love learning code"}}
      const { data } = resp
      this.setState({ data })
    })
  })

}

  render() {
    const data=this.state.data;
    const letters = Array.from(data.sentence)
    console.warn('data');
    return (
     <div>
       {
        data ?
         <div>
           <h1 className="title">{letters}</h1>
         </div>
         : <h1>Please wait...</h1>
       }
     </div>
  )}
  
}

export default App;

