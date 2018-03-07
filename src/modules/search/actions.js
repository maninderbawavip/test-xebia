import Axios from "axios";
import history from '../../history';

let actions = {
    searchPlanets(value) {
        return (dispatch) => {
            dispatch({ type: 'SEARCH_REQUEST' });
            Axios.get(`https://swapi.co/api/planets/?format=json&search=${value}`)
                .then(({ data }) => {
                    console.log(data)
                    if (data.count > 0) {
                        dispatch({ type: 'SEARCH_SUCCESS', data })
                    } else {
                        dispatch({ type: 'SEARCH_FAILED' })
                    }
                })
        }
    },
    clearList() {
        return (dispatch) => {
            dispatch({ type: 'SEARCH_SUCCESS', data: { results: [] } });
        }
    }
};

export default actions;
