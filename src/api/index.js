class Helper {
	static baseUrl() {
		return "https://api.foursquare.com/v2";
	}
	static auth() {
		const keys = {
			client_id: "GGXCA2DKZ0EK0ID4S4SYLYTMPWFCNHOFBSBHFMOZTSJTAWX5",
			client_secret: "CKLZUO02MB5DKBQ4UCHV4Q0MT4UOV5EXPL0SPHDSE14IID4R",
			v: "20181109"
		}
		return Object.keys(keys)
		.map(k => `${k}=${keys[k]}`)
		.join("&");
	}
	static urlBuilder(urlParams) {
		if(!urlParams) {
			return "";
		}
		return Object.keys(urlParams)
		.map(k => `${k}=${urlParams[k]}`)
		.join("&");
	}
	static headers() {
		return {
			Accept: "application/json"
		};
	}
	static simpleFetch(endPt, method, urlParams) {
		let requestData = {
			method,
			headers: Helper.headers()
		};
		return fetch(
			`${Helper.baseUrl()}${endPt}?${Helper.auth()}&${Helper.urlBuilder(
				urlParams
				)}`,
				requestData
			).then(res => res.json());
	}
}

export default class SquareApi {
	static search(urlParams) {
		return Helper.simpleFetch("/venues/search", "GET", urlParams);
	}
	static getVenueDetails(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
	}
	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
	}
}