import React, { useEffect } from "react";
import { motion, transform, useScroll } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollX, scrollYProgress } = useScroll();

  useEffect(() => {
    console.log({ scrollYProgress });
  }, [scrollYProgress]);
  return (
    <div>
      <motion.div
        style={{
          height: "50px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "orange",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      ></motion.div>
      <div style={{ padding: "0 2rem" }}>
        <p style={{ padding: "50rem  0 0 0" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nemo,
          rerum reiciendis doloremque, quod unde laboriosam quae repellendus
          ullam esse eum at, error beatae. Est id vel asperiores iste accusamus!
          Quia aut soluta, provident qui inventore illum ab dolores, porro et
          corrupti accusamus at molestiae consequuntur, labore ex praesentium
          tenetur nihil ullam. Sapiente aut molestias iure ipsa nobis.
          Recusandae, nobis. Minus dicta aut iure, facere facilis velit a illum?
          Quisquam eaque laborum accusantium, nemo, eos itaque fuga at vero,
          esse dignissimos veritatis adipisci error cupiditate voluptatem
          provident dolor soluta. Eos. Dicta iure asperiores ad? A ipsum neque
          atque. Iure placeat possimus cumque odio error molestiae magni soluta
          atque, doloremque at exercitationem eum temporibus pariatur eligendi
          deleniti corrupti quod dignissimos quaerat! Libero soluta laboriosam
          incidunt atque natus sapiente doloribus cum necessitatibus cumque?
          Numquam veritatis exercitationem adipisci, quisquam incidunt nisi
          ipsum ducimus expedita rem error consequatur dolor et, qui molestiae,
          vitae nulla.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ScrollAnimation;
