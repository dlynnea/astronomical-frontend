import React, {Component} from 'react'

function Card(props) {

    // state = {
    //     isClicked: false
    // }

    // clicked = () => {

    // }

    // render() {
        // const {isClicked} = this.state
        // const {name, photo, location, fun_fact, mythology, main_stars} = this.props.constellation
        return(
            <div className="card">
            <div className="front">
                <h3>{props.name}</h3>
                <img src={props.photo} />
                <p>{props.location}</p>
                <h4>{props.fun_fact}</h4>
            </div>
            <div className="back">
                <h4>{props.mythology}</h4>
                <h3>{props.main_stars}</h3>
            </div>
            </div>
        )
    }
// }

export default Card;