import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
//array iniziale 
 const initialArticles = [ 
  {
  id:1,
  title:  "Monkey D. Luffy"
  },
  {
  id:2,
  title: "Roronoa Zoro"
  },
  {
  id:3,
  title: "Tony Tony Chopper"
  },
  {
  id:4,
  title: "Franky"
  },
  {
  id:5,
  title: "Nico Robin"
  },
];

function App() {
  //stati
  const [articls, setArticles] = useState
  const [newTitle, setNewTitle] = useState("");
 //aggiunta card
  const handleSubmint = (event) =>{
    event.preventDefault();
   return newTitle.trim()
   ? (setArticles([...articles, { id: nextId, title: newTitle }]),
        setNextId(nextId + 1),
        setNewTitle(""))
      : null;
   
     

  }

  
  

}

export default App
