
export default function Meme({meme}) {
    return !!meme.url &&(
        <div className="px-9 mt-9 w-full h-[300px] relative text-3xl font-bold -tracking-wider  text-white meme">
            <p className="absolute left-1/2 transform top-4 -translate-x-1/2 w-max meme">{meme.topText}</p>
            <img src={meme.url} alt="" className="object-cover h-full w-full" />
            <p className="absolute left-1/2 transform bottom-4 -translate-x-1/2 w-max">{meme.bottomText}</p>
        </div>
    )
}