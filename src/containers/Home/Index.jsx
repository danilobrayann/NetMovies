import { useState, useEffect } from "react";
import api from "../../services/api";
import {
  Background,
  Infor,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

export default function Home() {
  const [Movie, SetMovie] = useState();
  const [TopMovies, SetTopMovies] = useState();
  const [TopSeries, SetTopSeries] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      SetMovie(results[0]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");
      console.log(results);
      SetTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");
      console.log(results);
      SetTopSeries(results);
    }
    getTopMovies();
    getMovies();
    getTopSeries();
  }, []);

  return (
    <>
      {Movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
        >
          <Container>
            <Infor>
              <h1>{Movie.title}</h1>
              <p>{Movie.overview}</p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista o Trailer</Button>
              </ContainerButtons>
            </Infor>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`}
                alt="Capa-do-FilmeS"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {TopMovies && <Slider info={TopMovies} title={'Top Filmes'}/>}
      {TopSeries && <Slider info={TopSeries} title={'Top Series'}/>}
    </>
  );
}
