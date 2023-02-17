import meme from "../assets/meme.svg"
export default function Header() {
    return <header className="bg-linear text-white p-5 flex justify-between items-center">
        <div className="flex gap-1.5 items-center"><img src={meme} alt="meme" /><span className="text-lg font-bold">Meme Generator</span></div>
        <p className="text-sm">React Course - Project 3</p>
    </header>
}