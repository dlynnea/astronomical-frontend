import React from 'react'
import Card from './Card'

export default function Container(props) {
    console.log("props", props)

    const allConstellations = props.constellations.map(constellation => {
        return (
            <div className='const-all'>
                <Card 
                id={constellation.id}
                name={constellation.name}
                photo={constellation.photo}
                location={constellation.location}
                fun_fact={constellation.fun_fact}
                mythology={constellation.mythology}
                main_stars={constellation.main_stars}
                />
            </div>
        )
    })
    return(
        <div className="const-container">
            {allConstellations}
        </div>
    )
}

// name={constellation.name}
// photo={constellation.photo}
// location={constellation.location}
// fun_fact={constellation.fun_fact}
// mythology={constellation.mythology}
// main_stars={constellation.main_stars}

// constellation={constellation}