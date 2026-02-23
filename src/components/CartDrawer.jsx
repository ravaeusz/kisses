"use client"
import { useCart } from "../app/context/CartContext"
import { useState } from "react"

export default function CartDrawer() {
  const { cartItems, removeFromCart, clearCart, getTotal } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  function sendToWhatsApp() {
    if (cartItems.length === 0) return

    const phone = "5199450608"

    let message = "Olá! Quero fazer o seguinte pedido:%0A%0A"

    cartItems.forEach(item => {
      message += `• ${item.title} (x${item.quantity}) - ${(typeof item.price === "number"
                      ? `R$ ${item.price.toFixed(2) * item.quantity}`
                      : "Quero consultar o valor")}%0A`
    })

    message += `%0ATotal: R$ ${getTotalPrice().toFixed(2)}`
    message += "%0A%0AObrigada!"

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  const getTotalPrice = () => {
  return cartItems.reduce((total, item) => {
    if (typeof item.price !== "number") return total
    return total + item.price * item.quantity
  }, 0)
}

  return (
    <>
      {/* BOTÃO FIXO */}
      <button
        onClick={() => setIsOpen(true)}
        className="
  fixed 
  bottom-6 
  left-1/2 
  -translate-x-1/2 
  sm:left-auto 
  sm:translate-x-0 
  sm:right-6
  bg-pink-950 
  text-white 
  px-6 py-3 
  rounded-full 
  shadow-lg 
  hover:bg-pink-900 
  transition 
  z-50
"
      >
        🛒 ({cartItems.length})
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="
            fixed top-0 right-0 h-full 
            w-full sm:w-96 
            bg-white shadow-xl 
            p-6 flex flex-col
            transform transition-transform duration-300
          ">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Seu Carrinho</h2>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* LISTA */}
            <div className="flex-1 overflow-y-auto space-y-4">

              {cartItems.length === 0 && (
                <p className="text-gray-500 text-center mt-10">
                  Seu carrinho está vazio
                </p>
              )}

              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 border-b pb-4">

                  <img
                    src={item.image}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Quantidade: {item.quantity}
                    </p>
                    <p className="font-semibold text-pink-950">
                      {(typeof item.price === "number"
                      ? `R$ ${item.price.toFixed(2) * item.quantity}`
                      : "Consultar valor") } 
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}

            </div>

            {/* TOTAL */}
            {cartItems.length > 0 && (
              <>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-pink-950">
                      R$ {getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* BOTÕES */}
                <div className="mt-6 space-y-3">
                  <button
                    onClick={sendToWhatsApp}
                    className="w-full bg-pink-950 text-white py-3 rounded-xl hover:bg-pink-900 transition font-medium"
                  >
                    Finalizar no WhatsApp
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}