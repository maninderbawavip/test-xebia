import Axios from "axios";
import history from '../../history';

let actions = {
    loginDetails(username, password) {
        return (dispatch) => {
            dispatch({ type: 'LOGIN_REQUEST' });
            Axios.get(`https://swapi.co/api/people/?format=json&search=${username}`)
                .then(({ data }) => {
                    console.log(data)
                    if ((data.count === 1) && (data.results[0].birth_year === password)) {
                        localStorage.setItem('username', data.results[0].name);
                        dispatch({ type: 'LOGIN_SUCCESS' })
                    } else {
                        dispatch({ type: 'LOGIN_FAILED' })
                    }
                })
        }
    }
};

export default actions;
