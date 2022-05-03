const LOAD_GAME_IMAGE = 'gameImages/GET'
const ADD_NEW_GAME_IMAGE = 'gameImages/POST'

const all_game_images = (images) =>({
    type: LOAD_GAME_IMAGE,
    images
})
const add_game_image = (image) =>({
    type: ADD_NEW_GAME_IMAGE,
    image
})


export const get_all_game_images = (id) => async dispatch =>{
    const res = await fetch(`/api/images/game/${id}`)

    if(res.ok){
        const imagesDict = await res.json()
        const images = imagesDict["game_images"]
        if(!images){
            return "Images is empty!"
        }
        console.log(imagesDict)
        dispatch(all_game_images(images))
    } else {
        return "ERROR AT GET_ALL_GAME_IMAGES THUNK!"
    }
}

export const add_new_image = (data, gameId) => async dispatch =>{
    const res = await fetch(`/api/images/game/${gameId}`, {
        method: "POST",
        body: data,
    })

    if(res.ok){
        const image = await res.json();
        dispatch(add_game_image(image))
    } else {
        return "ERROR AT ADD_NEW_IMAGE"
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
