import React, { Component } from 'react'
import './../styles/LikeButton.css';
export class LikeButton extends Component {

    state = {
        count: 0
    }

    randomColor = () => {
        const color = ['purple','blue','green','yellow','orange','red'];
        const index = Math.floor(Math.random() * color.length)
        return color[index]
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div className='container-button'>
                <button onClick={this.handleIncrement} style={{
                    backgroundColor: this.randomColor(),
                    // border: '2px solid ' + this.randomColor()
                }}>{this.state.count} {this.state.count < 2 ? 'Like' : 'Likes'}</button>
            </div>
        )
    }
}

export default LikeButton

