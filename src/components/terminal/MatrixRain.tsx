import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  active: boolean;
  onClose: () => void;
}

export function MatrixRain({ active, onClose }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    function draw() {
      ctx!.fillStyle = 'rgba(26, 26, 46, 0.05)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.fillStyle = '#0f0';
      ctx!.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx!.fillStyle = Math.random() > 0.98 ? '#fff' : `hsl(120, ${60 + Math.random() * 40}%, ${40 + Math.random() * 30}%)`;
        ctx!.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animFrameRef.current = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKey);
    };
  }, [active, onClose]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 cursor-pointer" onClick={onClose}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-green text-sm font-mono animate-pulse">
        Press ESC or click to exit the matrix
      </div>
    </div>
  );
}
