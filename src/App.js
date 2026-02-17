import logo from './logo.svg';
import './App.css';
import { GalleryShow } from './components/Gallery/Gallery';

// const nav = [
//   { id: 1, label: "Главная" },
//   { id: 2, label: "Каталог"},
//   { id: 3, label: "Контакты" },
// ]

const data = [
  { id: 1, name: "Renat", age: 17, city: "Odessa" },
  { id: 2, name: "Pavel", age: 18, city: "Odessa" },
  { id: 3, name: "Artem", age: 17, city: "Odessa" },
  { id: 4, name: "Alexsander", age: 17, city: "Odessa" }
]

function App() {
  return (
    <div className="App">
      <GalleryShow></GalleryShow>
    </div>
  );
}

export default App;
