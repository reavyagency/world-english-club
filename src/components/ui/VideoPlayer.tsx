"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

/**
 * Player de YouTube "limpo": sem logo, título, informações, controles ou
 * barra de progresso — apenas o vídeo e um botão de play/pause próprio.
 *
 * Como: usa a IFrame API do YouTube (host nocookie) com `controls=0` +
 * `modestbranding` + `rel=0` etc., o iframe fica `pointer-events-none`
 * (nenhuma UI do YouTube reage a hover/clique) e um botão nosso controla
 * play/pause via API. Enquanto não toca, mostra a thumbnail do vídeo.
 *
 * O iframe só é criado após o primeiro clique (bom para performance).
 */

// Carrega a IFrame API uma única vez para toda a página.
let ytApi: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (ytApi) return ytApi;
  ytApi = new Promise<void>((resolve) => {
    const w = window as unknown as {
      YT?: { Player: unknown };
      onYouTubeIframeAPIReady?: () => void;
    };
    if (w.YT && w.YT.Player) return resolve();
    const previous = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });
  return ytApi;
}

export function VideoPlayer({
  videoId,
  start = 0,
  label = "vídeo",
  aspect = "16 / 9",
  className = "",
}: {
  videoId: string;
  start?: number;
  label?: string;
  aspect?: string;
  className?: string;
}) {
  const holderRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const [active, setActive] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled || !holderRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const YT = (window as any).YT;
      playerRef.current = new YT.Player(holderRef.current, {
        videoId,
        host: "https://www.youtube-nocookie.com",
        // Sem isto o iframe nasce com o tamanho padrão (640x390) e "flutua"
        // dentro da moldura em vez de preenchê-la.
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          start,
        },
        events: {
          // `seekTo` antes do play ignora a posição que o YouTube guarda de
          // sessões anteriores: o vídeo sempre abre do começo.
          onReady: (e: {
            target: { playVideo: () => void; seekTo: (s: number, allow: boolean) => void };
          }) => {
            e.target.seekTo(start, true);
            e.target.playVideo();
          },
          onStateChange: (e: { data: number }) => {
            setPlaying(e.data === YT.PlayerState.PLAYING);
            // Ao terminar, rebobina e pausa: volta ao pôster, pronto para
            // ser assistido de novo do início.
            if (e.data === YT.PlayerState.ENDED) {
              playerRef.current?.seekTo(start, true);
              playerRef.current?.pauseVideo();
            }
          },
        },
      });
    });
    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* ignore */
      }
      playerRef.current = null;
    };
  }, [active, videoId, start]);

  const toggle = useCallback(() => {
    if (!active) {
      setActive(true);
      return;
    }
    const player = playerRef.current;
    if (!player) return;
    if (playing) {
      player.pauseVideo();
    } else {
      // SEMPRE reinicia. Sem barra de progresso não há como voltar ao começo,
      // e com o vídeo pausado o pôster (thumbnail) cobre a tela — retomar do
      // meio contradiria o que a pessoa está vendo.
      player.seekTo(start, true);
      player.playVideo();
    }
  }, [active, playing, start]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-black ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Player (criado só após o primeiro play).
          A API do YouTube SUBSTITUI o elemento alvo pelo iframe, então o alvo
          precisa ficar aninhado: o iframe vira filho deste wrapper e herda o
          estilo daqui. Se estilizássemos o próprio alvo, o estilo iria embora
          junto com ele e o vídeo não preencheria a moldura. */}
      {active ? (
        <div className="pointer-events-none absolute inset-0 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:block [&>iframe]:h-full [&>iframe]:w-full">
          <div ref={holderRef} />
        </div>
      ) : null}

      {/* Thumbnail enquanto o vídeo não está tocando */}
      {!playing ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      {/* Botão play/pause (único controle) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pausar ${label}` : `Reproduzir ${label}`}
        aria-pressed={playing}
        className="absolute inset-0 z-10 flex items-center justify-center focus-visible:outline-none"
      >
        <span
          className={`grid h-16 w-16 place-items-center rounded-full bg-black/45 text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/60 ${
            playing ? "scale-90 opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {playing ? (
            <Pause size={26} className="fill-current" />
          ) : (
            <Play size={26} className="translate-x-0.5 fill-current" />
          )}
        </span>
      </button>
    </div>
  );
}
