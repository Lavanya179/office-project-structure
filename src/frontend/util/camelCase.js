import _ from "lodash";

// Quick hack for now: https://stackoverflow.com/a/46598122
export function camelCaseKeys(obj) {
	if (!_.isObject(obj)) {
		return obj;
	} else if (_.isArray(obj)) {
		return obj.map((v) => camelCaseKeys(v));
	}
	return _.reduce(obj, (r, v, k) => {
		return { 
		...r, 
		[_.camelCase(k)]: camelCaseKeys(v) 
		};
	}, {});
}
