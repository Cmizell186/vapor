
const LOAD_ALL_GAMES = 'games/GET'
const LOAD_ONE_GAME = 'games/GET_ONE'
const CREATE_GAME = 'games/CREATE'
const UPDATE_GAME = 'games/UPDATE'
const DELETE_GAME = 'games/DELETE'

const all_games = (games) => ({
    type: LOAD_ALL_GAMES,
    games
})

const get_one = (game) => ({
    type: LOAD_ONE_GAME,
    game
})

const create = (game) => ({
    type: CREATE_GAME,
    game
})

const update = (game) => ({
    type: UPDATE_GAME,
    game
})

const remove = (id) => ({
    type: DELETE_GAME,
    game_id: id
})

export const get_all_games = () => async(dispatch) => {
    const response = await fetch("/api/games/")
    if (response.ok) {
        const games = await response.json()
        // console.log(games.games_list, "<>>>>>>>>>>>>")
        dispatch(all_games(games.games_list))
    } else {
        return "ERROR AT GET_ALL_GAMES THUNK"
    }
}

export const get_one_game = (id) => async(dispatch) => {
    const response = await fetch(`/api/games/${id}`)
    if (response.ok) {
        const { game } = await response.json()
        dispatch(get_one(game))
    } else {
        return "ERROR AT GET_ONE_GAME THUNK"
    }
}

export const create_game = (game) => async(dispatch) => {
    const response = await fetch("/api/games/", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
          },
          body: JSON.stringify(game)
    })
    if (response.ok) {
        const game = await response.json()
        dispatch(create(game))
    } else {
        return "ERROR AT CREATE_GAME THUNK"
    }
}

export const update_game = (game) => async(dispatch) => {
    const response = await fetch(`/api/games/${game.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(game)
    })
    if (response.ok) {
        const data = await response.json()
        const updated_game = data.game
        dispatch(update(updated_game))
    } else {
        return "ERROR AT UPDATE_GAME THUNK"
    }
}

export const delete_game = (id) => async(dispatch) => {
    const current_game = await fetch(`/api/games/${id}`, {
        method: "DELETE",
    })
    if (current_game.ok) {
        dispatch(remove(id))
    } else {
        return "ERROR AT DELETE_GAME THUNK"
    }
}


const inititalState = {}

const game_reducer = (state = inititalState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_GAMES:
            newState = {}
            action.games.forEach((game) => (newState[game.id] = game))
            return newState
        case LOAD_ONE_GAME:
            return {
                ...state,
                [action.game.id]: {
                    ...state[action.game.id],
                    ...action.game
                }
            }
        case CREATE_GAME:
            newState = { ...state, [action.game.id]: action.game }
            return newState;
        case UPDATE_GAME:
            return {
                ...state,
                [action.game.id]: action.game
            }
        case DELETE_GAME:
            newState = {...state}
            delete newState[action.game_id]
            return newState
        default:
            return state;
    }
}

export default game_reducer;
