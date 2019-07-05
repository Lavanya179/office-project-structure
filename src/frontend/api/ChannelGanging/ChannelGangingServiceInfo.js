import { GVDebug } from "grassvalley";
import { ChannelGangingBase } from "./ChannelGangingBase";

const debug = GVDebug.extend("channel-ganging").extend("serviceInfo");

export class ChannelGangingServiceInfo extends ChannelGangingBase {
    constructor(channelGanging) {
        super(channelGanging, "/api/v1");
    }

    getServiceInfo() {
        return this.get("/serviceinfo");
    }
}