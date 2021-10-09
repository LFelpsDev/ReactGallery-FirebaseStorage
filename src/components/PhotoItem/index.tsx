import { IPhoto } from "../../types/IPhotos";
import { Container } from "./styles";


export function PhotoItem({url, title}: IPhoto){
  return (
    <Container>
      <img src={url} alt={title} />
      <p>{title}</p>
    </Container>
  )
}