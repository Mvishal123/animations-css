import { useEffect, useRef } from "react";

const HoverButtonAnimation = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = (
        e.target as HTMLElement
      ).getBoundingClientRect();
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;

      const x = `${(offsetX / width) * 100}%`;
      const y = `${(offsetY / height) * 100}%`;

      spanRef.current?.animate(
        { left: x },
        { duration: 250, fill: "forwards" }
      );
    };
    const handleMouseLeave = (e: MouseEvent) => {
      spanRef.current?.animate(
        { left: "50%" },
        { duration: 250, fill: "forwards" }
      );
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950">
      <button
        className="w-full max-w-xs bg-slate-800 py-4 px-3 rounded-lg text-lg text-white font-medium overflow-hidden relative"
        ref={btnRef}
      >
        <span className="pointer-events-none mix-blend-difference relative z-[100]">
          Hover me
        </span>
        <span
          ref={spanRef}
          className="absolute bg-white h-32 w-32 top-1/2 left-1/2 rounded-full -translate-y-1/2 -translate-x-1/2 overflow-hidden pointer-events-none"
        ></span>
      </button>
    </div>
  );
};

export default HoverButtonAnimation;
