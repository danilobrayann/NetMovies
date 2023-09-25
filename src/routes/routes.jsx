import { Route, Routes } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/movies'
import Series from '../containers/series'

export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filmes' element={<Movies />} />
            <Route path='/series' element={<Series />} />


        </Routes>
    )

}