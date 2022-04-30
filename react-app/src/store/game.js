
const LOAD_GAMES = 'games/GET'
const LOAD_ONE_GAME = 'games/GET_ONE'
const CREATE_GAME = 'games/CREATE'
const UPDATE_GAME = 'games/UPDATE'
const REMOVE_ONE_GAME = 'games/DELETE'

const all_games = (games) => ({
    type: LOAD_GAMES,
    games
})

const get_one_game = (game_id) => ({
    type: LOAD_ONE_GAME,
    game_id
})

const add_game = (game) => ({
    type: CREATE_GAME,
    game
})

const update_game = (game_id) => ({
    type: UPDATE_GAME,
    game_id
})

const remove_game = (game_id) => ({
    type: REMOVE_ONE_GAME,
    game_id
})
