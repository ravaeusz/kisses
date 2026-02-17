export default function Footer(){
  return (
    <footer className="w-full border-t border-pink-950 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px- lg:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Kisses" className="w-40 object-contain" />
        </div>

        <div className="text-center text-sm md:text-base text-gray-600">
          Copyright Kisses Crochet - 2026. Todos os direitos reservados.
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <span className="inline text-sm md:text-base">Entre em contato via</span>
          <a href="https://www.instagram.com/kisses_crochettt/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-900">
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.26 4.26 0 0 0 3.5 7.75v8.5A4.26 4.26 0 0 0 7.75 20.5h8.5A4.26 4.26 0 0 0 20.5 16.25v-8.5A4.26 4.26 0 0 0 16.25 3.5h-8.5z" />
              <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              <circle cx="17.5" cy="6.5" r="0.75" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
