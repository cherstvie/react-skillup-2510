import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
    return <h1>Hello World</h1>
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
            <Header />
            <Text />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
