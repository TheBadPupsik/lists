import './Gallery.css';

const photos = [
  { id: 1, url: 'photo1.jpg', title: "Природа", author: "Паша" },
  { id: 2, url: 'photo2.jpg', title: "Мужик", author: "Ренат" },
  { id: 3, url: 'photo3.jpg', title: "Горы", author: "Глеб" },
]

function Galleryitem(props) {
  const style = { width: "300px" }
  return <li>
    <img src={props.item.url} style={style}></img>
    <h3>{props.item.title}</h3>
    <h4>{props.item.author}</h4>
  </li>
}

export function GalleryShow(props) {
  if (photos.length === 0) {
    return <h4>Нету изобрежения для отоборжения</h4>
  }

  return <ul>
    {photos.map(photo => <Galleryitem item={photo}></Galleryitem>)}
  </ul>
}
