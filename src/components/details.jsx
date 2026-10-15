import Image from "next/image";
import { useState } from "react";

export default function Details(props){
    const [loadedSrc, setLoadedSrc] = useState(null);
    const isLoading = loadedSrc !== props.src;
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
                  <div className="relative w-full max-w-sm md:max-w-md aspect-square">
                    {isLoading && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl" />
                    )}
                    <Image
                      key={props.src}
                      src={props.src}
                      alt={props.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 448px"
                      quality={85}
                      onLoad={() => setLoadedSrc(props.src)}
                      className={`w-full object-contain rounded-xl transition-opacity duration-300 ${
                        isLoading ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    {props.imageCount > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={props.onPrevious}
                          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-pink-950/80 text-xl font-bold text-white transition hover:bg-pink-900 active:bg-pink-800 sm:h-12 sm:w-12 sm:text-2xl"
                          aria-label="Imagem anterior"
                        >
                          ❮
                        </button>

                        <button
                          type="button"
                          onClick={props.onNext}
                          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-pink-950/80 text-xl font-bold text-white transition hover:bg-pink-900 active:bg-pink-800 sm:h-12 sm:w-12 sm:text-2xl"
                          aria-label="Próxima imagem"
                        >
                          ❯
                        </button>

                        <span
                          aria-live="polite"
                          className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/65 px-3 py-1 text-sm text-white"
                        >
                          {props.currentImage + 1} / {props.imageCount}
                        </span>
                      </>
                    )}
                  </div>
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