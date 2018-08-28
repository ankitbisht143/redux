import React, { Component } from 'react';
import {createStore,combineReducers} from 'redux';

class MultiReducers extends Component {
  render() {

    const userReducer=(state={},action) => {
      switch(action.type){
        case "CHANGE_NAME":
          return {
            ...state,
            name:action.payload
          }
          break;
        case "CHANGE_AGE":
          return {
            ...state,
            age:action.payload
          }
          break
        default:
        return state
      }
    }

    const tweetReducer=(state=[],action) => {
      return state
    }
    const reducers=combineReducers({
      user:userReducer,
      tweet:tweetReducer
    })

    const store=createStore(reducers)

    store.subscribe(() => {
      console.log("store changed",store.getState());
    })

    store.dispatch({type:"CHANGE_NAME",payload:"Ankit"})
    store.dispatch({type:"CHANGE_AGE",payload:24})
    store.dispatch({type:"CHANGE_NAME",payload:"Bisht"})
    store.dispatch({type:"CHANGE_AGE",payload:18})

    return (
      <div className="MultiReducers">

      </div>
    );
  }
}

export default MultiReducers;
