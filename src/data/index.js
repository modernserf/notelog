import { combineReducers } from "redux"
import { index } from "./team-api"
import { call, put } from "redux-saga"
import { routeReducer, UPDATE_LOCATION } from "react-router-redux"

export const teamSelector = "team/SELECTOR"
const LOAD_TEAM_INDEX = "team/LOAD_TEAM_INDEX"

// this runs immediately on startup
function * loadTeam () {
    const team = yield call(index)
    yield put({type: LOAD_TEAM_INDEX, payload: team})
}

const initTeamState = {
    loading: true,
    list: [],
    map: new Map(),
    lastId: "",
}
function teamReducer (state = initTeamState, {type, payload}) {
    switch (type) {
    case UPDATE_LOCATION: {
        // irritating that i have to re-parse the route here
        const m = payload.pathname.match(/\/people\/(\S+)/)
        if (m) {
            return { ...state, lastId: m[1] }
        }
        return state
    }
    case LOAD_TEAM_INDEX:
        return {
            ...state,
            loading: false,
            list: payload,
            map: payload.reduce((m, v) => m.set(v.id, v), new Map()),
        }
    }
    return state
}

export const reducer = combineReducers({
    routing: routeReducer,
    [teamSelector]: teamReducer,
})

export const sagas = [loadTeam]
