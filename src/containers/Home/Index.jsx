
import api from '../../services/api'

export default function Home () {
    
 async function getMovies() {
    
    const data = await api.get('/movie/popular')
}

    return(
        <>
      
        <div>
            <h1>Home</h1>
            <p>Essa é minha Home</p>
        </div>
        </>
    )
}