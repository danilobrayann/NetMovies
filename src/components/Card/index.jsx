import { getImages } from '../../utils/getImages'
import { Container } from './styles'
export default function Card({item }) {

    return (
        <Container>
            <img src={getImages(item.poster_path)} alt="" />
            <h3>{item.original_title}</h3>

        </Container>
    )

}