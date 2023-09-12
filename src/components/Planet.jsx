import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
function Planet() {
    const {id} = useParams()
    const [planet, setPlanet] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            //  .then(response=> console.log(response.data) )
             .then(response=> setPlanet(response.data) )
             .catch(err => console.log(err) )
    }, [id])

    return (
        <div>
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrian: {planet.terrian}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Resident: {planet.residents}</p>
        </div>
    )
}

export default Planet;