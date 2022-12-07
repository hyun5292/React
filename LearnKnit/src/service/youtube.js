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
      // parmsSerializer: (params) => qs.stringify(params, { encode: false }),
    });

    return response.data.items;
  }

  async moreVideos(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        q: query,
        type: "video",
      },
      // paramsSerializer: (params) => qs.stringify(params, { encode: false }),
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
