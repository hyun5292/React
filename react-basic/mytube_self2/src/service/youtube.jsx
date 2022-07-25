class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    };

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;
    };
    
}

export default Youtube;