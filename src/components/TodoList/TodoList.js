import React from 'react'
import classes from './TodoList.module.css'
import Form from '../../components/Form/Form'
import ListItems from '../../components/ListItems/ListItems'

class TodoList extends React.Component {

  constructor (props) {
    super (props)

    this.state = {
      taskItems: [],
      isItemAdded: false,
      isFormValid: true
    }

    this.getFormData = this.getFormData.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.resetValidity = this.resetValidity.bind(this)
  }

  resetValidity(isReset) {
    return isReset ? this.setState({isFormValid: true}) : null
  }

  getFormData(inputValue) {

    if (inputValue !== '') {
      let taskItems = this.state.taskItems

      let item = {
        key: '',
        text: ''
      }
  
      item.text = inputValue;
      item.key = Date.now()
      taskItems.unshift(item)
  
      this.setState({
        taskItems,
        isItemAdded: true,
        isFormValid: true
      })
      
    } else {
      this.setState({
        isFormValid: false
      })
    }

  }

  deleteTask(evt) {
    let taskItems = this.state.taskItems
    let updatedTaskItems = taskItems.filter(item => +item.key !== +evt.target.id)

    let isItemAdded

    updatedTaskItems.length !== 0 ? isItemAdded = true : isItemAdded = false

    this.setState({
      taskItems: updatedTaskItems,
      isItemAdded,
      isFormValid: true
    })

    evt.preventDefault()
  }

  render() {

    return (
      <div className={classes.TodoList}>
        <Form isItemAdded={this.state.isItemAdded} isFormValid={this.state.isFormValid} getFormData={this.getFormData}/>
        <ListItems items={this.state.taskItems} resetValidity={this.resetValidity} delete={this.deleteTask}/>
      </div>
    )
  }

}

export default TodoList