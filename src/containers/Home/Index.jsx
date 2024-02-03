import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Modal from "../../components/modal";

export default function Home() {
  const [ShowModal, setShowModal] = useState(false);
  const [Movie, SetMovie] = useState();
  const [TopMovies, SetTopMovies] = useState();
  const [TopSeries, SetTopSeries] = useState();
  const [PopularSeries, SetPopularSeries] = useState();
  const [PesonPopular, SetPesonPopular] = useState();
  const Navigate = useNavigate();

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

    async function getPopularSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");
      console.log(results);
      SetPopularSeries(results);
    }

    async function getPesonPopular() {
      const {
        data: { results },
      } = await api.get("/person/popular");
      console.log(results);
      SetPesonPopular(results);
    }

    getTopMovies();
    getMovies();
    getTopSeries();
    getPopularSeries();
    getPesonPopular();
  }, []);

  return (
    <>
      {Movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`}
        >
          {ShowModal && (
            <Modal movieId={Movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Infor>
              <h1>{Movie.title}</h1>
              <p>{Movie.overview}</p>
              <ContainerButtons>
                <Button red={true} onClick={()=> Navigate(`/Detail/${Movie.id}`)} >Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
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
      {TopMovies && <Slider info={TopMovies} title={"Top Filmes"} />}
      {TopSeries && <Slider info={TopSeries} title={"Top Series"} />}
      {PopularSeries && (
        <Slider info={PopularSeries} title={"séries populares"} />
      )}
      {PesonPopular && <Slider info={PesonPopular} title={"pessoas popular"} />}
    </>
  );
}
