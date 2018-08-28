import React, { Component } from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux';

class Middleware extends Component {
  render() {

    const reducer=(state,action) => {
      switch (action.type) {
        case "INC":
          return state+1
          break;
        case "DEC":
          return state-1
          break;
        case "E":
          throw new Error("AHHHH!!")
          break;
        default:
          return state
      }
    }
    const logger = (store) => (next) => (action) => {
      console.log("action fired",action);
      //action.type="DEC"
      next(action)
    }

    const error = (store) => (next) => (action) => {
      try{
        next(action)
      } catch(e){
        console.log("error ",e);
      }
    }
    const middleware=applyMiddleware(logger,error)
    const store=createStore(reducer,0,middleware)
    store.subscribe(() => {
      console.log("store changed", store.getState());
    })
    store.dispatch({type:"INC"})
    store.dispatch({type:"INC"})
    store.dispatch({type:"INC"})
    store.dispatch({type:"INC"})
    store.dispatch({type:"E"})

    return (
      <div className="Middleware">

      </div>
    );
  }
}

export default Middleware;
