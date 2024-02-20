import { getMovieById, getMovieCredits, getMovieVideos, getMovieimilar } from "../../services/getDATA";
import {Container,Background,Cover  } from "./styles";
import React,{useEffect, useState} from 'react';
import  { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
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
      <>
      { movie && (
      <>
      <Background image={ getImages(movie.backdrop_path)  }/>
       <Container>
        <Cover>
          <img src={getImages(movie.poster_path)}/>
        </Cover>
       </Container>
       </>
          )}
       </>
      
    )

}