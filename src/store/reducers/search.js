export default (state = false, action) => {
    switch (action.type){
        case 'SET_SEARCH':
            return action.payload;

        default:
            return state;
    }
};