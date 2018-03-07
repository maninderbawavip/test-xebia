import { Search } from './searchComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import actions from './actions';

const mapStateToProps = (state) => {
    return ({
        loading: state.auth.loading,
        error: state.auth.error,
        searchedRes: state.search.searchedRes
    })
};

const mapDispatchToProps = (dispatch) => (
    {
        searchPlanets: (value) => dispatch(actions.searchPlanets(value)),
        clearList: () => dispatch(actions.clearList())
    }
);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));