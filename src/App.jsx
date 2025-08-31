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
  {
  id:6,
  title: "Nami"
  },
];

function App() {
  //stati
  const [articles, setArticles] = useState(initialArticles);
  const [nextId, setNextId] = useState(initialArticles.length + 1);
 //funzione per aggiunta della card
  const handleSubmit = (event) =>{
    event.preventDefault();
    const input = event.target.elements.title.value;

   return input.trim()
   ? (setArticles([...articles, {  id: nextId, title: input }]),
        setNextId(nextId + 1),
        event.target.reset()
      )
    : null
  };   

  //funzione per cancellare la card
   const handleDelete = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className='container'>
      <h1 className='text-center mb-5'>One Piece Card</h1>
      
     
      <form onSubmit={handleSubmit} className="d-flex mb-4">
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

   
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{article.title}</h5>
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => handleDelete(article.id)}
                >
                  Cancella
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}  

export default App
