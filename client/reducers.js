import { COMPLETE_TODO, ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
import {combineReducers } from 'redux'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [...state, {text: action.text, completed: false}]
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action){
  if ( action.type == SET_VISIBILITY_FILTER ){
    return action.filter
  }
  return state
}

// function todoApp(state = initialState, action){

//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todo(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
