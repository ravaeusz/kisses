export default function Details(props){
    return(
        <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
      onClick={props.onView} 
    >
      <div
        className="
          bg-white
          w-[95%]
          max-w-4xl
          rounded-3xl
          shadow-2xl
          p-6
          sm:p-8
          md:p-12
          lg:p-16
          max-h-[90vh]
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
            <div className="relative flex flex-col gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <img
                    src={props.src}
                    alt={props.title}
                    className="w-full max-w-sm md:max-w-md object-contain rounded-xl"
                  />
                  
                  <button
                    onClick={props.onPrevious}
                    className="
                      absolute
                      left-2
                      top-1/2
                      -translate-y-1/2
                      flex items-center justify-center
                      w-10 h-10
                      sm:w-12 sm:h-12
                      rounded-full
                      bg-transparent
                      hover:bg-white/10
                      active:bg-white/20
                      transition
                      duration-200
                      transform
                      hover:scale-110
                      text-white
                      text-xl
                      sm:text-2xl
                      font-bold
                    "
                    aria-label="Imagem anterior"
                  >
                    ❮
                  </button>
                  
                  <button
                    onClick={props.onNext}
                    className="
                      absolute
                      right-2
                      top-1/2
                      -translate-y-1/2
                      flex items-center justify-center
                      w-10 h-10
                      sm:w-12 sm:h-12
                      rounded-full
                      bg-transparent
                      hover:bg-white/10
                      active:bg-white/20
                      transition
                      duration-200
                      transform
                      hover:scale-110
                      text-white
                      text-xl
                      sm:text-2xl
                      font-bold
                    "
                    aria-label="Próxima imagem"
                  >
                    ❯
                  </button>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left mb-4">
                    {props.title}
                  </h2>
                  <p className="text-gray-600 hidden md:block">
                    Clique em fechar ou fora da tela para voltar
                  </p>
                </div>
              </div>

              <button 
                onClick={props.onView}
                className="
                  w-full
                  sm:w-auto
                  sm:mx-auto
                  md:ml-0
                  cursor-pointer
                  text-lg
                  sm:text-xl
                  font-semibold
                  bg-pink-950
                  hover:bg-pink-900
                  active:bg-pink-800
                  transition-colors
                  duration-200
                  px-8
                  sm:px-12
                  py-3
                  rounded-full
                  text-white
                  shadow-lg
                  mt-4
                "
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
    )
}