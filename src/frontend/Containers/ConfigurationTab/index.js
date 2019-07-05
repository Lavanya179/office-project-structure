import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import ConfigurationTabView from "../../components/ConfigurationTab";

const mapStateToProps = state => {
    const controlPoints = state.configuration.get("controlPoints");
    return {
        serviceInfo: state.configuration.get("serviceInfo"),
        controlPoints: controlPoints && controlPoints.toJS()
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export const ConfigurationTab = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigurationTabView);
