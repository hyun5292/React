import qs from "qs";

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async getVideo(query) {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        id: query,
      },
      parmsSerializer: (params) => qs.stringify(params, { encode: false }),
    });

    return response.data.items;
  }
}

export default Youtube;
