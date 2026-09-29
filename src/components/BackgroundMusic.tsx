"use client";

import { useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolume, setShowVolume] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        audioRef.current.volume = volume;
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Audio gagal diputar:", error);
      }
    }
  };

  const handleVolume = (value: number) => {
    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  return (
    <>
      {/* Audio */}
      <audio
        ref={audioRef}
        src="/backsound.mp3"
        loop
        preload="auto"
      />

      {/* Music Control */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center gap-2">

          {/* Volume Panel */}
          <div
            className={`overflow-hidden rounded-full border border-white/10 bg-[#0b0f17]/90 backdrop-blur-xl transition-all duration-300 ${
              showVolume
                ? "w-32 px-4 opacity-100"
                : "w-0 px-0 opacity-0"
            }`}
          >
            <div className="flex h-12 items-center gap-2">
              <span className="text-xs text-gray-400">
                🔊
              </span>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) =>
                  handleVolume(Number(e.target.value))
                }
                className="w-full accent-blue-500"
              />
            </div>
          </div>

          {/* Music Button */}
          <button
            onClick={toggleMusic}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowVolume((prev) => !prev);
            }}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/20 bg-[#0b0f17]/90 text-white shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-blue-600/20"
            aria-label={playing ? "Pause music" : "Play music"}
            title="Klik untuk musik • Klik kanan untuk volume"
          >
            {/* Glow */}
            <span
              className={`absolute inset-0 rounded-full bg-blue-500/20 blur-xl transition-opacity ${
                playing ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Equalizer */}
            {playing ? (
              <div className="relative flex h-5 items-end gap-[3px]">
                <span className="w-[3px] animate-[musicbar_0.6s_ease-in-out_infinite] rounded-full bg-blue-400" />
                <span className="w-[3px] animate-[musicbar_0.8s_ease-in-out_infinite_0.1s] rounded-full bg-cyan-400" />
                <span className="w-[3px] animate-[musicbar_0.5s_ease-in-out_infinite_0.2s] rounded-full bg-blue-500" />
                <span className="w-[3px] animate-[musicbar_0.7s_ease-in-out_infinite_0.3s] rounded-full bg-cyan-300" />
              </div>
            ) : (
              /* Music Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="relative h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 18V5l12-2v13"
                />
                <circle
                  cx="6"
                  cy="18"
                  r="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="18"
                  cy="16"
                  r="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}