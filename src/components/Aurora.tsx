"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

type AuroraProps = {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
};

export default function Aurora({
  colorStops = ["#2563eb", "#6366f1", "#06b6d4"],
  amplitude = 1,
  blend = 0.8,
}: AuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: true,
    });

    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 0);

    container.appendChild(gl.canvas);

    const vertex = `
      attribute vec2 position;
      attribute vec2 uv;

      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;

      uniform float uTime;
      uniform float uAmplitude;

      varying vec2 vUv;

      vec3 palette(float t) {
        vec3 c1 = vec3(
          ${hexToRgb(colorStops[0])}
        );

        vec3 c2 = vec3(
          ${hexToRgb(colorStops[1])}
        );

        vec3 c3 = vec3(
          ${hexToRgb(colorStops[2])}
        );

        return mix(
          mix(c1, c2, smoothstep(0.0, 0.5, t)),
          c3,
          smoothstep(0.5, 1.0, t)
        );
      }

      void main() {
        vec2 uv = vUv;

        float time = uTime * 0.00035;

        float wave1 =
          sin(uv.x * 7.0 + time * 2.0) *
          0.09 *
          uAmplitude;

        float wave2 =
          sin(uv.x * 13.0 - time * 1.4) *
          0.045 *
          uAmplitude;

        float wave3 =
          sin(uv.x * 21.0 + time) *
          0.025 *
          uAmplitude;

        float wave =
          wave1 +
          wave2 +
          wave3;

        float center =
          0.38 + wave;

        float distanceFromWave =
          abs(uv.y - center);

        float glow =
          smoothstep(
            0.32,
            0.0,
            distanceFromWave
          );

        float fade =
          smoothstep(0.0, 0.25, uv.y) *
          smoothstep(1.0, 0.45, uv.y);

        vec3 color =
          palette(
            fract(uv.x * 0.85 + time * 0.05)
          );

        float alpha =
          glow *
          fade *
          0.42;

        gl_FragColor =
          vec4(color, alpha);
      }
    `;

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: {
          value: 0,
        },
        uAmplitude: {
          value: amplitude,
        },
      },
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height);
    };

    resize();

    window.addEventListener("resize", resize);

    let animationFrame = 0;

    const animate = (time: number) => {
      program.uniforms.uTime.value = time;

      renderer.render({
        scene: mesh,
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      if (gl.canvas.parentElement === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, [amplitude, colorStops]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full"
      style={{
        mixBlendMode: "screen",
        opacity: blend,
      }}
    />
  );
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");

  const r =
    parseInt(clean.substring(0, 2), 16) / 255;

  const g =
    parseInt(clean.substring(2, 4), 16) / 255;

  const b =
    parseInt(clean.substring(4, 6), 16) / 255;

  return `${r.toFixed(3)}, ${g.toFixed(3)}, ${b.toFixed(3)}`;
}