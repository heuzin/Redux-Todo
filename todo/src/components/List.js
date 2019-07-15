import React from 'react'
import { connect } from 'react-redux'

function List(props) {
    const {value, todos} = props

    return (
        <section>
            <h1> List: {value}</h1>

            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(List)