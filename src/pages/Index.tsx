import { useState } from "react";
import { Heart } from "lucide-react";

const noTexts = [
  "No",
  "No by mistake ik, but I give u another chance 😏😏",
  "               Hmm... are you sure? Last chance! 😏😏",
];

const yesScales = [1, 1.4, 1.8, 2.2];

const Index = () => {
  const [stage, setStage] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const handleNo = () => {
    if (stage < 3) setStage(stage + 1);
  };

  if (accepted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 overflow-hidden">
        <div className="relative">
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary opacity-60"
              style={{
                top: `${Math.random() * 300 - 150}px`,
                left: `${Math.random() * 300 - 150}px`,
                animationDelay: `${i * 0.2}s`,
                width: `${20 + Math.random() * 30}px`,
              }}
              fill="currentColor"
            />
          ))}
          <Heart
            className="animate-heartbeat text-primary"
            size={120}
            fill="currentColor"
          />
        </div>
        <h1 className="mt-8 text-5xl font-black text-foreground md:text-7xl">
          Yaaay! 🎉
        </h1>
        <p className="mt-4 text-xl text-muted-foreground font-semibold">
          I knew you'd say yes! 💕
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <Heart
        className="animate-float text-primary mb-6"
        size={80}
        fill="currentColor"
      />
      <h1 className="text-4xl font-black text-foreground md:text-6xl text-center">
        Will you be my Valentine?
      </h1>
      <p className="mt-3 text-lg text-muted-foreground font-semibold">
        🥹🥹🥹
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => setAccepted(true)}
          className="rounded-xl bg-primary text-primary-foreground font-bold shadow-lg hover:brightness-110 transition-all duration-300"
          style={{
            transform: `scale(${yesScales[stage]})`,
            padding: `${12 + stage * 4}px ${32 + stage * 8}px`,
            fontSize: `${16 + stage * 4}px`,
          }}
        >
          Yes 💖
        </button>

        {stage < 3 && (
          <button
            onClick={handleNo}
            className="rounded-xl bg-secondary text-secondary-foreground font-semibold px-6 py-3 hover:bg-muted transition-colors text-sm"
          >
            {noTexts[stage]}
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
