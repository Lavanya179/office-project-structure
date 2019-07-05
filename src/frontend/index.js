import regeneratorRuntime from 'regenerator-runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { GVRouter } from 'grassvalley'
// import container instead of component
// (because container connects component to state and dispatch)
import { ConfigurationTab } from './containers/ConfigurationTab'
import { ScheduleTab } from './containers/ScheduleTab'
import { DiaryTab } from './containers/DiaryTab'
import { DiaryEditTab } from './containers/DiaryEditTab'
import { store } from './store/store'
import './styles/styles.scss'

const appProps = {
  store: store,
  product: 'iTX UX',
  project: 'Channel Ganging',
  tabs: [
    {
      text: 'Diary View',
      link: 'diary',
      icon: 'schedule-icon',
      component: DiaryTab
    },
    {
      text: 'Edit Diary View',
      link: 'edit-diary',
      icon: 'schedule-icon',
      component: DiaryEditTab
    },
    {
      text: 'Control Point View',
      link: 'control-point',
      icon: 'schedule-icon',
      component: ScheduleTab
    },
    {
      text: 'Ganging Configuration',
      link: 'config',
      icon: 'configuration-icon',
      component: ConfigurationTab
    }
  ],
  userMenuItems: [
    { name: 'Configuration', action: () => alert('Configuration clicked') }
  ]
}

ReactDOM.render(<GVRouter {...appProps} />, document.getElementById('app'))
