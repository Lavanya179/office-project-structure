import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 20fr;
  grid-template-rows: 1fr;
`

export const HourList = styled.div`
  display: grid;
  grid-template-columns: 40px;
  grid-template-rows: repeat(48, 1fr);
  padding: 2px;
`