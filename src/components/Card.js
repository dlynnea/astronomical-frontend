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
                <h4>{props.fun_fact}</h4>
            {/* </div>
            <div className="back"> */}
                <h4>{props.mythology}</h4>
                <h3>{props.main_stars}</h3>
            {/* </div> */}
            </section>
        )
    }
// }

export default Card;