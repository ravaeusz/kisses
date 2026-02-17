
export default function cardsHeadPieces(props){

    

    return(
        <article className="w-80 bg-white rounded-xl p
        shadow-sm overflow-hidden transition-transform duration-200 
        hover:shadow-md hover:-translate-y-1">
            <div  className="h-108 w-full overflow-hidden bg-gray-100" id={props.id}> 
                <img
                    src={props.src}
                    alt={props.title || 'card image'}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 text-center justify-center flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{props.title}</h3> 
           <button
           onClick={props.onView}
           className="cursor-pointer">
            <div className="px-10 bg-pink-950 rounded-2xl  hover:bg-pink-900
                  active:bg-pink-800">
            <img className="w-6" src="/components/olho.png"></img>
            </div>
            </button>
            </div>
        </article>
    )
}