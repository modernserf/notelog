import { combineReducers } from "redux"
import { index } from "./team-api"
import { call, put } from "redux-saga"
import { routeReducer } from "react-router-redux"

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
}
function teamReducer (state = initTeamState, {type, payload}) {
    switch (type) {
    case LOAD_TEAM_INDEX:
        return {
            ...state,
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
