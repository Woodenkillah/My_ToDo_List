import React from 'react'
import classes from './Form.module.css'

class Form extends React.Component {

  constructor (props) {
    super (props) 

    this.submitInputHandler = this.submitInputHandler.bind(this)
    this.getHelpMessage = this.getHelpMessage.bind(this)
  }

  getHelpMessage() {
    let helpMessage = {
      completeItem: 'Click on the task below to mark it as completed or to unmark the task',
      validation: 'Please type text in the field above to add a new task'
    }

    let message

    if (this.props.isItemAdded && this.props.isFormValid) {
      message = helpMessage.completeItem
    } else if (!this.props.isFormValid) {
      message = helpMessage.validation
    }

    return message
  }


  submitInputHandler(evt) {

    let inputValue = this._inputElement.value

    this.props.getFormData(inputValue)
    this._inputElement.value = ''

    evt.preventDefault()
  }

  render() { 

    let messageClasses = [classes.message]
    let inputClasses = [classes.input]

    if (!this.props.isFormValid) {
      messageClasses.push(classes.invalid)
      inputClasses.push(classes.invalid)
    }

    return (
      <form className={classes.Form} onSubmit={this.submitInputHandler}>
        <input className={inputClasses.join(' ')} type='text' ref={(el) => this._inputElement=el} placeholder='Write down your task here'></input>
        <button type='submit'>Add</button>
        <p className={messageClasses.join(' ')} ref={(el => this._messageElement=el)}>{this.getHelpMessage()}</p>
      </form>
    )

  }

}

export default Form