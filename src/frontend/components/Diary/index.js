import React from 'react'

import DiaryScreen from './DiaryScreen'
import DiarySettings from './DiarySettings'
import EditDiarySettings from './EditDiarySettings'
import { Title, Container } from './styles'

const Diary = ({ channelGangs, time, getItem, editView = false }) => {
  const { items, selectedItem } = channelGangs
  return (
    <div>
      <Title>Diary</Title>
      <Container>
        <DiaryScreen items={items} time={time} getItem={getItem} />
        {editView ? (
          <EditDiarySettings selectedItem={selectedItem} />
        ) : (
          <DiarySettings selectedItem={selectedItem} />
        )}
      </Container>
    </div>
  )
}

export default Diary
