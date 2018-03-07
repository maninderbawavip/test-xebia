import { Login } from './loginComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import actions from './actions';

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        loading: state.auth.loading,
        error: state.auth.error,
        loggedIn: state.auth.loggedIn
    })
};

const mapDispatchToProps = (dispatch) => (
    {
        loginDetails: (username, password) => dispatch(actions.loginDetails(username, password))
    }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));