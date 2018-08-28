import React, { Component } from 'react';
import {createStore} from 'redux';

import MultiReducers from './multiReducers';
import Middleware from './middleware';

class App extends Component {
  render() {
    const reducer=function(state,action){
      if(action.type === 'INC'){
        return state+action.payload
      }
      if(action.type === 'DEC'){
        return state-1
      }
      return state
    }
    const store = createStore(reducer,0)
    store.subscribe(() => {
      console.log("store changed",store.getState());
    })
    // store.dispatch({type:"INC",payload:10})
    // store.dispatch({type:"INC",payload:1})
    // store.dispatch({type:"INC",payload:1})
    // store.dispatch({type:"DEC",payload:1})
    // store.dispatch({type:"DEC",payload:1})

    return (
      <div className="App">
        <Middleware/>
      </div>
    );
  }
}

export default App;
