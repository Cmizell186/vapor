const LOAD_IMAGE = 'images/GET';
const LOAD_ONE_IMAGE = 'images/GET_ONE';
const ADD_USER_IMAGE = 'images/POST';

const all_images = (images) =>({
    type: LOAD_IMAGE,
    images
})

const single_image = (image) =>({
    type: LOAD_ONE_IMAGE,
    image
})

const add_image = (image, id) => ({
    type: ADD_USER_IMAGE,
    image,
    id
})

export const get_all_images = () => async dispatch =>{
    const res = await fetch('/api/images')
    if(res.ok){
        const images = await res.json();
        dispatch(all_images(images.all_images))
    }
}

export const get_one_image = (id) => async dispatch =>{
    const res = await fetch(`/api/images/${id}`)
    if(res.ok){
        const {image} = await res.json()

        dispatch(single_image(image))
    } else {
        return "ERROR AT GET_ONE_IMAGE THUNK!"
    }
}

export const post_image = (image, id) => async dispatch =>{
    const res = await fetch(`/api/images/${id}`,{
        method: "PUT",
        body: image,
    });

    if (res.ok){
        const image = await res.json();
        dispatch(add_image(image, id))
    } else {
        return "ERROR AT POST_IMAGE THUNK"
    }
}

const inititalState = {}
const image_reducer = (state = inititalState, action) => {
    let newState;

    switch(action.type){
        case LOAD_IMAGE:
            newState = {}
            action.images.forEach((img) => (newState[img.id] = img))
            return newState
        case LOAD_ONE_IMAGE:
            return {
                ...state,
                [action.image.id]: {
                    ...state[action.image.id],
                    ...action.image
                }
            }
        case ADD_USER_IMAGE:
            newState = {...state};
            newState[action.image.user_id] = action.image
            return newState;
        default:
            return state
    }
}
export default image_reducer;
