import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Background, Infor, Poster, Container } from './styles'
import Button from '../../components/Button'

export default function Home() {

    const [Movie, SetMovie] = useState()

    useEffect(() => {

        async function getMovies() {

            const { data: { results } } = await api.get('/movie/popular')

            SetMovie(results[1])
        }

        getMovies()

    }, [])





    return (
        <>
            {Movie && (
                <Background img={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}>
                    <Container>
                        <Infor>
                            <h1>{Movie.title}</h1>
                            <p>{Movie.overview}</p>
                            <div>
                                <Button>Assista Agora</Button>
                                <Button>Assista o Trailer</Button>
                            </div>
                        </Infor>
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`} alt="Capa-do-FilmeS" />
                        </Poster>
                    </Container>
                </Background >
            )}
        </>
    )
}