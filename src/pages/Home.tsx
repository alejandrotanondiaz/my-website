import Waves from '../components/components/Waves.js';

const Home: React.FC = () => {
  return (
  
    <section className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* Waves background */}
      <Waves
        className="absolute top-0 left-0 w-full h-full z-0"
        lineColor="rgba(52, 157, 108, 1)"
        backgroundColor= "#fff"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* Text overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-grey">
          Hi, I’m Alejandro
        </h1>
        <p className="text-xl md:text-xl text-gray max-w-xl">
          Welcome to my website!
        </p>
      </div>
    </section>
  );
};

export default Home;