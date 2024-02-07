import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getMovie } from "../../services/getDATA";

export default function modal({ movieId, setShowModal }) {
  const [Movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovie(movieId))
    }

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
