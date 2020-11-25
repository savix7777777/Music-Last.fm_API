export default (state = 'artist', action) => {
    switch (action.type){
        case 'GET_ARTIST_DATA':
            return action.payload;

        default:
            return state;
    }
};