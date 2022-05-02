const LOAD_GAME_IMAGE = 'gameImages/GET'

const all_game_images = (images) =>({
    type: LOAD_GAME_IMAGE,
    images
})


export const get_all_game_images = (id) => async dispatch =>{
    const res = await fetch(`/api/images/game/${id}`)

    if(res.ok){
        const {images} = await res.json()

        dispatch(all_game_images(images.games_images))
    } else {
        return "ERROR AT GET_ALL_GAME_IMAGES THUNK!"
    }
}

const inititalState = {}
const gameImage_reducer = (state=inititalState, action) =>{
    let newState;

    switch(action.type){
        case LOAD_GAME_IMAGE:
            newState = {};
            action.images.forEach((image) => (newState[image.id] = image));
            return newState;
        default:
            return state;
    }
}

export default gameImage_reducer;
