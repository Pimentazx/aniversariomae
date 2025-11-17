/* === IMPORTS E CONFIGURAÇÃO IGUAL AO SEU CÓDIGO ATUAL === */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play, Pause, Volume2, Repeat } from "lucide-react";

// === CONFIGURAÇÃO DA TIMELINE ===
const timelineData = [
  {
    id: 1,
    title: "Nosso Início",
    year: "2000s",
    image: "/cinema.jpg",
    text: "Aquelas primeiras lembranças: seu colo, suas histórias antes de dormir e o cheirinho de domingo.",
  },
  {
    id: 2,
    title: "Aprendizados",
    year: "Infância",
    image: "/2024.jpg",
    text: "Você me ensinou a importância da honestidade, da coragem e do sorriso em dias difíceis.",
  },
  {
    id: 3,
    title: "Viagens e Risadas",
    year: "Adolescência",
    image: "/festajunina.jpg",
    text: "As viagens que viraram histórias — e as histórias que viraram piadas internas da família.",
  },
  {
    id: 4,
    title: "O Cotidiano que Importa",
    year: "Hoje",
    image: "/levi.jpg",
    text: "Os pequenos gestos: café na hora certa, recados e abraços que salvam o dia.",
  },
  {
    id: 5,
    title: "Novo Capítulo",
    year: "2020s",
    image: "/formatura.jpg",
    text: "Crescemos, erramos, aprendemos e seguimos juntos.",
  },
  {
    id: 6,
    title: "Família Sempre",
    year: "Hoje",
    image: "/natal.jpg",
    text: "Quando estamos juntos, tudo faz sentido.",
  },
  {
    id: 7,
    title: "Celebrando a Vida",
    year: "2025",
    image: "/niver2025.jpg",
    text: "Mais um ano, mais uma página linda da sua história 💖",
  },
];

// PLAYER GLOBAL
const globalMusic = "/PontesIndestrutíveis.mp3";

// MENSAGEM FINAL
const finalMessage = `
Mãe, obrigado por cada cuidado, cada palavra, cada gesto.
Você é meu exemplo, meu porto seguro e minha maior força.
Eu te amo além das palavras — feliz aniversário! 💖
`;

// ÁUDIO FINAL OPCIONAL
const finalAudio = "/mensagemfinal.mp3";

export default function RetrospectivaAniversarioMae() {
  const timelineRef = useRef(null);
  const globalAudioRef = useRef(null);
  const finalAudioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [finalPlaying, setFinalPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  function scrollToTimeline() {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function toggleGlobalMusic() {
    const audio = globalAudioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function handleVolumeChange(e) {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (globalAudioRef.current) globalAudioRef.current.volume = newVolume;
  }

  function toggleFinalPlay() {
    const audio = finalAudioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setFinalPlaying(true);
    } else {
      audio.pause();
      setFinalPlaying(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff5fb] to-[#f7eef8] text-[#333] antialiased">

      {/* === PLAYER GLOBAL FIXO === */}
      <div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur-md shadow-xl px-5 py-4 rounded-2xl flex items-center gap-4">
        <audio ref={globalAudioRef} src={globalMusic} loop volume={volume} />

        <button
          onClick={toggleGlobalMusic}
          className="bg-[#d880c0] text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div className="flex items-center gap-2 w-28">
          <Volume2 size={18} className="text-[#5b2c5a]" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-[#d880c0]"
          />
        </div>
      </div>

      {/* === HERO === */}
      <header className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe3f5] to-[#f7d7ef]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl p-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-[PlayfairDisplay] text-[#5b2c5a] drop-shadow-md">
            Feliz Aniversário, Mãe! 💗
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[#5b2c5a]/90">
            Hoje eu quero celebrar você, sua história e tudo o que você fez por mim.
            Preparei uma retrospectiva cheia de carinho.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={scrollToTimeline}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#d880c0] text-white font-medium shadow-lg hover:scale-105 transition-transform"
            >
              Ver Retrospectiva <ArrowDown size={18} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* === TIMELINE COM IMAGEM VERTICAL + TEXTO AO LADO === */}
      <main ref={timelineRef} className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto relative">

          <h2 className="text-3xl font-semibold text-[#5b2c5a] mb-16 text-center">
            Nossa Retrospectiva 💞
          </h2>

          <div className="flex flex-col gap-32">
            {timelineData.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* BOLINHA NAS EXTREMIDADES */}
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#d880c0]
                      border-4 border-white shadow-xl z-20
                      ${isLeft ? "-left-4" : "-right-4"}
                    `}
                  />

                  {/* CARD HORIZONTAL */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`
                      w-full md:w-[70%] p-6 rounded-3xl shadow-xl bg-white 
                      flex flex-col md:flex-row gap-6 items-center
                      ${isLeft ? "ml-10" : "mr-10 flex-row-reverse"}
                    `}
                  >
                    {/* IMAGEM VERTICAL */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:w-1/2 h-[450px] object-cover object-center rounded-2xl shadow"
                    />

                    {/* TEXTO CENTRALIZADO VERTICALMENTE */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-[#5b2c5a]">
                        {item.year} — {item.title}
                      </h3>
                      <p className="text-[#555] mt-3 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* === SEÇÃO FINAL === */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 bg-[#fff0f8] rounded-3xl p-10 mx-6 md:mx-24 text-center shadow-lg"
      >
        <h3 className="text-3xl font-semibold text-[#5b2c5a] mb-4">De mim para você 💝</h3>

        <p className="max-w-3xl mx-auto text-[#444] text-lg leading-relaxed whitespace-pre-line mb-6">
          {finalMessage}
        </p>

        <div className="flex items-center justify-center gap-4">
          <audio ref={finalAudioRef} src={finalAudio} preload="none" />

          <button
            onClick={toggleFinalPlay}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#d880c0] text-white font-semibold shadow"
          >
            {finalPlaying ? <Pause size={16} /> : <Play size={16} />}
            Ouvir minha mensagem
          </button>

          <a
            href={finalAudio}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#5b2c5a] font-medium shadow"
          >
            <Repeat size={16} />
            Baixar áudio
          </a>
        </div>

        <div className="mt-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 rounded-lg bg-white font-medium shadow"
          >
            Voltar ao topo
          </button>
        </div>
      </motion.section>

      <footer className="py-8 text-center text-sm text-[#6b486d]">
        Criado com amor 💜
      </footer>
    </div>
  );
}
