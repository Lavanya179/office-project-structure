import React from 'react'

import { DisplayContainer, GangItem, TimeLine } from './styles'

const DiaryDisplay = ({ items, time, getItem }) => {
  let timeNow
  if (time < 5) {
    timeNow = (time + 20) * 2 - 1
  } else {
    timeNow = (time - 4) * 2 - 1
  }
  return (
    <DisplayContainer columnGridCount={items.length}>
      <TimeLine timeLineTransformation={`${(timeNow / 48) * 100}`} />
      {items !== undefined &&
        items.map((item, index) => {
          let startTime, endTime, backgroundColor
          if (item.startTime < 5) {
            startTime = (item.startTime + 20) * 2 - 1
          } else {
            startTime = (item.startTime - 4) * 2 - 1
          }
          endTime = startTime + (item.endTime - item.startTime) * 2
          if (timeNow >= startTime && timeNow <= endTime) {
            backgroundColor = 'red'
          } else if (timeNow > endTime) {
            backgroundColor = 'grey'
          } else {
            backgroundColor = 'orange'
          }
          return (
            <GangItem
              index={index}
              backgroundColor={backgroundColor}
              rows={`${startTime}/${endTime + 1}`}
              className={`GangItem item${index}`}
              key={index}
              value={index}
              onClick={getItem}
            >
              <p>{item.programme}</p>
              <p>{item.controlPoint}</p>
            </GangItem>
          )
        })}
    </DisplayContainer>
  )
}

export default DiaryDisplay