const LOAD_IMAGE = 'images/GET'

const all_images = (images) =>({
    type: LOAD_IMAGE,
    images
})

export const get_all_images = () => async dispatch =>{
    const res = await fetch('/api/images')
    if(res.ok){
        const images = await res.json();
        dispatch(all_images(images.all_images))
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
        default:
            return state
    }
}
export default image_reducer;
