import { combineReducers } from 'redux';
import playlist from "./playlistReducer";

const reducers = combineReducers({
	playlist
});

export default reducers;