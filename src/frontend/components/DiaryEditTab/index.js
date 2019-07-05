import React, { Component } from 'react'
import Diary from '../Diary'

class DiaryEditTabView extends Component {
  componentDidMount () {
    this.props.loadItems()
    console.log('load', this.props.loadItems())
    this.props.updateTime()
  }

  handleItem = event => {
    this.props.readSelectedItem(event.currentTarget.attributes.value.value)
  }

  render () {
    console.log('items fetching', this.props.channelGangs)
    const { fetching } = this.props.channelGangs
    if (fetching) {
      return <div className=''>loading</div>
    }
    return (
      <div>
        <Diary
          {...this.props}
          editView
          getItem={event => this.handleItem(event)}
        />
      </div>
    )
  }
}

export default DiaryEditTabView
