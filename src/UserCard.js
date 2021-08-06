import React, { Component } from 'react'

export default class UserCard extends Component {
    render(props) {
        return (
            <div>
                 <h2>{this.props.userS.name}</h2>
            <p>Age: {this.props.userS.age}</p> <p>Height: {this.props.userS.height}</p>
            </div>
        )
    }
}
