import React from 'react'

import DiaryDisplay from '../DiaryDisplay'

import { ScreenContainer, HourList } from './styles'

const HOURS = [
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '00',
  '01',
  '02',
  '03',
  '04'
]

const DiaryScreen = ({ items, time, getItem }) => {
  let iterator
  return (
    <ScreenContainer>
      <HourList>
        {HOURS.map((item, index) => {
          iterator = (index + 1) * 2 - 1
          return (
            <div className={`hourItem${index}`} key={index}>
              <style>{`
                :root {
                  --time-line-transformation: 0%;
                }
                .hourItem${index} {
                  grid-row:  ${iterator}/${iterator + 3};
                  grid-column: 1;
                }
              `}</style>
              {item}
            </div>
          )
        })}
      </HourList>
      <DiaryDisplay items={items} time={time} getItem={getItem} />
    </ScreenContainer>
  )
}

export default DiaryScreen