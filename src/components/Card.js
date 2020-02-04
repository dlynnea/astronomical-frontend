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
            <section className="card">
            {/* <div className="front"> */}
                <h2>{props.name}</h2>
                <img src={props.photo} />
                <p><i class="fa fa-location-arrow"></i> {props.location}</p>
                <h3>{props.fun_fact}</h3>
            {/* </div>
            <div className="back"> */}
                <h4>Mythology: {props.mythology}</h4>
                <h2>Main Stars: {props.main_stars}</h2>
            {/* </div> */}
            </section>
        )
    }
// }

export default Card;