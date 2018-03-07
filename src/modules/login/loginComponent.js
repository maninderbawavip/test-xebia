import React from 'react'
import { Container, Divider, Grid, Header, Image, Button, Checkbox, Form, Input, Radio, Select, TextArea, Segment, Dropdown } from 'semantic-ui-react'

export class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    componentWillMount() {
        this.setState({ username: '', password: '' })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        console.log(username, "==========", password)
        if (username !== "" && password !== "") {
            this.props.loginDetails(username, password)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn === 'Logged In') {
            this.props.history.push('/search')
        }
    }
    renderButton() {
        const { loading } = this.props;
        if (loading) {
            return (<p>logging you in</p>);
        } else {
            return (<Form.Field control={Button}>Submit</Form.Field>);
        }
    }

    render() {
        const { error } = this.props
        const { username, password } = this.state
        return (
            <div className="bg height100">
                <Container className="height100">
                    <Grid verticalAlign='middle' className="height100">
                        <Grid.Column textAlign="left" computer={6} mobile={16} tablet={8} >
                            <Segment>
                                <Form onSubmit={(e) => this.onSubmit(e)}>
                                    <Form.Field control={Input} type="text" label='Username' placeholder='Username' value={username} name="username" onChange={this.handleChange} required />
                                    <Form.Field control={Input} type="password" label='Password' placeholder='Password' value={password} name="password" onChange={this.handleChange} required />
                                    {error && <span>{error}</span>}
                                    {this.renderButton()}

                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}