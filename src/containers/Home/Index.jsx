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
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getPesonPopular  } from "../../services/getDATA";

export default function Home() {
  const [ShowModal, setShowModal] = useState(false);
  const [Movie, SetMovie] = useState();
  const [TopMovies, SetTopMovies] = useState();
  const [TopSeries, SetTopSeries] = useState();
  const [PopularSeries, SetPopularSeries] = useState();
  const [PesonPopular, SetPesonPopular] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
 

      SetMovie(await getMovies());
      SetTopMovies(await getTopMovies());
      SetTopSeries( await getTopSeries());
      SetPopularSeries(await getPopularSeries());
      SetPesonPopular(await getPesonPopular() );
      
    }

    getAllData()
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
