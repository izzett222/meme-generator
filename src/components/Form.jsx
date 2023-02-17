import { useState } from "react";
import memes from "./data";
export default function Form({meme, setMeme}) {
  const [data, setData] = useState({ topText: meme.topText, bottomText: meme.bottomText })
  const { topText, bottomText} = data
  function handleChange(event) {
    const { name, value } = event.target;
    setData(state => ({...state, [name]: value}))
  }
  function handleSubmit(e) {
    e.preventDefault();
    const random = Math.floor(Math.random() * memes.data.memes.length)
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => setMeme({bottomText, topText, url: data.data.memes[random].url }))

  }  
  return (
    <form  onSubmit={handleSubmit} className="mt-9 px-9">
      <div className="flex gap-4">
        <input type="text" name="topText" placeholder="top text" value={topText} onChange={handleChange}  className="border-[#D5D4D8] indent-2 rounded-md block h-[35px] border flex-1" />
        <input type="text" name="bottomText" placeholder="bottom text" value={bottomText} onChange={handleChange}   className="border-[#D5D4D8] indent-2 rounded-md block h-[35px] border flex-1" />
      </div>
      <button className="bg-linear w-full pb-2.5 pt-[11px] text-white rounded-[5px] -tracking-[10%] text-base mt-4">Get a new meme image 🖼</button>
    </form>
  );
}
