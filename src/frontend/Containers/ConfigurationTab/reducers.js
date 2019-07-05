import * as ActionTypes from "../../store/actionTypes";
import * as Immutable from "immutable";

const initialState = {
    serviceInfo: "Not fetched",
    controlPoints: [],
    error: null
};

export const configReducer = (state, action) => {
    if (!state) {
        state = Immutable.fromJS(initialState);
    }

    switch (action.type) {
        case ActionTypes.SUCCESS_GANGINGSERVICEINFO:
        case ActionTypes.ERROR_GANGINGSERVICEINFO:
            return state.set("serviceInfo", action.message);

        case ActionTypes.SUCCESS_GETCONTROLPOINTS:
        case ActionTypes.SUCCESS_SETCONTROLPOINTS:
            return state.set(
                "controlPoints",
                Immutable.fromJS({
                    controlPoints: action.data && action.data.controlPoints,
                    error: null
                })
            );

        case ActionTypes.ERROR_GETCONTROLPOINTS:
        case ActionTypes.ERROR_SETCONTROLPOINTS:
            return state.set(
                "controlPoints",
                Immutable.fromJS({
                    controlPoints: null,
                    error: action.message
                })
            );
        default:
            return state;
    }
};
