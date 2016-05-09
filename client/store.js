import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
)

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(completeTodo(0))
store.dispatch(completeTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()

export default 'NOTHING_HERE'
