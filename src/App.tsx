import { Grip, HouseIcon, User } from "lucide-react";
import "./App.css";
import { Button } from "./components/button";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, IOptions, RecursivePartial } from "@tsparticles/engine";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container: Container | undefined
  ): Promise<void> => {
    await console.log(container);
  };

  const options: RecursivePartial<IOptions> = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none", // Update the type here
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return (
    <div className="flex gap-3">
      <div className="w-[80vw] h-[90vh] rounded-lg bg-red-600">MainPage</div>
      <div className="w-[4vw] h-[95vh] absolute top-[50%] right-[10%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 rounded-lg bg-blue-700">
        <Button>
          <HouseIcon size={36} />
        </Button>
        <Button>
          <Grip size={36} />
        </Button>
        <Button>
          <User size={36} />
        </Button>
      </div>
    </div>
  );
}

export default App;
