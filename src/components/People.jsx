import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function People() {
  const[people,setPeople]=useState("")
  const {id} = useParams()
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
        //  .then( response => console.log(response.data))
         .then( response => setPeople(response.data) )
         .catch(err=>{console.log(err); setResponseData("error")});   
}, [id]);


  return (
    <div>
      <h1>{people.name}</h1>
      <p>Height: {people.height}</p>
      <p> Hair Color:{people.hair_color}</p>
      <p>Eye Color: {people.eye_color}</p>
      <p> Skin Color:{people.skin_color}</p>
      </div>
     
  );
}

export default People;
