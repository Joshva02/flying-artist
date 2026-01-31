import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* ---- Multi-layer atmospheric background ---- */}
      <div className="absolute inset-0">
        {/* Base deep sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #060a14 0%, #0a0e1a 15%, #0f1628 35%, #1a2242 55%, #1a3a5c 70%, #2a4a6a 80%, #c17825 92%, #d4a03c 100%)",
          }}
        />
        {/* Radial indigo atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% 30%, rgba(26,34,66,0.8) 0%, transparent 60%)",
          }}
        />
        {/* Warm horizon glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 40% at 50% 95%, rgba(193,120,37,0.35) 0%, transparent 55%)",
          }}
        />
        {/* Gold light bloom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 25% at 60% 85%, rgba(212,160,60,0.2) 0%, transparent 50%)",
          }}
        />
        {/* Teal atmospheric haze */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 30% at 30% 70%, rgba(26,107,106,0.3) 0%, transparent 50%)",
          }}
        />
        {/* Star field - tiny dots */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(1px 1px at 20% 15%, rgba(255,255,255,0.7) 0%, transparent 100%),
              radial-gradient(1px 1px at 45% 8%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
              radial-gradient(1px 1px at 85% 12%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 10% 25%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 55% 5%, rgba(255,255,255,0.8) 0%, transparent 100%),
              radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 92% 28%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 60% 18%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 78% 6%, rgba(255,255,255,0.6) 0%, transparent 100%),
              radial-gradient(1px 1px at 15% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 38% 22%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 52% 35%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1px 1px at 88% 18%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 5% 5%, rgba(255,255,255,0.6) 0%, transparent 100%)
            `,
          }}
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(10,14,26,0.5) 100%)",
          }}
        />
        {/* Real artwork texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image
            src="/images/hero/hero-bg.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ---- Drifting cloud shapes (CSS animations) ---- */}
      <div
        className="pointer-events-none absolute top-[20%] left-[10%] h-48 w-80 rounded-full opacity-[0.07] animate-cloud-drift-1"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[35%] right-[5%] h-32 w-64 rounded-full opacity-[0.05] animate-cloud-drift-2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,160,60,0.6) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[55%] left-[30%] h-40 w-72 rounded-full opacity-[0.06] animate-cloud-drift-3"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(42,157,143,0.5) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
    </>
  );
}
