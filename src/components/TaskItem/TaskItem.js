import React from 'react'
import classes from './TaskItem.module.css'

class TaskItem extends React.Component {

  setCompletedMark = () => {

    let resetValidity = true

    let completedParagraphClasses = [classes.p, classes.completed].join(' ')
    let paragraphClasses = [classes.p].join(' ')

    if (this._pElement.className.includes('completed')) {
      this._pElement.className = paragraphClasses
      this.props.resetValidity(resetValidity)
    } else {
      this._pElement.className = completedParagraphClasses
      this.props.resetValidity(resetValidity)
    }

  }

  render() {

    let paragraphClasses = [classes.p].join(' ')

    return (
      <li className={classes.TaskItem}>
        <p ref={(el)=>this._pElement=el} className={paragraphClasses} onClick={this.setCompletedMark}>{this.props.text}</p>
        <button id={this.props.id} onClick={this.props.delete}>Delete task</button>
      </li>
    )
  }
}

export default TaskItem