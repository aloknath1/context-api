import React, {Component} from 'react';

//first we will create a new Context
const MyContext = React.createContext();

//then create a provier component
class MyProvider extends Component {  
    state = {
      name: "alok",
      age: 34,
      cool:true
    };

  render(){
    return (
        <MyContext.Provider value={{
          state: this.state,
          growAYearOlder: () => this.setState({
            age: this.state.age + 1
          })
          }}>
          {this.props.children}
        </MyContext.Provider>      
      );
  } 
}

const Family = (props) => {
  return (
    <div className="family">   
      <Person name={props.name} />
    </div>
  );
}

class Person extends Component {  
  render(){
    return (
        <div className="person">
         <MyContext.Consumer>
           {(context) => (
             <React.Fragment>
               <p>Name: {context.state.name}</p>
               <p>Age: {context.state.age}</p>
               <button onClick={context.growAYearOlder}>Increment Age</button>
             </React.Fragment>
            )}
         </MyContext.Consumer>
        </div>
      );
  } 
}

class App extends Component {
  render(){
    return (
      <MyProvider>
        <div className="App">
          <p>I'm in the app</p>
          <Family />
        </div>
      </MyProvider>
      );
  } 
}

export default App;
