"use client"
import CartDrawer from '../components/CartDrawer';

export default function NavBar(){
    return(
        <div className="flex flex-col md:flex-col lg:justify-between lg:flex-row items-center px-4 mx-10">
            <div className="opacity-1 flex-1 flex items-center w-full lg:w-auto">
                <button className="hidden lg:block cursor-pointer">
                    <img className="w-8.75" src="/components/menu.png" alt="menu" />
                </button>
            </div>

            <div className="flex-none border-b lg:px-20 pb-2 w-full lg:w-auto">
                <img className="w-40 md:w-56 lg:w-65 mx-auto" src="/logo.png" alt="logo" />
            </div>

            <div className="flex-1 flex items-center justify-end gap-4 w-full lg:w-auto ">
                <div className="hidden lg:flex gap-4">
                   <a href="/" className="text-xl hover:text-pink-950 hover:border-pink-950 hover:border-b">Produtos</a>
                   <a href="/cores" className="text-xl hover:text-pink-950 hover:border-pink-950 hover:border-b">Cores</a>
                   <a href="/pagamento" className="text-xl hover:text-pink-950 hover:border-pink-950 hover:border-b">Informações de pagamento</a>
                </div>
            </div>

            <div className="lg:hidden w-full flex justify-center items-center gap-2 mt-3 ">
               <a href="/" className="text-[12px] hover:text-pink-950 hover:border-pink-950 hover:border-b">Produtos</a>
               <a href="/cores" className="text-[12px] hover:text-pink-950 hover:border-pink-950 hover:border-b">Cores</a>
               <a href="/pagamento" className="text-[12px] hover:text-pink-950 hover:border-pink-950 hover:border-b">Informações de pagamento</a>
            </div>
        </div>
    )
}

