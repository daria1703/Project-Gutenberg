import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Book from './Book'

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() =>{
    fetchPopular()
  }, []);

  const fetchPopular = async () =>{
    const data = await fetch('https://gnikdroy.pythonanywhere.com/api/book/');
    const books = await data.json();
    console.log(books)
    setPopular(books.results);
  };
  return (
    <div className="App">
      <div class="popular-books">
        {popular.map(book =>{
          return <Book key={book.id} book={book}/>;
        })}
      </div>
    </div>
  );
}

export default App;
