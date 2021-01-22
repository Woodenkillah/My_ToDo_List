import React from 'react'
import classes from './ListItems.module.css'
import FlipMove from 'react-flip-move'
import TaskItem from '../../components/TaskItem/TaskItem'

class ListItems extends React.Component {

  constructor (props) {
    super (props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(item) {
    return (
      <TaskItem text={item.text} key={item.key} id={item.key} resetValidity={this.props.resetValidity} delete={this.props.delete}/>
    )
  }

  render () {

    let items = this.props.items
    let itemsList = items.map(this.renderItem)

    return (
      <ul className={classes.ListItems}>
        <FlipMove duration={250} easing='ease-in-out'>
          {itemsList}
        </FlipMove>
      </ul>
    )

  }


}

export default ListItems