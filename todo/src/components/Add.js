import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action';

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }

    handleChange = (e) => {
        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addList = (e) => {
        e.preventDefault()

        const {value, completed} = this.state

        this.props.addTodo(value, completed)

        this.setState({
            value: '',
        })
    }

    render() {
        const {value, completed} = this.state

        return (
            <section>
                <h5>Add to list</h5>

                <form onSubmit={this.addList}>
                    <input type="text" name="value" placeholder="Value" value={value} completed={completed} onChange={this.handleChange} required />

                    <br />

                    <button type='submit'>Add</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		todo: state.todo
	}
}

const mapDispatchToProps = {
    addTodo: addTodo,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Add)