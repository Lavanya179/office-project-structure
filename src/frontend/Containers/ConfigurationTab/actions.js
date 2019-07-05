import { GVPlatform, GVImplicitAuth } from "grassvalley";
import { ChannelGanging } from "../../api";
import * as ActionTypes from "../../store/actionTypes";

export const fetchServiceInfo = () => {
    const channelGanging = ChannelGanging.get(GVPlatform.get().getConfig(), GVImplicitAuth.get());

    return (dispatch, getState) => {
        channelGanging.serviceInfo
            .getServiceInfo()
            .then(r => dispatch(successConfigSeviceInfo(r.data)))
            .catch(e => dispatch(errorConfigSeviceInfo(e.message)));
    };
};

export const successConfigSeviceInfo = message => {
    return {
        type: ActionTypes.SUCCESS_GANGINGSERVICEINFO,
        message
    };
};

export const errorConfigSeviceInfo = message => {
    return {
        type: ActionTypes.ERROR_GANGINGSERVICEINFO,
        message
    };
};

export const fetchControlPoints = () => {
    const channelGanging = ChannelGanging.get(GVPlatform.get().getConfig(), GVImplicitAuth.get());

    return (dispatch, getState) => {
        channelGanging.controlPoints
            .getControlPoints()
            .then(r => dispatch(successFetchControlPoints(r.data)))
            .catch(e => dispatch(errorFetchControlPoints(e.message)));
    };
};

export const successFetchControlPoints = data => {
    return {
        type: ActionTypes.SUCCESS_GETCONTROLPOINTS,
        data
    };
};

export const errorFetchControlPoints = message => {
    return {
        type: ActionTypes.ERROR_GETCONTROLPOINTS,
        message
    };
};

export const setControlPoints = newList => {
    const channelGanging = ChannelGanging.get(GVPlatform.get().getConfig(), GVImplicitAuth.get());

    return (dispatch, getState) => {
        channelGanging.controlPoints
            .setControlPoints({ controlPoints: newList })
            .then(r => dispatch(successSetControlPoints(r.data)))
            .catch(e => dispatch(errorSetControlPoints(e.message)));
    };
};

export const successSetControlPoints = data => {
    return {
        type: ActionTypes.SUCCESS_SETCONTROLPOINTS,
        data
    };
};

export const errorSetControlPoints = message => {
    return {
        type: ActionTypes.ERROR_SETCONTROLPOINTS,
        message
    };
};
