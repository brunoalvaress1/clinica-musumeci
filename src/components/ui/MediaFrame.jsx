import { useState } from "react";
import { cn } from "../../lib/cn.js";
import Icon from "./Icon.jsx";

/**
 * Moldura de mídia.
 * - `video` (se passado) toca como mídia principal, com a imagem `src` de poster.
 * - Se o vídeo falhar, cai para a imagem `src`.
 * - Se a imagem também falhar, mostra um bloco em degradê na paleta da marca
 *   com um ícone e o rótulo — visual limpo, nada de "imagem quebrada".
 * - `icon` + `caption` formam uma etiqueta padronizada no canto da foto.
 */
export default function MediaFrame({
  src,
  video,
  alt,
  caption,
  icon,
  fallbackIcon, // compatibilidade
  ratio = "aspect-[3/2]",
  className,
  poster,
  zoom = true,
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const badge = icon || fallbackIcon || "sparkles";
  const showVideo = video && !videoFailed;
  const showImg = !showVideo && !imgFailed;

  return (
    <figure
      className={cn(
        "group relative m-0 grid place-items-center overflow-hidden rounded-xl2 bg-gradient-to-br from-brand-600 to-brand-700 shadow-md2",
        ratio,
        className
      )}
    >
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster || src}
          onError={() => setVideoFailed(true)}
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {showImg && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out",
            zoom && "group-hover:scale-[1.04]"
          )}
        />
      )}

      {/* estado sem imagem — limpo e intencional */}
      {!showVideo && !showImg && (
        <div className="flex flex-col items-center gap-3 px-4 text-center text-white/85">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/20">
            <Icon name={badge} className="h-5 w-5" />
          </span>
          {caption && (
            <span className="text-[0.82rem] font-medium tracking-wide">
              {caption}
            </span>
          )}
        </div>
      )}

      {/* etiqueta padronizada quando há mídia */}
      {caption && (showVideo || showImg) && (
        <figcaption className="absolute bottom-3 left-3 z-[2] inline-flex items-center gap-1.5 rounded-full bg-brand-700/65 px-3 py-1.5 text-[0.76rem] font-medium text-white ring-1 ring-inset ring-white/15 backdrop-blur-md">
          <Icon name={badge} className="h-3.5 w-3.5 text-accent" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
