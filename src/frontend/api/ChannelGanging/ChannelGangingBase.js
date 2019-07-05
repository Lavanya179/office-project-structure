import { extend } from "lodash";
import { GVDebug } from "grassvalley";

const debug = GVDebug.extend("channel-ganging").extend("api");

export class ChannelGangingBase {
    constructor(channelGanging, apiPath) {
        this.channelGanging = channelGanging;
        this.apiPath = apiPath;
    }

    get(path, config) {
        const url = `${this.apiPath}${path}`;
        const t0 = new Date().getTime();
        const request = this.channelGanging.getClient().get(url, config);
        request.catch(this.handleError.bind(this, url));
        request.then(() => {
            const t1 = new Date().getTime();
            debug(`${t1 - t0}ms ${url}`);
        });
        return request;
    }

    request(config) {
        const url = `${this.apiPath}${config.url}`;
        const t0 = new Date().getTime();
        const request = this.channelGanging
            .getClient()
            .request(extend({}, config, { url }));
        request.catch(this.handleError.bind(this, url));
        request.then(res => {
            const t1 = new Date().getTime();
            debug(`${t1 - t0}ms ${url}`);
            return res;
        });
        return request;
    }

    handleError(url, err) {
        if (err.response && err.response.status) {
            if (err.response.status === 401) {
                debug("unauthorised", url);
                this.channelGanging.auth.login();
            } else {
                debug(
                    "error",
                    url,
                    err.response.status,
                    err.response.statusText
                );
            }
        }
        throw err;
    }
}