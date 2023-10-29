import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Background } from './styles'

export default function Home () {

const [Movie, SetMovie] = useState()

useEffect(() => {
 
    async function getMovies() {
    
        const { data: {results} } = await api.get('/movie/popular')

        SetMovie(results[1])
    }
    
    getMovies()
 
}, [ ])


 


    return(
        <>
        {Movie && (
        <Background  img={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}>
            <h1>{Movie.title}</h1>
            <p>{Movie.overview}</p>
        </Background >
        )}
        </>
    )
}