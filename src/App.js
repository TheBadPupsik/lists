import logo from './logo.svg';
import './App.css';
import { GalleryShow } from './components/Gallery/Gallery';
import { UserRows } from './components/UserRows/UserRows';

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

function formatAge(age) {
  return age + "лет";
}

function App() {
  return (
    <div className="App">
      <GalleryShow></GalleryShow>
      <UserRows data = {data} formatAge = {formatAge}></UserRows>
    </div>
  );
}

export default App;
