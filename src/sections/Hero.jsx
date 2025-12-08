import { mySocials } from "../constants";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      {/* Social Icons under Web Solutions */}
<div className="absolute left-[10%] top-[62%] flex gap-4 z-40 animate-social-in">
  {mySocials.map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-12 w-12 items-center justify-center 
                 rounded-full bg-white/10 backdrop-blur-md border border-white/20
                 transition-all duration-300 hover:-translate-y-1 
                 hover:bg-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]"
    >
      <img
        src={social.icon}
        alt={social.name}
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-125"
      />
    </a>
  ))}
</div>

      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
