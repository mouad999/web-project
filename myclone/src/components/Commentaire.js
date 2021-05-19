import React, { Component } from 'react'
import { Avatar } from '@material-ui/core'
import './Commentaire.css'



export default class Commentaire extends Component {
    render() {
        return (
            <div className="commentaire">
                <div className="comtop">
                <Avatar/>
                <p>{this.props.user}</p>
                </div>
                <p>{this.props.com}</p>
                </div>
        )
    }
}
