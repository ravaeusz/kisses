
"use client"
import { useCart } from "../app/context/CartContext"

export default function CardsSaias(props,id){

const { addToCart } = useCart()

    return (
    <article className="w-80 bg-white rounded-xl p
        shadow-sm overflow-hidden transition-transform duration-200 
        hover:shadow-md hover:-translate-y-1">

      <div className="h-108 w-full overflow-hidden bg-gray-100">
        <img
          src={props.src}
          alt={props.title || 'card image'}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 text-center flex flex-col items-center gap-3">
        
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {props.title}
        </h3>

          <p className="text-pink-950 font-bold">
            Consulte valores
          </p>



        <div className="flex gap-3">

         
          <button 
            onClick={props.onView}
            className="cursor-pointer px-6 bg-pink-950 rounded-2xl hover:bg-pink-900 active:bg-pink-800">
              <img className="w-6" src="/components/olho.png" />
          </button>

          
          <button
            onClick={() =>
              addToCart({
                id: props.id,
                title: props.title,
                price: props.priceLabel,
                image: Array.isArray(props.src) ? props.src[0] : props.src
              })
            }
            className="cursor-pointer px-6 py-2 bg-black text-white rounded-2xl hover:bg-gray-800 active:bg-gray-700 text-sm font-medium"
          >
            + Carrinho
          </button>

        </div>
      </div>
    </article>
  )
}