import qs from "qs";

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async getVideo(query) {
    try {
      const response = await this.youtube.get("videos", {
        params: {
          part: "snippet",
          id: query,
        },
        // parmsSerializer: (params) => qs.stringify(params, { encode: false }),
      });

      return response.data.items;
    } catch (error) {
      console.log(
        "죄송합니다! 유튜브 API에서 하루에 사용할 수 있는 영상 횟수를 초과하였습니다! 내일 16:00 이후에 방문해주세요! 감사합니다! ^^"
      );
      return;
    }
  }

  async moreVideos(query) {
    try {
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
    } catch (error) {
      console.log(
        "죄송합니다! 유튜브 API에서 하루에 사용할 수 있는 영상 횟수를 초과하였습니다! 내일 16:00 이후에 방문해주세요! 감사합니다! ^^"
      );
      return;
    }
  }
}

export default Youtube;
