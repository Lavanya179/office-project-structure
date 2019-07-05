import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import DiaryTabView from '../../components/DiaryTab'

const mapStateToProps = state => {
  return {
    time: state.time,
    channelGangs: state.channelGangs
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export const DiaryTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiaryTabView)
