'use client'

import CardsHeadPieces from '../components/cardsHeadPieces'
import CardsTop from '@/components/cardsTop'; 
import CardsBag from '@/components/cardsBag';
import CardsSaias from '@/components/cardsSaias';
import { useState } from 'react';
import {productsHeadPieces, productsTop, productsBag, productsSaias} from '../data/data'
import Details from "../components/details.jsx"
import Footer from '../components/Footer'

export default function Home() {

const [selectedIdProduct, setSelectedIdProduct] = useState(null);
const [showProduct, setShowProduct] = useState(false);
const [currentImage, setCurrentImage] = useState(0);
const [currentCategory, setCurrentCategory] = useState(0)

const allProducts = [
  ...productsHeadPieces,
  ...productsTop,
  ...productsBag,
  ...productsSaias
]

const selectedProduct = allProducts.find(
  (product) => product.id === selectedIdProduct
);

  return (
    <>
<div className="mt-20">
  <div className="
    flex 
    gap-6 
    overflow-x-auto 
    px-4
    scrollbar-hide
    md:justify-center
    pb-5
  ">
    
    <button onClick={() => {
      setCurrentCategory(1)
    }} className=" hover:text-pink-950 hover:border-pink-950 cursor-pointer shrink-0 flex flex-col items-center gap-2">
      <img className="w-24 h-24 rounded-full border object-cover" src="/categories/head.png" />
      <h1>Head Pieces</h1>
    </button>
    
    <button onClick={() => {
      setCurrentCategory(2)
    }} className="hover:text-pink-950 hover:border-pink-950 cursor-pointer shrink-0 flex flex-col items-center gap-2">
      <img className="w-24 h-24 rounded-full border object-cover" src="/categories/top.png" />
      <h1>Tops</h1>
    </button>
    <button onClick={() => {
      setCurrentCategory(3)
    }} className="hover:text-pink-950 hover:border-pink-950 cursor-pointer shrink-0 flex flex-col items-center gap-2">
      <img className="w-24 h-24 rounded-full border object-cover" src="/categories/bags.png" />
      <h1>Bags</h1>
    </button>



    <button onClick={() => {
      setCurrentCategory(4)
    }} className="hover:text-pink-950 hover:border-pink-950 cursor-pointer shrink-0 flex flex-col items-center gap-2">
      <img className="w-24 h-24 rounded-full border object-cover" src="/categories/saia.png" />
      <h1>Saias & Shorts</h1>
    </button>
    <button onClick={() => {
      setCurrentCategory(0)
    }} className="hover:text-pink-950 hover:border-pink-950 cursor-pointer shrink-0 flex flex-col items-center gap-2">
      <img className="w-24 h-24 rounded-full border object-cover" src="/categories/todos.png" />
      <h1>Todas</h1>
    </button>

  </div>
</div>
<div className="flex justify-center mt-20">
 <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-2
  xl:grid-cols-4
  gap-8
  justify-items-center
">

  {(currentCategory === 0 || currentCategory === 1) &&
  productsHeadPieces.map((product) => (
    <CardsHeadPieces
      key={product.id}
      id={product.id}
      src={product.src[0]}
      title={product.title}
      onView={() => {
        setSelectedIdProduct(product.id);
        setCurrentImage(0);
        setShowProduct(true);
      }}
    />
  ))}

{(currentCategory === 0 || currentCategory === 2) &&
  productsTop.map((product) => (
    <CardsTop
      key={product.id}
      id={product.id}
      src={product.src[0]}
      title={product.title}
      onView={() => {
        setSelectedIdProduct(product.id);
        setCurrentImage(0);
        setShowProduct(true);
      }}
    />
  ))}

{(currentCategory === 0 || currentCategory === 3) &&
  productsBag.map((product) => (
    <CardsBag
      key={product.id}
      id={product.id}
      src={product.src[0]}
      title={product.title}
      onView={() => {
        setSelectedIdProduct(product.id);
        setCurrentImage(0);
        setShowProduct(true);
      }}
    />
  ))}

{(currentCategory === 0 || currentCategory === 4) &&
  productsSaias.map((product) => (
    <CardsSaias
      key={product.id}
      id={product.id}
      src={product.src[0]}
      title={product.title}
      onView={() => {
        setSelectedIdProduct(product.id);
        setCurrentImage(0);
        setShowProduct(true);
      }}
    />
  ))}
        </div>
      </div>
      {showProduct ? 
      <Details
      src={selectedProduct.src[currentImage]}
      title={selectedProduct.title}
      onPrevious={() => {
      setCurrentImage((prev) =>
        prev === 0
        ? selectedProduct.src.length - 1
        : prev - 1);
        }}
      onNext={() => {
      setCurrentImage((prev) =>
      prev === selectedProduct.src.length - 1
        ? 0
        : prev + 1);
      }}
      onView={() => {
      setShowProduct(false);
      }}
      />
      :
      ""
    } 
    
    </>
  );
}
