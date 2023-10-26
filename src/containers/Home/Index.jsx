
import api from '../../services/api'
import { Background } from './styles'

export default function Home () {
    
 async function getMovies() {
    
    const data = await api.get('/movie/popular')
}

    return(
        <>
        <Background  img="https://image.tmdb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg">
            <h1>Home</h1>
            <p>Essa é minha Home</p>
        </Background >
        </>
    )
}