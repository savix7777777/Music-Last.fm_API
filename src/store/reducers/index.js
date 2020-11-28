import { combineReducers } from "redux";
import getArtistData from "./getArtistData";
import getPopularTracks from "./getPopularTracks";
import fetchArtistData from "./fetchArtistData";


export default combineReducers({
    getArtistData,
    getPopularTracks,
    fetchArtistData,
});