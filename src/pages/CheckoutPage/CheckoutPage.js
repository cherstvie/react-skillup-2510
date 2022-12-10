import React, { Component } from 'react'

class CheckoutPage extends Component {
    state = {
        name: '',
        address: '',
        isOrderSend: false,
    }

    renderForm = () => {
        return (
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={this.state.name}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={this.state.address}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    renderMessage = () => {
        return <div>Dear, {this.state.name}, thanks for your order</div>
    }

    render() {
        return (
            <>
                <h1>Checkout</h1>
                {this.state.isOrderSend !== true
                    ? this.renderForm()
                    : this.renderMessage()}
            </>
        )
    }
}

export default CheckoutPage
