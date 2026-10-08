import { ImageResponse } from "next/og";

export const alt = "Azqal — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#05070b",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background glow kiri atas */}
        <div
          style={{
            position: "absolute",
            width: 550,
            height: 550,
            left: -180,
            top: -250,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%)",
          }}
        />

        {/* Background glow kanan */}
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            right: -220,
            bottom: -300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.42) 0%, rgba(99,102,241,0) 70%)",
          }}
        />

        {/* Glow cyan */}
        <div
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            left: 430,
            bottom: -180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0) 70%)",
          }}
        />

        {/* Grid / garis dekorasi */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "55px 70px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              {/* Logo */}
              <div
                style={{
                  width: 42,
                  height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, #2563eb, #6366f1)",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                A
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: 4,
                  color: "#cbd5e1",
                }}
              >
                PORTFOLIO
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 17,
                letterSpacing: 3,
                color: "#64748b",
              }}
            >
              CODE • DESIGN • BUILD
            </div>
          </div>

          {/* Hero */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 75,
              width: 720,
            }}
          >
            {/* Small badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 17,
                color: "#93c5fd",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />

              Available for opportunities
            </div>

            {/* Name */}
            <div
              style={{
                display: "flex",
                fontSize: 82,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: -3,
                background:
                  "linear-gradient(90deg, #ffffff 0%, #dbeafe 45%, #818cf8 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AZQAL
            </div>

            {/* Role */}
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 39,
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, #60a5fa, #818cf8, #c084fc)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Full Stack Developer
            </div>

            {/* Description */}
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 22,
                lineHeight: 1.5,
                color: "#94a3b8",
                maxWidth: 650,
              }}
            >
              Building modern web applications that are efficient,
              scalable, and user-friendly.
            </div>
          </div>

          {/* Technology badges */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 42,
            }}
          >
            {["Next.js", "TypeScript", "Tailwind CSS", "Supabase"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "9px 17px",
                    borderRadius: 999,
                    border: "1px solid rgba(96,165,250,0.25)",
                    background: "rgba(15,23,42,0.7)",
                    color: "#cbd5e1",
                    fontSize: 16,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Bottom decoration */}
          <div
            style={{
              position: "absolute",
              left: 70,
              bottom: 42,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 90,
                height: 2,
                background:
                  "linear-gradient(90deg, #2563eb, transparent)",
              }}
            />

            <div
              style={{
                display: "flex",
                fontSize: 14,
                color: "#475569",
                letterSpacing: 2,
              }}
            >
              PORTFOLIO • 2026
            </div>
          </div>

          {/* Decorative code brackets */}
          <div
            style={{
              position: "absolute",
              right: 75,
              bottom: 45,
              display: "flex",
              fontSize: 72,
              fontWeight: 200,
              color: "rgba(96,165,250,0.15)",
            }}
          >
            {"</>"}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}