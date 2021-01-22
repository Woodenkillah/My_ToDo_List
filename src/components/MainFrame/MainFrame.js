import React from 'react'
import classes from './MainFrame.module.css'
import TodoList from '../TodoList/TodoList'

class MainFrame extends React.Component{

  render() {

    return (
      <div className={classes.MainFrame}>
        <TodoList/>
      </div>
    )
  }
}

export default MainFrame