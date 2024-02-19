import { getMovieById, getMovieCredits, getMovieVideos, getMovieimilar } from "../../services/getDATA";
import {Container,  } from "./styles";
import React,{useEffect, useState} from 'react';
import  { useParams } from "react-router-dom";

export default function Detail() {
const {id} = useParams()
    const [movie, setmovie] = useState()
    const [videos, setvideos] = useState()
    const [credts, setcredts] = useState()
    const [similar, setsimilar] = useState()

    useEffect(() => {

      
         //performatico
      
      Promise.all([
        getMovieById(id),
        getMovieCredits(id),
        getMovieVideos(id),
        getMovieimilar(id),
       
      ])
      .then((movie, videos, credts, similar) =>{
        setmovie(movie);
        setvideos(videos);
        setcredts(credts);
        setsimilar(similar);
        
      })
      .catch((err)=>console.log(err))
      
      
        }, []);




    return (
       <Container>



        
       </Container>
    )

}