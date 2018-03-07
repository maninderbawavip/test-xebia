import { combineReducers } from "redux";
import auth from './Auth';
import search from './Search';

const reducer = combineReducers({
    auth,
    search
});

export default reducer;