import { GVDebug } from "grassvalley";
import { ChannelGangingBase } from "./ChannelGangingBase";

const debug = GVDebug.extend("channel-ganging").extend("controlPoints");

export class ChannelGangingControlPoints extends ChannelGangingBase {
    constructor(channelGanging) {
        super(channelGanging, "/api/v1");
    }

    getControlPoints() {
        return this.get("/configuration/controlpoints");
    }

    setControlPoints(controlPoints) {
        return this.request({
            method: "put",
            url: `/configuration/controlpoints`,
            data: controlPoints
        });
    }
}