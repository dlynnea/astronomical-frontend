import React from 'react'
import Card from './Card'

export default function Container(props) {
    console.log("props", props)

    const allConstellations = props.constellations.map(constellation => {
        return (
            <span className='const-all'>
                <span>
                <Card 
                id={constellation.id}
                name={constellation.name}
                photo={constellation.photo}
                location={constellation.location}
                fun_fact={constellation.fun_fact}
                mythology={constellation.mythology}
                main_stars={constellation.main_stars}
                />
                </span>
            </span>
        )
    })
    return(
        <span className="const-container">
            <span>{allConstellations}</span>
        </span>
    )
}
