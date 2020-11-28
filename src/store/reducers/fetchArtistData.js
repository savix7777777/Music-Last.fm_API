export default (state = {}, action) => {
    switch (action.type){
        case 'FETCH_ARTIST_INFO':
            console.log(action.payload)
            return action.payload;

        default:
            return state;
    }
};