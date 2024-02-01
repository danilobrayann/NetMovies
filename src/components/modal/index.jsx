import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import api from "../../services/api";

export default function modal({ movieId, setShowModal }) {
  const [Movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get(`/movie/${movieId}/videos`);

      setMovie(results[0]);
    }

    console.log(setMovie[0]);
   

    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
        {Movie &&(
      <Container>
        <iframe 
        src={`https://www.youtube.com/embed/${Movie.key}`}
        title="video do youtube"
        height='500px'
        width='100%'
        >

        </iframe>
      </Container>
      )}
    </Background>
    
  );
}
