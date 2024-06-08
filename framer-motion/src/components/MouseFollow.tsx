import React, { useEffect, useRef, useState } from "react";

const MouseFollow = () => {
  const [mouseMoved, setMouseMoved] = useState(false);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef2 = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleCursorMove = (e: MouseEvent) => {
      if (!mouseMoved) setMouseMoved(true);
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      console.log({ x, y });

      cursorRef.current?.animate(
        { top: y, left: x },
        { duration: 100, fill: "forwards" }
      );
      cursorRef2.current?.animate(
        { top: y, left: x },
        { duration: 350, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleCursorMove);

    return () => {
      window.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  return (
    <div className="h-[300vh] bg-slate-900 relative">
      {mouseMoved && (
        <>
          <span
            ref={cursorRef}
            className="h-16 w-16 bg-transparent z-[100] fixed left-0 top-0 rounded-full border-2 border-white  "
          ></span>
          <span
            ref={cursorRef2}
            className="h-6 w-6 bg-white z-[100] fixed left-0 top-0 rounded-full  translate-x-3/4 translate-y-3/4"
          ></span>
        </>
      )}
    </div>
  );
};

export default MouseFollow;
