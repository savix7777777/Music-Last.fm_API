import { combineReducers } from "redux";
import getArtistData from "./getArtistData";
import search from "./search";


export default combineReducers({
    getArtistData,
    search,
});