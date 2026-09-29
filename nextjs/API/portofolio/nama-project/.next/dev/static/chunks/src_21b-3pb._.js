(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Aurora.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Aurora
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Aurora(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "1b0b20230be9b4f1372d8b3d0590c69dd25e7b7e31a052ab69efb962ecb76719") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b0b20230be9b4f1372d8b3d0590c69dd25e7b7e31a052ab69efb962ecb76719";
    }
    const { colorStops: t1, amplitude: t2, blend: t3 } = t0;
    let t4;
    if ($[1] !== t1) {
        t4 = t1 === undefined ? [
            "#2563eb",
            "#6366f1",
            "#06b6d4"
        ] : t1;
        $[1] = t1;
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    const colorStops = t4;
    const amplitude = t2 === undefined ? 1 : t2;
    const blend = t3 === undefined ? 0.8 : t3;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    let t6;
    if ($[3] !== amplitude || $[4] !== colorStops) {
        t5 = ({
            "Aurora[useEffect()]": ()=>{
                const container = containerRef.current;
                if (!container) {
                    return;
                }
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                    alpha: true,
                    antialias: true
                });
                const gl = renderer.gl;
                gl.clearColor(0, 0, 0, 0);
                container.appendChild(gl.canvas);
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
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
                const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                    vertex: "\n      attribute vec2 position;\n      attribute vec2 uv;\n\n      varying vec2 vUv;\n\n      void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    ",
                    fragment,
                    uniforms: {
                        uTime: {
                            value: 0
                        },
                        uAmplitude: {
                            value: amplitude
                        }
                    }
                });
                const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                    geometry,
                    program
                });
                const resize = {
                    "Aurora[useEffect() > resize]": ()=>{
                        const width = container.clientWidth;
                        const height = container.clientHeight;
                        renderer.setSize(width, height);
                    }
                }["Aurora[useEffect() > resize]"];
                resize();
                window.addEventListener("resize", resize);
                let animationFrame = 0;
                const animate = {
                    "Aurora[useEffect() > animate]": (time)=>{
                        program.uniforms.uTime.value = time;
                        renderer.render({
                            scene: mesh
                        });
                        animationFrame = requestAnimationFrame(animate);
                    }
                }["Aurora[useEffect() > animate]"];
                animationFrame = requestAnimationFrame(animate);
                return ()=>{
                    cancelAnimationFrame(animationFrame);
                    window.removeEventListener("resize", resize);
                    if (gl.canvas.parentElement === container) {
                        container.removeChild(gl.canvas);
                    }
                };
            }
        })["Aurora[useEffect()]"];
        t6 = [
            amplitude,
            colorStops
        ];
        $[3] = amplitude;
        $[4] = colorStops;
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[7] !== blend) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "absolute inset-0 h-full w-full",
            style: {
                mixBlendMode: "screen",
                opacity: blend
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Aurora.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[7] = blend;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_s(Aurora, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = Aurora;
function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.substring(0, 2), 16) / 255;
    const g = parseInt(clean.substring(2, 4), 16) / 255;
    const b = parseInt(clean.substring(4, 6), 16) / 255;
    return `${r.toFixed(3)}, ${g.toFixed(3)}, ${b.toFixed(3)}`;
}
var _c;
__turbopack_context__.k.register(_c, "Aurora");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BackgroundMusic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BackgroundMusic() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "bffcefad67b4a994d3fcacb4f164967426fbdc0d94850230d812567ac149247b") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bffcefad67b4a994d3fcacb4f164967426fbdc0d94850230d812567ac149247b";
    }
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.4);
    const [showVolume, setShowVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== playing || $[2] !== volume) {
        t0 = ({
            "BackgroundMusic[toggleMusic]": async ()=>{
                if (!audioRef.current) {
                    return;
                }
                if (playing) {
                    audioRef.current.pause();
                    setPlaying(false);
                } else {
                    ;
                    try {
                        audioRef.current.volume = volume;
                        await audioRef.current.play();
                        setPlaying(true);
                    } catch (t1) {
                        const error = t1;
                        console.error("Audio gagal diputar:", error);
                    }
                }
            }
        })["BackgroundMusic[toggleMusic]"];
        $[1] = playing;
        $[2] = volume;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const toggleMusic = t0;
    let t1;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "BackgroundMusic[handleVolume]": (value)=>{
                setVolume(value);
                if (audioRef.current) {
                    audioRef.current.volume = value;
                }
            }
        })["BackgroundMusic[handleVolume]"];
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleVolume = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
            ref: audioRef,
            src: "/backsound.mp3",
            loop: true,
            preload: "auto"
        }, void 0, false, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = `overflow-hidden rounded-full border border-white/10 bg-[#0b0f17]/90 backdrop-blur-xl transition-all duration-300 ${showVolume ? "w-32 px-4 opacity-100" : "w-0 px-0 opacity-0"}`;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-400",
            children: "🔊"
        }, void 0, false, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "BackgroundMusic[<input>.onChange]": (e)=>handleVolume(Number(e.target.value))
        })["BackgroundMusic[<input>.onChange]"];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== volume) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-12 items-center gap-2",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    value: volume,
                    onChange: t5,
                    className: "w-full accent-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 88,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[8] = volume;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t3 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "BackgroundMusic[<button>.onContextMenu]": (e_0)=>{
                e_0.preventDefault();
                setShowVolume(_BackgroundMusicButtonOnContextMenuSetShowVolume);
            }
        })["BackgroundMusic[<button>.onContextMenu]"];
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const t9 = playing ? "Pause music" : "Play music";
    const t10 = `absolute inset-0 rounded-full bg-blue-500/20 blur-xl transition-opacity ${playing ? "opacity-100" : "opacity-0"}`;
    let t11;
    if ($[14] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t10
        }, void 0, false, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== playing) {
        t12 = playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex h-5 items-end gap-[3px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-[3px] animate-[musicbar_0.6s_ease-in-out_infinite] rounded-full bg-blue-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-[3px] animate-[musicbar_0.8s_ease-in-out_infinite_0.1s] rounded-full bg-cyan-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 174
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-[3px] animate-[musicbar_0.5s_ease-in-out_infinite_0.2s] rounded-full bg-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 277
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-[3px] animate-[musicbar_0.7s_ease-in-out_infinite_0.3s] rounded-full bg-cyan-300"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 380
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 127,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            className: "relative h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:rotate-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M9 18V5l12-2v13"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 703
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "6",
                    cy: "18",
                    r: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 776
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "18",
                    cy: "16",
                    r: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 127,
                    columnNumber: 852
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 127,
            columnNumber: 492
        }, this);
        $[16] = playing;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t11 || $[19] !== t12 || $[20] !== t9 || $[21] !== toggleMusic) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleMusic,
            onContextMenu: t8,
            className: "group relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/20 bg-[#0b0f17]/90 text-white shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-blue-600/20",
            "aria-label": t9,
            title: "Klik untuk musik \u2022 Klik kanan untuk volume",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
        $[20] = t9;
        $[21] = toggleMusic;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t13 || $[24] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-6 right-6 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            t7,
                            t13
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BackgroundMusic.tsx",
                        lineNumber: 146,
                        columnNumber: 62
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BackgroundMusic.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BackgroundMusic.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t7;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    return t14;
}
_s(BackgroundMusic, "8Q7SXFNzzILwE2ahmNljwbPk3Oc=");
_c = BackgroundMusic;
function _BackgroundMusicButtonOnContextMenuSetShowVolume(prev) {
    return !prev;
}
var _c;
__turbopack_context__.k.register(_c, "BackgroundMusic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FallingStars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FallingStars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FallingStars() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "192f54e096b7b35774140d8f285377e1551eb12c8ceeb7245d200657abd73a3d") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "192f54e096b7b35774140d8f285377e1551eb12c8ceeb7245d200657abd73a3d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "FallingStars[useEffect()]": ()=>{
                const generatedStars = Array.from({
                    length: 35
                }, _FallingStarsUseEffectArrayFrom);
                setStars(generatedStars);
            }
        })["FallingStars[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== stars) {
        t3 = stars.map(_FallingStarsStarsMap);
        $[4] = stars;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/FallingStars.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    return t4;
}
_s(FallingStars, "36CTip+LTOXU7tjRCLT2sCVbLXk=");
_c = FallingStars;
function _FallingStarsStarsMap(star, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "absolute -top-10 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]",
        style: {
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `falling-star ${star.duration}s linear ${star.delay}s infinite`
        }
    }, index, false, {
        fileName: "[project]/src/components/FallingStars.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
function _FallingStarsUseEffectArrayFrom() {
    return {
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 5,
        size: 1 + Math.random() * 2
    };
}
var _c;
__turbopack_context__.k.register(_c, "FallingStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aurora$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Aurora.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9a08ae8dfc3966c82055153fc82e4a96e9b9c4636079c4fe9c037a6a699120d9") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a08ae8dfc3966c82055153fc82e4a96e9b9c4636079c4fe9c037a6a699120d9";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Aurora$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                colorStops: [
                    "#2563eb",
                    "#6366f1",
                    "#06b6d4"
                ],
                amplitude: 1.2,
                blend: 0.8
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 17,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-[1] bg-[#05070b]/55"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 top-1/3 z-[2] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[9px] text-blue-400 backdrop-blur-sm sm:mb-5 sm:px-3.5 sm:py-2 sm:text-[10px] md:px-4 md:text-xs lg:mb-6 lg:text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 31,
                    columnNumber: 249
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "whitespace-nowrap",
                    children: "Available for opportunities"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 31,
                    columnNumber: 321
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-[10px] sm:tracking-[0.25em] md:text-xs lg:mb-3 lg:text-sm lg:tracking-[0.3em]",
            children: "Hello, I'm"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            children: [
                "Azqal",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-500",
                    children: "."
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 43,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "gradient-text mt-2 text-sm font-bold leading-tight sm:mt-3 sm:text-lg md:text-2xl lg:mt-4 lg:text-3xl",
            children: "Full Stack Developer"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 max-w-xl text-[10px] leading-5 text-gray-400 sm:mt-4 sm:text-xs sm:leading-6 md:mt-5 md:text-sm md:leading-7 lg:mt-6 lg:text-lg lg:leading-8",
            children: "I build modern, responsive, and scalable web applications using modern technologies and clean user interfaces."
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-0",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-7 lg:mt-9 lg:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            className: "rounded-full bg-blue-600 px-3 py-2 text-[9px] font-semibold text-white transition hover:bg-blue-500 sm:px-4 sm:py-2.5 sm:text-[10px] md:px-5 md:py-3 md:text-xs lg:px-7 lg:py-3.5 lg:text-sm",
                            children: "View My Projects →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 56,
                            columnNumber: 140
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "rounded-full border border-white/10 px-3 py-2 text-[9px] font-semibold text-gray-300 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/5 hover:text-white sm:px-4 sm:py-2.5 sm:text-[10px] md:px-5 md:py-3 md:text-xs lg:px-7 lg:py-3.5 lg:text-sm",
                            children: "Contact Me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 56,
                            columnNumber: 383
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 56,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -inset-3 rounded-[25px] bg-blue-500/20 blur-xl sm:-inset-4 sm:rounded-[30px] lg:-inset-5 lg:rounded-[40px] lg:blur-2xl"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/images/profile.jpeg",
            alt: "Azqal",
            className: "absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 71,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/images/profile2.jpeg",
            alt: "Azqal",
            className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 72,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glow relative h-[260px] w-[190px] overflow-hidden rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-sm sm:h-[320px] sm:w-[230px] sm:rounded-[26px] md:h-[370px] md:w-[280px] md:rounded-[30px] lg:h-[450px] lg:w-[350px] lg:rounded-[32px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group relative h-full w-full",
                children: [
                    t10,
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent p-3 pt-14 sm:p-4 sm:pt-20 md:p-5 md:pt-24 lg:p-6 lg:pt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-gray-400 sm:text-[10px] md:text-xs lg:text-sm",
                                children: "Building digital experiences"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 81,
                                columnNumber: 516
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-xs font-semibold text-white sm:text-sm md:text-lg lg:mt-1 lg:text-xl",
                                children: "Full Stack Developer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 81,
                                columnNumber: 625
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 81,
                        columnNumber: 332
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 81,
                columnNumber: 276
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "relative min-h-screen overflow-hidden bg-[#05070b]",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 pt-20 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full grid-cols-2 items-center gap-5 sm:gap-8 md:gap-12 lg:gap-16",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 justify-center md:justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative animate-[float_4s_ease-in-out_infinite]",
                                    children: [
                                        t9,
                                        t12,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -right-2 top-5 rounded-xl border border-white/10 bg-[#0b0f17]/80 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:-right-3 sm:top-7 sm:px-3 sm:py-2.5 md:-right-4 md:top-8 md:px-3.5 lg:-right-5 lg:top-10 lg:rounded-2xl lg:px-4 lg:py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[8px] text-gray-500 sm:text-[9px] md:text-[10px] lg:text-xs",
                                                    children: "Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 685
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-semibold text-white sm:text-[10px] md:text-xs lg:text-sm",
                                                    children: "Web Development"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Hero.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 779
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 88,
                                            columnNumber: 432
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 88,
                                    columnNumber: 357
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 88,
                                columnNumber: 297
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 88,
                        columnNumber: 204
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 88,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    return t13;
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Projects() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "4d04f5afa741d077943b45e8e1f931fe36a256d5dddd6b0b204878eb205ed57e") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d04f5afa741d077943b45e8e1f931fe36a256d5dddd6b0b204878eb205ed57e";
    }
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [projectData, setProjectData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Projects[useEffect()]": ()=>{
                const getProjects = async function getProjects() {
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("project").select("*").order("id", {
                        ascending: true
                    });
                    if (error) {
                        console.error("Error mengambil project:", error);
                        setLoading(false);
                        return;
                    }
                    const formattedProjects = (data ?? []).map(_ProjectsUseEffectGetProjectsAnonymous);
                    setProjectData(formattedProjects);
                    setLoading(false);
                };
                getProjects();
            }
        })["Projects[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let filteredProjects;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== filter || $[5] !== loading || $[6] !== projectData || $[7] !== search) {
        let t10;
        if ($[16] !== filter || $[17] !== search) {
            t10 = ({
                "Projects[projectData.filter()]": (project_0)=>{
                    const searchValue = search.toLowerCase().trim();
                    const matchesSearch = project_0.title.toLowerCase().includes(searchValue) || project_0.description.toLowerCase().includes(searchValue) || project_0.technologies.some({
                        "Projects[projectData.filter() > project_0.technologies.some()]": (tech_0)=>tech_0.toLowerCase().includes(searchValue)
                    }["Projects[projectData.filter() > project_0.technologies.some()]"]);
                    const matchesFilter = filter === "all" || project_0.technologies.includes(filter);
                    return matchesSearch && matchesFilter;
                }
            })["Projects[projectData.filter()]"];
            $[16] = filter;
            $[17] = search;
            $[18] = t10;
        } else {
            t10 = $[18];
        }
        filteredProjects = projectData.filter(t10);
        t7 = "projects";
        t8 = "section-padding";
        let t11;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = ({
                "Projects[<input>.onChange]": (e)=>setSearch(e.target.value)
            })["Projects[<input>.onChange]"];
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        let t12;
        if ($[20] !== search) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full lg:max-w-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: search,
                    placeholder: "Cari Project..",
                    onChange: t11,
                    className: "w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                }, void 0, false, {
                    fileName: "[project]/src/features/components/Projects.tsx",
                    lineNumber: 107,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this);
            $[20] = search;
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        let t13;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = [
                "all",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
            ];
            $[22] = t13;
        } else {
            t13 = $[22];
        }
        let t14;
        if ($[23] !== filter) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-wrap gap-2 lg:w-auto lg:justify-end",
                children: t13.map({
                    "Projects[(anonymous)()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "Projects[(anonymous)() > <button>.onClick]": ()=>setFilter(item)
                            }["Projects[(anonymous)() > <button>.onClick]"],
                            className: `rounded-md border px-3 py-2 text-xs font-medium transition duration-300 sm:px-4 sm:text-sm ${filter === item ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]" : "border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"}`,
                            children: item === "all" ? "All Projects" : item
                        }, item, false, {
                            fileName: "[project]/src/features/components/Projects.tsx",
                            lineNumber: 123,
                            columnNumber: 46
                        }, this)
                }["Projects[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this);
            $[23] = filter;
            $[24] = t14;
        } else {
            t14 = $[24];
        }
        if ($[25] !== t12 || $[26] !== t14) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto mb-10 flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between",
                children: [
                    t12,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 133,
                columnNumber: 12
            }, this);
            $[25] = t12;
            $[26] = t14;
            $[27] = t9;
        } else {
            t9 = $[27];
        }
        t3 = "mx-auto max-w-6xl px-4 sm:px-6";
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-col justify-between gap-4 sm:mb-14 md:flex-row md:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium uppercase tracking-[0.3em] text-blue-500 sm:text-sm",
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/src/features/components/Projects.tsx",
                                lineNumber: 142,
                                columnNumber: 110
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-2 text-2xl font-bold text-white sm:mt-3 sm:text-4xl",
                                children: "Featured Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/features/components/Projects.tsx",
                                lineNumber: 142,
                                columnNumber: 210
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 142,
                        columnNumber: 105
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-md text-xs leading-6 text-gray-500 sm:text-sm sm:leading-7",
                        children: "A selection of projects I've designed and developed using modern web technologies."
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 142,
                        columnNumber: 309
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 142,
                columnNumber: 12
            }, this);
            $[28] = t4;
        } else {
            t4 = $[28];
        }
        if ($[29] !== loading) {
            t5 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
                children: [
                    1,
                    2,
                    3
                ].map(_ProjectsAnonymous)
            }, void 0, false, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 148,
                columnNumber: 23
            }, this);
            $[29] = loading;
            $[30] = t5;
        } else {
            t5 = $[30];
        }
        t6 = !loading && filteredProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
            children: filteredProjects.map(_ProjectsFilteredProjectsMap)
        }, void 0, false, {
            fileName: "[project]/src/features/components/Projects.tsx",
            lineNumber: 154,
            columnNumber: 53
        }, this);
        $[4] = filter;
        $[5] = loading;
        $[6] = projectData;
        $[7] = search;
        $[8] = filteredProjects;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        filteredProjects = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        t6 = $[12];
        t7 = $[13];
        t8 = $[14];
        t9 = $[15];
    }
    let t10;
    if ($[31] !== filteredProjects || $[32] !== loading) {
        t10 = !loading && filteredProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold text-white",
                    children: "Project tidak ditemukan"
                }, void 0, false, {
                    fileName: "[project]/src/features/components/Projects.tsx",
                    lineNumber: 179,
                    columnNumber: 147
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-gray-500",
                    children: "Coba gunakan kata kunci atau filter yang berbeda."
                }, void 0, false, {
                    fileName: "[project]/src/features/components/Projects.tsx",
                    lineNumber: 179,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "Projects[<button>.onClick]": ()=>{
                            setSearch("");
                            setFilter("all");
                        }
                    }["Projects[<button>.onClick]"],
                    className: "mt-5 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500",
                    children: "Reset Filter"
                }, void 0, false, {
                    fileName: "[project]/src/features/components/Projects.tsx",
                    lineNumber: 179,
                    columnNumber: 317
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/components/Projects.tsx",
            lineNumber: 179,
            columnNumber: 56
        }, this);
        $[31] = filteredProjects;
        $[32] = loading;
        $[33] = t10;
    } else {
        t10 = $[33];
    }
    let t11;
    if ($[34] !== t10 || $[35] !== t3 || $[36] !== t4 || $[37] !== t5 || $[38] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/components/Projects.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[34] = t10;
        $[35] = t3;
        $[36] = t4;
        $[37] = t5;
        $[38] = t6;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    let t12;
    if ($[40] !== t11 || $[41] !== t7 || $[42] !== t8 || $[43] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t7,
            className: t8,
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/components/Projects.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[40] = t11;
        $[41] = t7;
        $[42] = t8;
        $[43] = t9;
        $[44] = t12;
    } else {
        t12 = $[44];
    }
    return t12;
}
_s(Projects, "vjw80Cp4n06gXwSg59cSPLi02iQ=");
_c = Projects;
function _ProjectsFilteredProjectsMap(project_1, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/projects/${project_1.id}`,
        className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080b11] transition duration-300 hover:-translate-y-2 hover:border-blue-500/30",
        style: {
            animation: `float 4s ease-in-out ${index * 0.2}s infinite`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-video overflow-hidden bg-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: project_1.image,
                        alt: project_1.title,
                        className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 219,
                        columnNumber: 73
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-blue-500/0 transition duration-300 group-hover:bg-blue-500/5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 219,
                        columnNumber: 209
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 219,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-5 lg:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-semibold text-white sm:text-lg lg:text-xl",
                        children: project_1.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 219,
                        columnNumber: 350
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 min-h-[60px] text-xs leading-5 text-gray-500 sm:mt-3 sm:min-h-[72px] sm:text-sm sm:leading-6",
                        children: project_1.description
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 219,
                        columnNumber: 445
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2",
                        children: project_1.technologies.map(_ProjectsFilteredProjectsMapProject_1TechnologiesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 219,
                        columnNumber: 585
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between border-t border-white/5 pt-4 sm:mt-6 sm:pt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600",
                                children: "View project"
                            }, void 0, false, {
                                fileName: "[project]/src/features/components/Projects.tsx",
                                lineNumber: 219,
                                columnNumber: 836
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-blue-400 transition-transform duration-300 group-hover:translate-x-1",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/features/components/Projects.tsx",
                                lineNumber: 219,
                                columnNumber: 895
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 219,
                        columnNumber: 735
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 219,
                columnNumber: 315
            }, this)
        ]
    }, project_1.id, true, {
        fileName: "[project]/src/features/components/Projects.tsx",
        lineNumber: 217,
        columnNumber: 10
    }, this);
}
function _ProjectsFilteredProjectsMapProject_1TechnologiesMap(tech_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md bg-white/5 px-2 py-1 text-[10px] text-gray-400 sm:px-2.5 sm:py-1.5 sm:text-xs",
        children: tech_1
    }, tech_1, false, {
        fileName: "[project]/src/features/components/Projects.tsx",
        lineNumber: 222,
        columnNumber: 10
    }, this);
}
function _ProjectsAnonymous(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-white/10 bg-[#080b11]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-video animate-pulse bg-white/5"
            }, void 0, false, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 225,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-5 w-2/3 animate-pulse rounded bg-white/5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 225,
                        columnNumber: 192
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-full animate-pulse rounded bg-white/5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 225,
                        columnNumber: 254
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-5/6 animate-pulse rounded bg-white/5"
                    }, void 0, false, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 225,
                        columnNumber: 317
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-16 animate-pulse rounded bg-white/5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/components/Projects.tsx",
                                lineNumber: 225,
                                columnNumber: 412
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-20 animate-pulse rounded bg-white/5"
                            }, void 0, false, {
                                fileName: "[project]/src/features/components/Projects.tsx",
                                lineNumber: 225,
                                columnNumber: 473
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/components/Projects.tsx",
                        lineNumber: 225,
                        columnNumber: 379
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/components/Projects.tsx",
                lineNumber: 225,
                columnNumber: 161
            }, this)
        ]
    }, item_0, true, {
        fileName: "[project]/src/features/components/Projects.tsx",
        lineNumber: 225,
        columnNumber: 10
    }, this);
}
function _ProjectsUseEffectGetProjectsAnonymous(project) {
    return {
        ...project,
        technologies: typeof project.technologies === "string" ? project.technologies.split(",").map(_ProjectsUseEffectGetProjectsAnonymousAnonymous).filter(Boolean) : []
    };
}
function _ProjectsUseEffectGetProjectsAnonymousAnonymous(tech) {
    return tech.trim();
}
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://tmrrlijofsutnvtmatsq.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcnJsaWpvZnN1dG52dG1hdHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3MjczNDEsImV4cCI6MjEwNTMwMzM0MX0.azQVnourqjdC-v9V_P0j_QD1PB8JbhzdddiR392EmeQ");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_21b-3pb._.js.map