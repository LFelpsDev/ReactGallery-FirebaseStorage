import { IPhoto } from "../types/IPhotos";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAllPhotos = async () => {
  const list: IPhoto[] = [];

  const folderImage = ref(storage, "images");
  const listPhoto = await listAll(folderImage);

  for (let i in listPhoto.items) {
    const photoUrl = await getDownloadURL(listPhoto.items[i]);

    list.push({
      title: listPhoto.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export async function Insert(file: File) {
  if (["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
    const randomName = createId();
    const newFile = ref(storage, `images/${randomName}`);

    const upload = await uploadBytes(newFile, file);
    const photoUrl = await getDownloadURL(upload.ref);

    return {
      title: upload.ref.name,
      url: photoUrl,
    } as IPhoto;
  } else {
    return new Error("Tipo do Arquivo Invalido");
  }
}
