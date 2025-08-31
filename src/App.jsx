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
  const [articles, setArticles] = useState(initialArticles);
  const [newTitle, setNewTitle] = useState("");
  const [nextId, setNextId] = useState(initialArticles.length + 1);
 //funzione per aggiunta della card
  const handleSubmit = (event) =>{
    event.preventDefault();
   return newTitle.trim()
   ? (setArticles([...articles, { id: nextId, title: newTitle }]),
        setNextId(nextId + 1),
        setNewTitle("")
      )
      : null
  };    

  //funzione per cancellare la card
   const handleDelete = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };
  
 return(
  <div className='container'>
    <h1 className='text-center mb-5'>One Piece Card</h1>
    <div className='row mb-4'>
      <div className='col-md-6 offset-md-3'>
        <form onSubmit={handleSubmit} className="d-flex">

          <input 
           type="text" 
           name="title"
           className="form-control me-2"
           placeholder="Aggiungi nuova carta"
          />
        
         <button type="submit" className="btn btn-primary">
          Aggiungi
          </button>  
        </form>
       
        

      </div>
    </div>
  </div>

 )


}

export default App
