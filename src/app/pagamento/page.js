'use client'

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col items-center py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-12">

      {/* Título */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-12 md:mb-16 text-center">
        Informações de pagamento
      </h1>

      {/* Conteúdo */}
      <div className="max-w-6xl mt-8 md:mt-10 w-full grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-center md:text-left px-2 md:px-0">

        {/* COLUNA ESQUERDA */}
        <div className="space-y-10 md:space-y-12">

          <div className="text-center md:text-left">
            <div className="flex gap-3">
            <img src="/components/real.png" className="w-9 h-10 py-1"></img>
            <h2 className="text-2xl md:text-3xl tracking-widest font-medium mb-3">
              DINHEIRO
            </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Pode ser pago no momento da entrega do pedido.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-3">
            <img src="/components/cartao-de-credito.png" className="w-9 h-10 py-1"></img>
            <h2 className="text-2xl md:text-3xl tracking-widest font-medium mb-3">
              DÉBITO
            </h2>
            </div> 
            <p className="text-base md:text-lg leading-relaxed">
              Pagamento apenas por aproximação ou link de pagamento,
              pode ser pago no momento da entrega do pedido.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-3">
            <img src="/components/pix.png" className="w-9 h-10 py-1"></img>
            <h2 className="text-2xl md:text-3xl tracking-widest font-medium mb-3">
              PIX
            </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Pagamento no momento da compra ou na entrega do pedido.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-3">
            <img src="/components/pagamento-com-cartao-de-credito.png" className="w-9 h-10 py-1"></img>
            <h2 className="text-2xl md:text-3xl tracking-widest font-medium mb-3">
              CRÉDITO
            </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Pagamento no momento da compra ou na entrega do pedido,
              apenas por aproximação ou link de pagamento.
              <br /><br />
              Até 3x sem juros.
              <br />
              De 4x até 12x com juros.
            </p>
          </div>

        </div>

        {/* COLUNA DIREITA */}
        <div className="space-y-10 md:space-y-12">

          <div className="text-center md:text-left">
            <div className="flex gap-3">
            <img src="/components/taxa-de-juro.png" className="w-9 h-10 py-1"></img>
            <h2 className="text-2xl md:text-3xl tracking-widest font-medium mb-3">
              JUROS
            </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              O parcelamento é pensado para não pesar no seu bolso.
              Você pode visualizar o valor exato de cada parcela no momento
              da finalização do pagamento.
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex gap-3">
            <img src="/components/infinity.png" className="w-9 h-10 py-1"></img>
            <h2 className="text-2xl md:text-3xl tracking-widest font-medium mb-3">
              INFINITEPAY
            </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Utilizamos o método InfinitePay para processar nossos pagamentos
              online, garantindo uma solução segura, confiável e eficiente.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
