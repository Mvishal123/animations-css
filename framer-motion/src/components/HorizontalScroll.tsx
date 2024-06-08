import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const HorizontalScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const slideX = useTransform(scrollYProgress, [0, 1], ["1%", "-99%"]);

  return (
    <div>
      <div className="h-[40vh] grid place-content-center text-2xl bg-slate-800 text-white">
        Scroll down
      </div>
      <div className="h-[300vh] bg-black" ref={ref}>
        <div className="h-screen bg-pink-200 sticky top-0 grid place-content-center overflow-hidden">
          <motion.div
            className="flex items-center gap-2  "
            style={{ x: slideX }}
          >
            {cards.map((card) => (
              <img
                src={card.url}
                alt={card.title}
                className="h-[400px] w-[400px]"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-[40vh] grid place-content-center text-2xl bg-slate-800 text-white">
        Scroll up
      </div>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn-FVysfAfd3C8feWzDPzlVAzhFHmzjeVM4qeVGY-zytv5RvUqQ4Va7vE7w-2pfkQUcY&usqp=CAU",
    title: "Title 7",
    id: 7,
  },
];
