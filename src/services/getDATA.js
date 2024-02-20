import api from './api'

export async  function getMovies() {
    const {
        data: { results },
      } = await api.get("/movie/popular");

      return results[0]
}


export async  function getTopMovies() {
    const {
        data: { results },
      } = await api.get("/movie/top_rated");

      return results
}


export async  function getTopSeries() {
    const {
        data: { results },
      } = await api.get("/tv/top_rated");

      return results
}

export async  function getPopularSeries() {
    const {
        data: { results },
      } = await api.get("/tv/popular");

      return results
}

export async  function getPesonPopular() {
    const {
        data: { results },
      } = await api.get("/person/popular");

      return results
}
// busca um filme pelo ID //
export async function getMovieVideos(MovieId) {
    const {
        data: { results },
      } = await api.get(`/movie/${MovieId}/videos`);

      return results[0]

}

///
export async function getMovieCredits(MovieId) {
  const 
     {data}  = await api.get(`/movie/${MovieId}/credits`);
    

    return data;
}

export async function getMovieimilar(MovieId) {
  const {
      data: { results },
    } = await api.get(`/movie/${MovieId}/similar`);

    return results;

}

export async function getMovieById(MovieId) {
  const  {data}  = await api.get(`/movie/${MovieId}`);
     
  

    return data;

}


