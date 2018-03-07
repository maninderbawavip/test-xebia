import React from 'react'
import { Container, Divider, Grid, Header, Image, Button, Checkbox, Form, Input, Radio, Select, TextArea, Segment, Dropdown } from 'semantic-ui-react'

const Planet = props => (
    <li className="results__item">
        <h3 className="results__title">
            {props.item.name}
        </h3>
        <ul className="results__info">
            <li>Terrain :  <span>{props.item.terrain}</span> </li>
            <li>Gravity :  <span>{props.item.gravity}</span> </li>
            <li>Rotation Period :  <span>{props.item.rotation_period}</span> </li>
            <li>Surface Water :  <span>{props.item.surface_water}</span> </li>
            <li>Orbital Period :  <span>{props.item.orbital_period}</span> </li>
            <li>Population :  <span>{props.item.population}</span> </li>
        </ul>
    </li>
);

export class Search extends React.Component {

    state = {
        searchValue: '',
        itemDetails: null,
        searchAttempts: 0,
        error: '',
        username: localStorage.getItem('username') || ''
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ searchAttempts: 0 })
        }, 60 * 1000)
    }

    renderButton() {
        const { loading } = this.props;
        if (loading) {
            return (<p>logging you in</p>);
        } else {
            return (<Form.Field control={Button}>Submit</Form.Field>);
        }
    }

    logout() {
        localStorage.clear()
        this.props.history.push('/')
    }

    handleChange = (e, { value }) => {
        console.log('jhyhjg', e.target.value)
        this.setState({ searchValue: value })
        if (this.state.username !== 'Luke Skywalker') {
            if (this.state.searchAttempts < 15) {
                this.props.searchPlanets(e.target.value)
            } else {
                this.setState({ error: 'Maximum Search Attempts Reached. Try After 1 Minute' })
            }
        } else {
            this.props.searchPlanets(e.target.value)
        }


    }

    renderList() {
        return this.props.searchedRes.map((item, key) => {
            return (
                <li item={item} style={{ fontSize: 18 }} key={key} onClick={() => this.showDetails(item)} >{item.name}</li>)
        }
        )
    }

    showDetails(item) {

        this.setState({
            searchValue: "",
            itemDetails: item,
            searchAttempts: this.state.searchAttempts + 1
        })

        this.props.clearList()
    }


    render() {
        const { searchValue, itemDetails, error, username } = this.state
        return (
            <div className="bg height100">
                <div className="header">
                    <h3 style={{ float: 'left' }}>Logged In as : {username}</h3>
                    <Button primary onClick={() => this.logout()}>Logout</Button>
                </div>
                <Grid centered className="fullWidthBox">
                    <Grid.Column width={6} className="list">
                        <Form>
                            <Input focus fluid placeholder='Search...' onChange={this.handleChange} value={searchValue} />
                            <ul>
                                {/* {this.renderList()} */}
                                {this.renderList()}

                            </ul>
                            {error && <span style={{ color: 'white', textAlign: 'center' }}>{error}</span>}
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {itemDetails &&
                            <Planet item={itemDetails} />
                        }
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
