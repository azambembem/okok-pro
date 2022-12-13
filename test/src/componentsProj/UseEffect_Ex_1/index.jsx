import { useEffect, useState } from "react";

const App = () => {
  const [postId, setPostId] = useState(1);
  const [response, setResponse] = useState({});
  //useEffect(function, depend)
  //   useEffect(() => {
  //     console.log("Count decrease worked");
  //   }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) // yani fetch ga oxwagan narsalarni ochiq soysak toxtamasdan ishlaydi.
      .then((response) => {
        // yani shularni oldini olish uchun useEffect chiqqan.
        return response.json();
      })
      .then((json) => setResponse(json));
  }, [postId]); // yani bu render [] aynan shu orqali bajaradi.

  //
  return (
    <div>
      <button onClick={() => setPostId(1)}>1</button>
      <button onClick={() => setPostId(2)}>2</button>
      <button onClick={() => setPostId(3)}>3</button>
      <button onClick={() => setPostId(4)}>4</button>
      <button onClick={() => setPostId(5)}>5</button>
      <button onClick={() => setPostId(6)}>6</button>
      <button onClick={() => setPostId(7)}>7</button>
      {response.body} id:
      {response.id}
    </div>
  );
};

export default App;
