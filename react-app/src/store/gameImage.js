const LOAD_GAME_IMAGE = 'gameImages/GET'
const ADD_NEW_GAME_IMAGE = 'gameImages/POST'
const DELETE_GAME_IMAGE = 'gameImages/DELETE'

const all_game_images = (images) =>({
    type: LOAD_GAME_IMAGE,
    images
})
const add_game_image = (image, gameId) =>({
    type: ADD_NEW_GAME_IMAGE,
    image,
    gameId
})

const delete_image = (gameId, imageId) => ({
    type: DELETE_GAME_IMAGE,
    game_id: gameId,
    image_id: imageId,
})


export const get_all_game_images = (id) => async dispatch =>{
    const res = await fetch(`/api/images/game/${id}`)

    if(res.ok){
        const imagesDict = await res.json()
        const images = imagesDict["game_images"]
        if(!images){
            return "Images is empty!"
        }
        dispatch(all_game_images(images))
    } else {
        return "ERROR AT GET_ALL_GAME_IMAGES THUNK!"
    }
}

export const add_new_image = (image, gameId) => async dispatch =>{
    const res = await fetch(`/api/images/game/${gameId}`, {
        method: "POST",
        body: image,
    })

    if(res.ok){
        const image = await res.json();
        dispatch(add_game_image(image, gameId))
    } else {
        return "ERROR AT ADD_NEW_IMAGE"
    }
}

export const delete_specific_image = (gameId, photoId) => async dispatch =>{
    const res = await fetch(`/api/images/game/${gameId}/images/${photoId}`,{
        method:"DELETE",
    });

    if (res.ok){
        dispatch(delete_image(gameId,photoId))
    } else {
        return "ERROR AT DELTE IMAGE THUNK"
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
        case ADD_NEW_GAME_IMAGE:
            // console.log([action.image])
            newState = {...state};
            newState[action.image.id] = action.image
            return newState;
        case DELETE_GAME_IMAGE:
            newState = {...state}
            delete newState[action.image_id]
            return newState
        default:
            return state;
    }
}

export default gameImage_reducer;
