import React from 'react'

const Header = (props) => {
    return (
        <h1>
            {props.id}. Hello {props.title}
        </h1>
    )
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
            <Header title="React" id={1} />
            <Header title="App.js" id={2} />
            <Text />
        </>
    )
}

export default App
