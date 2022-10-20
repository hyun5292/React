import qs from 'qs';

class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
            paramsSerializer: (params) => qs.stringify(params, { encode: false }),
        });
        
        return response.data.items;
    }

    async search(query) {
        // const response = await this.youtube.get('search', {
        //     params: {
        //         part: 'snippet',
        //         maxResults: 25,
        //         type: 'video',
        //         q: query,
        //     },
        // });

        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            },
            paramsSerializer: (params) => qs.stringify(params, { encode: false }),
        });

        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    };
}

export default Youtube;