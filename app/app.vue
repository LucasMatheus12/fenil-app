<template >
  <div class="min-h-screen text-white relative bg-[url('/images/bg-teste.png')] bg-cover bg-center bg-fixed">
    <!-- HEADER -->
<header class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] z-50">
  <div class="container mx-auto px-4 py-4 flex items-center justify-between">
    <img src="/images/logo.png" alt="Logo" class="h-10 w-auto">

    <!-- NAV DESKTOP -->
    <nav class="hidden md:flex items-center space-x-8 rounded-full py-[21px] px-[32px] !bg-[#20222780]">
      <a href="#equipe" class="text-gray-300 hover:text-white transition-colors">NOSSA EQUIPE</a>
      <a href="#como-funciona" class="text-gray-300 hover:text-white transition-colors">COMO FUNCIONA</a>
      <a href="#depoimentos" class="text-gray-300 hover:text-white transition-colors">DEPOIMENTOS</a>
    </nav>

    <!-- CTA DESKTOP -->
    <a href="#contato" class="hidden md:block bg-transparent border border-gray-600 text-white px-6 py-2 rounded-full hover:border-green-500 transition-colors">
      FALE CONOSCO
    </a>

    <!-- HAMBURGUER (MOBILE) -->
    <button
      id="menuBtn"
      class="md:hidden text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      aria-controls="mobileMenu"
      :aria-expanded="isMenuOpen.toString()"
      aria-label="Abrir menu"
      @click="toggleMenu"
    >
      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</header>

<!-- OVERLAY (MOBILE) -->
<div
  id="mobileOverlay"
  class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 z-40"
  :class="isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
  @click="closeMenu"
></div>

<!-- MENU MOBILE (off-canvas à direita) -->
<aside
  id="mobileMenu"
  class="fixed right-0 top-0 h-full w-80 max-w-[85vw] transition-transform duration-200 z-50
         bg-[#141414] border-l border-white/10 shadow-2xl"
  :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
>
  <div class="flex items-center justify-between px-4 py-4 border-b border-white/10">
    <span class="text-white font-medium"></span>
    <button id="closeMenuBtn" class="p-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Fechar menu" @click="closeMenu">
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <nav class="px-4 py-3">
    <a href="#equipe" class="block px-3 inter py-3 rounded-lg text-[rgba(242,234,220,1)] hover:bg-white/10" @click="closeMenu">NOSSA EQUIPE</a>
    <a href="#como-funciona" class="block inter px-3 py-3 rounded-lg text-[rgba(242,234,220,1)] hover:bg-white/10" @click="closeMenu">COMO FUNCIONA</a>
    <a href="#depoimentos" class="block inter px-3 py-3 rounded-lg text-[rgba(242,234,220,1)] hover:bg-white/10" @click="closeMenu">DEPOIMENTOS</a>
  </nav>

  <div class="px-4 pt-2 pb-6 border-t border-white/10">
    <a href="#contato"
       class="block w-full text-center bg-transparent border border-gray-600 text-white px-4 py-3 rounded-full
              hover:border-green-500 transition-colors"
       @click="closeMenu">
      FALE CONOSCO
    </a>
  </div>
</aside>


    <section id="equipe" class="pt-[200px] pb-16  text-center relative hero-auto  overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center">
      <div class="container mx-auto px-4" >
        <h1 class="lora md:text-[56px] text-[40px] !text-[rgba(242,234,220,1)] font-semibold leading-tight">
          De amador a máquina de vendas:
        </h1>
        <p class="lora md:text-[32px] text-[18px] font-normal !text-[rgba(242,234,220,1)] mb-[24px] mx-auto">
          instale um funil com IA em 30 dias. Marketing + CRM + Vendedores IA
        </p>
        <p class="md:text-[20px] text-[18px] !text-[rgba(242,234,220,0.8)] font-normal mb-[48px]">
          Previsibilidade de leads, agenda e receita. Sem depender de sorte.
        </p>
        
        <button class="bg-[rgba(242,234,220,1)] text-black px-8 py-3 rounded-full uppercase text-[14px] font-semibold hover:bg-gray-100 transition-colors mb-16">
          Ver como funciona ->
        </button>
      
        
      </div>

<div
  id="logosSlider"
  class="relative mt-14 md:mt-[200px] border-y border-[rgba(242,234,220,0.28)] "
>
  <ClientOnly>

    <div class="relative mx-auto w-full  px-4 py-6">

      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-80 z-50
               bg-gradient-to-r from-[rgba(13,13,14,0.9)] to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-80 z-50
               bg-gradient-to-l from-[rgba(13,13,14,0.9)] to-transparent"
      ></div>

      <Swiper
        :modules="[Autoplay, FreeMode]"
        :loop="true"
        :speed="9000"
        :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }"
        :freeMode="true"
        :freeModeMomentum="false"
        :slides-per-view="'auto'"
        :space-between="100"
        :allowTouchMove="false"
        class="py-2 max-w-[1536px]"
      >
        <SwiperSlide v-for="(logo, i) in logosInfinite" :key="i" class="!w-auto">
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </ClientOnly>
</div>


    </section>
    <section class="py-16 px-4 ">
    
        <div class=" gap-12 items-center">
          
          <div class="relative">
            <div class="absolute md:ml-[200px] ml-none">
              <span class="block h-1.5 w-10 bg-[rgba(26,255,122,1)] mb-6"></span>
              <h2 class="lora text-[40px] md:text-[64px] leading-[1.05] font-medium text-[rgba(242,234,220,1)] mb-6">
                Por que a<br>Fenil Existe?
              </h2>
              <p class="inter font-normal leading-[150%] text-[rgba(218,214,207,1)] text-[16px] sm:text-[18px] max-w-[460px]">
                Estamos aqui para mostrar que, com o poder das automações + IA, o seu CRM
                deixa de ser apenas uma ferramenta e se transforma em uma máquina de vendas e insights.
              </p>
            </div>
          <img src="/images/illustra-sistema.png" alt="" class="md:pt-[200px] pt-[300px] md:block hidden">
          <img src="/images/illustra-sistema-mobile.png" alt="" class="md:hidden block pt-[200px]">
        </div>
        </div>
    </section>

    <section id="como-funciona" class="py-16 px-4 relative overflow-hidden">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid md:grid-cols-2 items-center justify-between mb-12 gap-4">
          <div class="flex flex-col">
            <span class="block h-1.5 w-10 bg-[rgba(26,255,122,1)] mb-6"></span>
            <h2 class="lora md:text-[72px] text-[40px] font-medium text-[rgba(242,234,220,1)]">Serviços</h2>
          </div>
          <div class="relative flex items-start">
          <!-- Ornamento verde -->
          <svg xmlns="http://www.w3.org/2000/svg"
              class="absolute left-0 top-0 md:block hidden"
              width="800" height="72" viewBox="0 0 851 72" fill="none">
            <path d="M5.66668 3C5.66668 1.52723 4.47277 0.333334 2.99999 0.333334C1.52728 0.333334 0.333368 1.52724 0.333368 3C0.333368 4.47275 1.52728 5.66666 2.99999 5.66666C4.47277 5.66666 5.66668 4.47275 5.66668 3ZM851 71L851 70.5L35 70.5001L35 71.0001L35 71.5001L851 71.5L851 71ZM3 39.0001L3.5 39.0001L3.49999 3L2.99999 3L2.49999 3L2.5 39.0001L3 39.0001ZM35 71.0001L35 70.5001C17.603 70.5001 3.5 56.397 3.5 39.0001L3 39.0001L2.5 39.0001C2.5 56.9493 17.0507 71.5001 35 71.5001L35 71.0001Z"
                  fill="url(#paint0_linear_1_2419)"/>
            <defs>
              <linearGradient id="paint0_linear_1_2419" x1="3" y1="37" x2="851" y2="37" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1AFF7A" stop-opacity="0.5"/>
                <stop offset="1" stop-color="#1AFF7A" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          <!-- Texto -->
          <p class="relative inter font-normal text-[rgba(242,234,220,1)] md:text-[18px] text-[16px] leading-relaxed md:max-w-[29rem] max-w-full md:ml-8 ml-0">
            Projetamos e construímos sua máquina de vendas com a mais avançada tecnologia em automação e IA.
          </p>
      </div>

        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">Automações Comerciais</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Automatize tarefas repetitivas e foque no que mais importa: vender.
            </p>
            <!-- <div class="w-full h-32 bg-gray-800 rounded mb-4 flex items-center justify-center">
              <span class="text-gray-500">Interface Preview</span>
            </div> -->
            <img src="/images/imgCard1.png" alt="" class="absolute bottom-10 right-0 w-full z-10">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px] ">
          </div>
          
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">SDR AI</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Prospecção e qualificação de leads no piloto automático com IA.
            </p>
            <img src="/images/imgCard2.png" alt="" class="absolute bottom-5 left-1/2 -translate-x-1/2 w-[237px] h-[139.7px] z-10">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px]">
          </div>
          
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">CRM</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Transforme seu CRM no cérebro inteligente da sua máquina de vendas.
            </p>
            <img src="/images/imgCard3.png" alt="" class="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 h-[163px] w-[239px]">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px]">
          </div>
          
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">Estrutura de Funil</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Projetamos e construímos sua máquina de vendas com a mais avançada tecnologia em automação e IA.
            </p>
            <img src="/images/imgCard4.png" alt="" class="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 h-[159px] w-[239px]">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px]">
          </div>
          
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">Ferramentas de IA</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Otimize suas campanhas e vendas com o poder da Inteligência Artificial.
            </p>
            <img src="/images/imgCard5.png" alt="" class="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 h-[164px] w-full">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px]">
          </div>
          
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">Outbound</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Conectamos sua empresa diretamente aos seus clientes ideais.
            </p>
            <img src="/images/imgCard6.png" alt="" class="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 h-[167px] w-[230px]">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px]">
          </div>
        
          <div class="relative bg-[rgba(13,13,14,1)] rounded-lg border-[1.5px] pt-[32px] px-[24px] border-[rgba(221,221,221,0.05)] shadow-[inset_1px_1px_0_0_rgba(16,14,19,1)] transition-colors h-[354px]">
            <h3 class="inter text-[18px] font-bold text-[rgba(242,234,220,1)] mb-2">Inbound</h3>
            <p class="inter font-normal text-[14px] text-[rgba(218,214,207,1)] mb-4">
              Nosso agente identifica a campanha e faz o atendimento personalizado para o lead
            </p>
            <img src="/images/imgCard7.png" alt="" class="absolute bottom-0 right-0 w-full z-10">
            <img src="/images/maskCard.png" alt="" class="absolute bottom-0 right-0 w-full h-[178px]">
          </div>
          
          <div class="relative text-black rounded-lg p-6 bg-[rgba(242,234,220,1)] h-[354px]">
            <h3 class="text-lg font-semibold mb-2">Pronto para construir o seu funil?</h3>
            <p class="text-gray-600 text-sm mb-4">
              Cada empresa é única. O próximo passo é entendermos seus desafios para desenhar uma máquina de vendas sob medida para o seu negócio.
            </p>
            <button class="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
              FAZER DIAGNÓSTICO ->
            </button>
            <img src="/images/circles.png" alt="" class="absolute bottom-0 right-0">
          </div>
        </div>
      </div>
      <img src="/images/maskServicos.png" alt="" class="absolute bottom-0 right-0 w-full -z-[10]">
    </section>

    <section id="depoimentos" class="md:h-sreen h-auto relative py-20 px-4
         border-y border-[rgba(242,234,220,0.1)]">
  <div class="container mx-auto max-w-6xl">
    <!-- Título -->
    <div class="text-center mb-12">
      <div class="mt-3 flex justify-center">
        <span class="h-1.5 w-10 bg-[rgba(26,255,122,1)]"></span>
      </div>
      <h2 class="font-['Lora'] text-[48px] md:text-[56px] mt-6 !text-[#F2EADC] font-bold leading-[1.2]">
        Depoimentos
      </h2>
      
    </div>

    <!-- Layout principal -->
    <div class="grid grid-cols-1 lg:grid-cols-[258px_minmax(0,1.35fr)_167px] gap-6 items-start">
      <!-- Lista de pessoas -->
      <aside class="rounded-xl bg-[rgba(13,13,14,0.4)] backdrop-blur-[40px]">
        <ul class="divide-y divide-[rgba(242,234,220,0.1)]">
          <li v-for="p in people" :key="p.id">
            <button
              type="button"
              class="w-full text-left py-[35px] px-2 rounded-lg transition-colors
                     hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-emerald-500/40
                     grid grid-cols-[1fr_auto] items-center gap-2"
              :class="activeId === p.id ? 'bg-white/5' : ''"
              @click="activeId = p.id"
            >
              <div>
                <div class="text-[16px] font-semibold text-white">{{ p.name }}</div>
                <div class="text-[12px] text-white/60 mt-1">{{ p.role }}</div>
              </div>
              <!-- <span
                class="block w-2 h-2 rounded-full"
                :class="activeId === p.id ? 'bg-emerald-500' : 'bg-transparent border border-white/20'"
                aria-hidden="true"
              /> -->
            </button>
          </li>
        </ul>
      </aside>

      <!-- Centro: Foto + Depoimento (texto mais largo) -->
      <div class="flex flex-col md:flex-row gap-6 items-stretch">
        <!-- Foto fixa -->
        <figure class="rounded-xl overflow-hidden md:basis-[320px] md:shrink-0">
          <img
            src="/images/depo1.jpeg"
            :alt="`Foto de ${current.name}`"
            class="w-full h-full object-cover rounded-xl"
          />
        </figure>

        <!-- Texto ocupa o restante -->
        <article
          class=" rounded-xl bg-[rgba(13,13,14,1)] border border-[rgba(242,234,220,0.1)]
                 shadow-[inset_1px_1px_0_0_rgba(16,14,19,0.4)] p-6 md:p-8"
        >
          <p class="inter font-normal text-[rgba(242,234,220,1)] leading-[1.7] text-[16px]">
            “{{ current.quote }}”
          </p>
        </article>
      </div>

      <!-- Métricas -->
      <aside class="grid gap-6 md:grid-cols-1 grid-cols-2">
        <div
          class="rounded-xl p-5 text-center min-h-[120px]
                 bg-[rgba(242,234,220,0.92)] text-[rgba(13,13,14,1)] shadow shadow-black/20 text-start"
        >
          <div class="lora text-[48px] font-medium">+150</div>
          <div class="inter mt-1 text-[16px] font-normal text-[rgba(13,13,14,1)] leading-snug">
            Aumento em<br />Leads Qualificados
          </div>
        </div>
        <div
          class="rounded-xl p-5 text-center min-h-[120px]
                 bg-[rgba(242,234,220,0.92)] text-black shadow shadow-black/20 text-start"
        >
          <div class="lora text-[48px] font-medium">95%</div>
          <div class="inter mt-1 text-[16px] font-normal text-[rgba(13,13,14,1)] leading-snug">
            Previsibilidade<br />de Receita
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

    <section id="contato" class="pb-[250px] pt-[120px] px-4 md:h-sreen h-auto bg-[url('/images/bg-form.png')] bg-cover bg-center">
      <div class="mx-auto max-w-xl rounded-2xl ring-1 ring-white/10 p-[2px]">
  <div class="container mx-auto max-w-xl">
  <div class="relative rounded-2xl bg-[rgba(13,13,14,0.4)] border border-[rgba(242,234,220,0.2)] backdrop-blur-[80px] p-6 md:p-8">
    <!-- título -->
    <div class=" mb-[24px] flex justify-center">
      <span class="h-1.5 w-10 bg-[rgba(26,255,122,1)]"></span>
    </div>
    <h2 class="text-[32px] md:[40px] md:font-medium font-normal text-center text-rgba(242,234,220,1) mb-[56px]">Seu diagnóstico aqui!</h2>

    <!-- formulário -->
    <form class="space-y-5">
      <label class="block">
        <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">Nome</span>
        <input
          type="text"
          class="input-glass w-full h-11 px-4"
          placeholder=""
        />
      </label>

      <label class="block">
        <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">E-mail</span>
        <input
          type="email"
          class="input-glass w-full h-11 px-4"
          placeholder=""
        />
      </label>

      <label class="block">
        <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">Telefone</span>
        <input
          type="text"
          class="input-glass w-full h-11 px-4"
          placeholder=""
        />
      </label>

      <label class="block">
        <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">Nome da empresa</span>
        <input
          type="text"
          class="input-glass w-full h-11 px-4"
          placeholder=""
        />
      </label>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">Quantidade de funcionários</span>
          <input
            type="text"
            class="input-glass w-full h-11 px-4"
            placeholder=""
          />
        </label>

        <label class="block">
          <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">Faturamento mensal</span>
          <input
            type="text"
            class="input-glass w-full h-11 px-4"
            placeholder=""
          />
        </label>
      </div>

      <label class="block">
        <span class="block inter text-[16px] text-[rgba(242,234,220,1)] mb-2">Conte-nos sua dor</span>
        <textarea
          rows="4"
          class="input-glass w-full px-4"
          placeholder=""
        ></textarea>
      </label>

      <div class="flex justify-end text-center pt-2">
        <button
          type="submit"
          class="inter inline-flex items-center gap-2 text-center text-[14px] justify-center bg-[rgba(242,234,220,1)] w-full md:w-auto text-[rgba(13,13,14,1)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          ENVIAR MENSAGEM
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  </div>
</div>

</div>
  </section>

    <footer class="pb-[44px] pt-[64px] px-4 left-1/2 -translate-x-1/2 max-w-[1280px] absolute bottom-0 w-full ">
      <div class="container mx-auto flex md:flex-row flex-col-reverse justify-between md:items-center items-start gap-4">
        <div class="text-[rgba(242,234,220,1)] text-[16px] mb-4  md:mb-0">
          © 2025 Fenil Consultoria. Todos os direitos reservados.
        </div>
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_1_1341)">
            <path d="M5.33594 10.6668C5.33594 9.25234 5.89784 7.89579 6.89803 6.89559C7.89823 5.8954 9.25478 5.3335 10.6693 5.3335H21.3359C22.7504 5.3335 24.107 5.8954 25.1072 6.89559C26.1074 7.89579 26.6693 9.25234 26.6693 10.6668V21.3335C26.6693 22.748 26.1074 24.1045 25.1072 25.1047C24.107 26.1049 22.7504 26.6668 21.3359 26.6668H10.6693C9.25478 26.6668 7.89823 26.1049 6.89803 25.1047C5.89784 24.1045 5.33594 22.748 5.33594 21.3335V10.6668Z" stroke="#1AFF7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16Z" stroke="#1AFF7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 10V10.0133" stroke="#1AFF7A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_1341">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <a
            href="https://www.instagram.com/fenil.br/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm inline-flex items-center gap-1 hover:underline"
          >
            @FENIL.BR
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
/** ====== CONTROLE DO MENU MOBILE (Vue Bindings) ====== **/
const isMenuOpen = ref(false)
const openMenu = () => { isMenuOpen.value = true; document.body.style.overflow = 'hidden' }
const closeMenu = () => { isMenuOpen.value = false; document.body.style.overflow = '' }
const toggleMenu = () => (isMenuOpen.value ? closeMenu() : openMenu())

const handleKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
onMounted(() => document.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', handleKeydown))

/** ====== SEU CÓDIGO EXISTENTE ====== **/
const activeId = ref<number>(1)

type Person = {
  id: number
  name: string
  role: string
  photo: string
  quote: string
}

const people = ref<Person[]>([
  {
    id: 1,
    name: 'Patricia Barizon',
    role: 'especialista em CRM e empreendedora',
    photo: '/images/imgCard1.png',
    quote:
      'A Fenil trouxe tranquilidade para o nosso dia a dia. Sem complicação, com processos bem definidos e uma comunicação clara, conseguimos focar no que realmente importa: o nosso serviço. Os resultados têm superado as expectativas.'
  },
])



const current = computed(() => people.value.find(p => p.id === activeId.value)!)

// Page meta (Nuxt)
useHead({
  title: 'Fenil - De amador a máquina de vendas',
  meta: [
    { name: 'description', content: 'Instale um funil com IA em 30 dias. Marketing + CRM + Vendedores IA' }
  ]
})

const svg = `<svg width="118" class="h-alto" viewBox="0 0 444 65" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M27.1001 1.09999C14.1001 2.79999 4.40013 10.2 1.30013 20.9C0.200132 24.9 -0.0998686 28.9 0.200132 35.5C1.00013 49.7 5.50013 56.7 17.6001 62.2C21.9001 64.2 24.1001 64.5 35.5001 64.5C45.5001 64.5 49.7001 64.1 53.7001 62.7C60.9001 60.2 68.4001 53.3 70.4001 47.3C72.9001 39.9 73.1001 40 63.1001 40H54.2001L53.0001 43.5C52.4001 45.4 50.6001 48 49.0001 49.4C43.7001 53.8 32.7001 54.6 26.3001 51.2C20.0001 47.8 16.2001 37.3 18.0001 28C19.2001 21.6 20.1001 20 24.4001 16.2C33.0001 8.7 48.8001 12 53.0001 22.1C54.2001 25 54.3001 25 63.2001 25H72.2001L71.5001 21.7C70.5001 16.9 66.4001 10.4 62.5001 7.4C55.6001 2.1 40.1001 -0.600007 27.1001 1.09999Z" fill="#ffffff"></path>
        <path d="M87.5001 31.6C80.4001 47.8 74.4001 61.8 74.2001 62.6C73.9001 63.8 75.3001 64 82.6001 63.8L91.4001 63.5L93.9001 57.3L96.3001 51H124.8L127.3 57.3L129.8 63.5L138.4 63.8C144.5 64 147 63.7 147 62.9C147 62.2 142.1 50.6 136.1 37.1C130.2 23.6 124.2 10.1 123 7.2L120.8 2H100.5L87.5001 31.6ZM114.1 24.1C115.8 28.2 117.8 33.2 118.5 35.2L119.9 39H101.2L105.8 27.5C108.3 21.2 110.5 16.2 110.7 16.3C110.8 16.5 112.4 20 114.1 24.1Z" fill="#ffffff"></path>
        <path d="M152 64.1L168.5 63.5L169.1 41H180.9C196.5 41 197 41.4 198 53.1C198.3 57.8 199 62.2 199.4 62.8C199.9 63.6 203.1 64 208.7 64C217.1 64 217.2 64 216.6 61.8C216.2 60.5 215.5 55.7 215 51C214 40.8 213 37.9 209.5 35.2C207.1 33.3 207 33.1 208.9 32.5C214.5 30.8 218 21.5 216 14C214.8 9.4 209.5 4.5 204.3 3.1C202.1 2.5 190.1 2 176.3 2H152V64.1ZM196.5 16.5C199.5 19.5 199.7 22.9 196.9 26.4C194.9 29 194.7 29 181.9 29H169V14H181.5C193.5 14 194.2 14.1 196.5 16.5Z" fill="#ffffff"></path>
        <path d="M225.2 32.7L225.5 63.5L241 64.1V43C241 30.5 241.4 22 241.9 22.2C242.4 22.3 250.1 31.8 259 43.3L275.2 64H293V2H277L276.8 23.2L276.5 44.5L260.5 23.2L244.5 2H225L225.2 32.7Z" fill="#ffffff"></path>
        <path d="M315 25.2C309.4 38 303.3 51.8 301.4 55.8C298.9 61.2 298.4 63.2 299.4 63.6C300.1 63.9 304.2 64 308.5 63.8L316.2 63.5L318.5 57.5L320.7 51.5L335.1 51.2L349.5 51L352 57.2L354.5 63.5L363.3 63.8C368.1 63.9 372 63.7 372 63.3C372 62.9 366 49 358.7 32.5L345.5 2.49999L325.3 1.89999L315 25.2ZM340.8 29.2L344.8 39H335.4C330.2 39 326 38.9 326 38.7C326 38.5 327.6 34.4 329.6 29.4C331.6 24.5 333.7 19.4 334.2 18C335.2 15.6 335.2 15.6 336 17.5C336.5 18.6 338.6 23.9 340.8 29.2Z" fill="#ffffff"></path>
        <path d="M377 64.1L392.5 63.5L393.5 21.5L410 42.8L426.5 64L435.3 63.8C440.1 63.6 444 63.2 444 62.7C444 62.3 444 48.5 444 32V2H428L427.8 23L427.5 44L395.9 2H377V64.1Z" fill="#ffffff"></path>
      </svg> `

      const svgUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
      const logos = [
        { src: '/images/logo-hello.png', alt: 'Logo 1' },
        { src: '/images/Logo-Colorido-1.png', alt: 'Logo 2' },
        { src: '/images/logo-naturalbot.png', alt: 'Logo 3' },
      { src: svgUrl, alt: 'Marca em SVG' },
        { src: '/images/logo-hello.png', alt: 'Logo 1' },
        { src: '/images/Logo-Colorido-1.png', alt: 'Logo 2' },
        { src: '/images/logo-naturalbot.png', alt: 'Logo 3' },
      { src: svgUrl, alt: 'Marca em SVG' },
        
      ]

const logosInfinite = computed(() => [...logos, ...logos, ...logos])

</script>



<style scoped>
.input-glass {
  @apply bg-[rgba(242,234,220,0.05)]
         border border-[rgba(242,234,220,0.1)]
         text-white placeholder-white/50
         rounded-lg focus:outline-none
         focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30
         hover:border-[rgba(242,234,220,0.18)];
}

.lora { @apply font-['Lora']; }
.inter { @apply font-['Inter']; }

.hero-auto {
  min-height: auto;
}

#logosSlider .swiper-wrapper { 
  transition-timing-function: linear !important;
}

/* Desktop (≥768px): ocupa a tela inteira */
@media (min-width: 768px) {
  /* fallback clássico */
  .hero-auto { min-height: 100vh; }

  /* se o navegador suportar, usa a unidade “segura” (melhor p/ barras do mobile) */
  @supports (min-height: 100svh) {
    .hero-auto { min-height: 100svh; }
  }
  @supports (min-height: 100dvh) {
    .hero-auto { min-height: 100dvh; }
  }
}
</style>
