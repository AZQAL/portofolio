(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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

//# sourceMappingURL=src_1any8pi._.js.map