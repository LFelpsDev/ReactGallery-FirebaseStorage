import {
  Container,
  SubContainer,
  Title,
  ScreenWarning,
  PhotoList,
  FormUpload
} from "./Home.styles";

import { useState, useEffect, FormEvent } from "react";
import * as Photos from "./services/photos";
import { IPhoto } from "./types/IPhotos";

import { PhotoItem } from "./components/PhotoItem";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAllPhotos());
      setLoading(false);
    };
    getPhotos();
  }, []);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true)
      const result = await Photos.Insert(file)
      setUploading(false)

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        const newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }
  

  return (
    <Container>
      <SubContainer>
        <Title>Galeria de Fotos</Title>

        <FormUpload method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <button type="submit">Enviar</button>
          {uploading && "Enviando...." }
        </FormUpload>


        {loading && (
          <ScreenWarning>
            <div className="emoji">🤪</div>
            <div>Carregando...</div>
          </ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <PhotoList>
            {photos.map((photo) => (
              <PhotoItem key={photo.url} url={photo.url} title={photo.title} />
            ))}
          </PhotoList>
        )}
        {!loading && photos.length === 0 && (
          <ScreenWarning>
            <div className="emoji">⚠️</div>
            <div className="message">Nenhuma Foto Disponível, No Momento !</div>
          </ScreenWarning>
        )}
      </SubContainer>
    </Container>
  );
}

export default App;
