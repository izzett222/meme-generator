import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "work into mordor",
    url: "http://i.imgflip.com/1bij.jpg",
  });


  return (
    <div className="max-w-[550px] mx-auto pb-5">
      <Header />
      <Form setMeme={setMeme} meme={meme} />
      <Meme meme={meme} />
    </div>
  );
}

export default App;
