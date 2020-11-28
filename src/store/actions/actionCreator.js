import { GET_ARTIST_DATA, FETCH_POPULAR_TRACKS_SUCCESS, FETCH_ARTIST_INFO } from "./actions";
import { keyAPI } from "../../config";


export const createArtistData = (payload) => {
    return {type: GET_ARTIST_DATA, payload}
};


export const fetchTracksData = () => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=germany&api_key=${keyAPI}&format=json`)
        .then(response => response.json())
        .then(result => dispatch({type: FETCH_POPULAR_TRACKS_SUCCESS, payload: result.tracks.track}))
        .catch(e => console.log(`Error ${e.name}: ${e.message}`));
};


export const fetchArtistData = (name) => dispatch => {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${keyAPI}&format=json`)
        .then(response => response.json())
        .then(result => dispatch({type: FETCH_ARTIST_INFO, payload: result}))
        .catch(e => console.log(`Error ${e.name}: ${e.message}`));
};
