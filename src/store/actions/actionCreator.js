import {GET_ARTIST_DATA,SET_SEARCH} from "./actions";


export const createArtistData = (payload) => {
    return {type: GET_ARTIST_DATA, payload}
};

export const createSetSearch = (payload) => {
    return {type: SET_SEARCH, payload}
};