import axios from "axios";

  const api = axios.create({

    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:'23cbcc883bcefc7e17609cb70ca5826f',
        language: 'pt-BR',
        page: 1
    }
})

export default api