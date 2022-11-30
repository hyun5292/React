class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async getVideo(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&id=${query}`,
      this.getRequestOptions
    );
    const result = await response.json();
    const item = result.items;
    return { ...item, id: item.id.videoId };
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeFetch;
