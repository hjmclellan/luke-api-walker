import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jediMindTrick from '../assets/jediMindTrick.gif'

const Result = (props) => {
    const [data, setData] = useState({})
    const [dataError, setDataError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}/`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                setDataError(true);
                // error.target.value="";
                console.log(error);
            }
            )
    }, [props.category, props.id])

    return (
        <div>
            {
                props.category == "planets" ?
                    <div>
                        <h1>{data.name}</h1>
                        <h4>Day length: {data.rotation_period} hours</h4>
                        <h4>Year length: {data.orbital_period} days</h4>
                        <h4>Climate: {data.climate}</h4>
                        <h4>Terrain: {data.terrain}</h4>
                        <h4>Population: {data.population}</h4>
                    </div>:null
            }
            {
                props.category == "people" ?
                    <div>
                        <h1>{data.name}</h1>
                        <h4>Height: {data.height}cm</h4>
                        <h4>Mass: {data.mass}kg</h4>
                        <h4>Hair Color: {data.hair_color}</h4>
                        <h4>Birth Year: {data.birth_year}</h4>
                    </div>:null
            }
            {
                props.category == "films" ?
                    <div>
                        <h1>{data.title}</h1>
                        <h4>Episode {data.episode_id}</h4>
                        <h4>Director: {data.director}</h4>
                        <h4>Release Date: {data.release_date}</h4>
                    </div>:null
            }
            {
                props.category == "species" ?
                    <div>
                        <h1>{data.name}</h1>
                        <h4>Classification: {data.classification}</h4>
                        <h4>Language: {data.language}</h4>
                        <h4>Average Lifespan: {data.average_lifespan} years</h4>
                    </div>:null
            }
            {
                props.category == "starships" ?
                    <div>
                        <h1>{data.name}</h1>
                        <h4>Model: {data.model}</h4>
                        <h4>Manufacturer: {data.manufacturer}</h4>
                        <h4>Hyperdrive rating: {data.hyperdrive_rating}</h4>
                        <h4>Starship Class: {data.starship_class}</h4>
                    </div>:null
            }
            {
                dataError == true ?
                    <div>
                        <br></br>
                        <img src={jediMindTrick} alt="hmmm, picture a gif here ypu should"/>
                        <h6>The API returned an error.... Uhhh, I mean:</h6>
                    <h1>Works in mysterious ways the force does, for something different you must search hrrrm?</h1>
                    </div>:null
            }
        </div>
    );
}

export default Result;