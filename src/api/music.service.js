import Axios from 'axios';

class MusicService {
  list = async () => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=be8c6a4c47c8e04774909a893e4c64fe&format=json`;
    return await Axios({
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(json => json.data)
      .then(response => response.tracks.track)
      .catch(msg => console.log(msg));
  };
}

export default new MusicService();
