import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>Hello {props.title}</h1>
}

const Text = () => {
    return (
        <React.Fragment>
            <p>lorem lkdmvionen nervnen nevrunv</p>
            <p>lorem lkdmvionen nervnen nevrunv</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header title="React" />
            <Header title="App.js" />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
