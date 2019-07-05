import React from 'react'

import {
  SettingsContainer,
  Label,
  ChannelContainer,
  TextInput,
  Select,
  TimeInput
} from './styles.js'

const DiarySettings = ({ selectedItem }) => {
  // if (selectedItem && )
  return (
    <SettingsContainer>
      <Label htmlFor='start'>Start</Label>
      <br />
      <TimeInput
        type='text'
        id='start'
        name='start'
        placeholder='00:00:00:00'
        readOnly
        value={selectedItem ? `${selectedItem.startTime}:00:00:00` : ''}
      />
      <Label htmlFor='end'>Stop</Label>
      <br />
      <TimeInput
        type='text'
        id='end'
        name='stop'
        placeholder='00:00:00:00'
        readOnly
        value={selectedItem ? `${selectedItem.endTime}:00:00:00` : ''}
      />
      <Label htmlFor='programme'>Programme</Label>
      <br />
      <TextInput
        type='text'
        id='programme'
        name='programme'
        readOnly
        value={selectedItem ? selectedItem.programme : ''}
      />
      <Label htmlFor='control'>Conrol Point</Label>
      <br />
      <TextInput
        type='text'
        id='control'
        name='control'
        readOnly
        value={selectedItem ? selectedItem.controlPoint : ''}
      />
      <Label htmlFor='gang'>Gang</Label>
      <br />
      <TextInput
        type='text'
        id='gang'
        name='gang'
        readOnly
        value={selectedItem ? selectedItem.gang : ''}
      />
      <Label htmlFor='channels'>Channels</Label>
      <br />
      <ChannelContainer id='channels'>
        <ul>
          <li>Moncton</li>
          <li>Quebec</li>
          <li>Rimaouski</li>
          <li>Ottawa</li>
          <li>Toronto</li>
          <li>Trois-Rivieres</li>
          <li>Sherebrooke</li>
          <li>Sogueny</li>
        </ul>
      </ChannelContainer>
    </SettingsContainer>
  )
}

export default DiarySettings
