'use client'

export default function CoresPage() {
  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col items-center py-20 px-6">

      {/* Título */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-12 md:mb-16 text-center">
        Cores
      </h1>

      {/* Conteúdo */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div className="text-center md:text-left text-base leading-relaxed space-y-6">
          <p className="text-base md:text-lg leading-relaxed">
            Cada peça de crochê em nossa loja é confeccionada com um tipo específico de fio,
            e cada fio possui sua própria cartela de cores.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Ao se interessar por uma peça, entre em contato conosco para que possamos
            enviar o catálogo de cores disponível para ela.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Assim, você poderá escolher a cor que mais lhe agrada e personalizar
            sua peça para ter algo único, conforme o seu gosto.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center">
          <img
            src="/head-pieces/head-pieces-colors.png" // 🔁 coloque o caminho da sua imagem
            alt="Cartela de cores"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
        </div>

      </div>
    </div>
  );
}
