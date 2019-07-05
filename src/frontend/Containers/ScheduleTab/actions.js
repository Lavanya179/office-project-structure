import { GVPlatform, GVImplicitAuth } from "grassvalley";
import { ChannelGanging } from "../../api";
import * as ActionTypes from "../../store/actionTypes";

export const fetchServiceInfo = () => {
    const channelGanging = ChannelGanging.get(
        GVPlatform.get().getConfig(),
        GVImplicitAuth.get()
    );

    return (dispatch, getState) => {
        channelGanging.serviceInfo
            .getServiceInfo()
            .then(r => dispatch(successConfigSeviceInfo(r.data)))
            .catch(e => dispatch(errorConfigSeviceInfo(e.statusText)));
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
