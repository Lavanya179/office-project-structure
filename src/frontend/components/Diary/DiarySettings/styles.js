import styled from 'styled-components'

export const SettingsContainer = styled.div`
  padding: 20px 20px 20px 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`
export const Label = styled.label`
  font-size: 1.3rem;
  margin: 20px 0 10px;
`

export const TimeInput = styled.input`
  width: 45%;
  font-size: 1.4rem;
  padding: 5px;
`

export const TextInput = styled.input`
  font-size: 1.3rem;
  padding: 5px;
`
export const Select = styled.select`
  font-size: 1.3rem;
`

export const ChannelContainer = styled.div`
  font-size: 1.3rem;
  border: 2px solid black;
  overflow-y: scroll;
  flex: 2;
  padding-left: 10px;
  ul {
    list-style: none;
    padding: 0px 16px;
  }
  ul > li {
    line-height: 1.5rem;
    cursor: pointer;
  }

  ul > li:hover {
    background-color: red;
  }
`