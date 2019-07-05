import Axios, { AxiosInstance } from "axios";
import { GVDebug } from "grassvalley";
import { ChannelGangingServiceInfo } from "./ChannelGangingServiceInfo";
import { ChannelGangingControlPoints } from "./ChannelGangingControlPoints";

const debug = GVDebug.extend("channel-ganging");

export class ChannelGanging {
    static get(config, auth) {
        if (!this.channelGanging) {
            if (!config || !auth) {
                throw new Error(
                    "ChannelGanging has not been created and no config was passed in"
                );
            }
            debug("creating new instance");
            this.channelGanging = new ChannelGanging(config, auth);
        }
        return this.channelGanging;
    }

    constructor(config, auth) {
        debug("config", JSON.stringify(config));
        let baseUri = config.namespace
            ? `${config.publicUri}/${config.namespace}/cbc/channel-ganging`
            : `${config.publicUri}/cbc/channel-ganging`;
        this.client = Axios.create({
            baseURL: baseUri
        });
        this.auth = auth;
        this.config = config;
        this.client.interceptors.request.use(
            requestConfig => {
                if (!requestConfig.headers.Authorization) {
                    if (this.auth.isAuthenticated()) {
                        if (!requestConfig.headers) {
                            requestConfig.headers = {};
                        }
                        requestConfig.headers.Authorization = `Bearer ${this.auth.getToken()}`;
                    }
                }
                return requestConfig;
            },
            error => Promise.reject(error)
        );

        this.serviceInfo = new ChannelGangingServiceInfo(this);
        this.controlPoints = new ChannelGangingControlPoints(this);
    }

    getClient() {
        return this.client;
    }
}