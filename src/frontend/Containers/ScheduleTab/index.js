import React from 'react'
import { connect } from 'react-redux'
import { GVPanel } from 'grassvalley'
import * as Actions from '../../containers/ConfigurationTab/actions'
import ScheduleTabView from '../../components/ScheduleTab'

function mapStateToProps (state) {
  return {
    serviceInfo: state.configuration.get('serviceInfo')
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchServiceInfo: () => dispatch(Actions.fetchServiceInfo())
  }
}

export const ScheduleTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleTabView)
