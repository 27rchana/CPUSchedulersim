import PixelBlast from "./components/PixelBlast";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* The animated background */}
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />

      {/* Your UI on top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          color: "white"
        }}
      >
        <h1>Hello PixelBlast</h1>
      </div>
    </div>
  );
}
