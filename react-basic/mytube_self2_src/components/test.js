var { google } = require('googleapis');

var service = google.youtube('v3');
service.videos.list({
    key: `AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ`,
    part: `snippet`,
    id: `V3ebCh-zgmY`,
    fields: `items(snippet(title, description, channelId))`
}, function(err, response) {
    if(err) {
        console.log('The API returned an error: ' + err);
        return;
    }

    var video = response.data.items;
    if(video.length == 0) {
        console.log('검색된 동영상이 없습니다.');
    } else {
        console.log(JSON.stringify(response.data.items[0], null, 4));
    }
});

