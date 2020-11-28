export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_POPULAR_TRACKS_SUCCESS':
            return action.payload;

        default:
            return state;
    }
};