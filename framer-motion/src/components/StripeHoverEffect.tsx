import React, { MouseEvent } from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";
import { motion, useAnimate } from "framer-motion";

const StripeHoverEffect = () => {
  return (
    <div className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={SiShopify} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiApple} href="#" />
        <LinkBox Icon={SiSoundcloud} href="#" />
        <LinkBox Icon={SiAdobe} href="#" />
        <LinkBox Icon={SiFacebook} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiTiktok} href="#" />
        <LinkBox Icon={SiSpotify} href="#" />
        <LinkBox Icon={SiLinkedin} href="#" />
      </div>
    </div>
  );
};

// Clip paths
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const BOTTOM_LEFT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)";

// Entry animations
const entryAnimations = {
  top: [TOP_LEFT_CLIP, NO_CLIP],
  right: [TOP_RIGHT_CLIP, NO_CLIP],
  bottom: [TOP_LEFT_CLIP, NO_CLIP],
  left: [TOP_LEFT_CLIP, NO_CLIP],
};

// Exit animations
const exitAnimations = {
  top: [NO_CLIP, BOTTOM_LEFT_CLIP],
  right: [NO_CLIP, BOTTOM_RIGHT_CLIP],
  bottom: [NO_CLIP, BOTTOM_LEFT_CLIP],
  left: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: any) => {
  const [scope, animate] = useAnimate();

  const onMouseEnterHandler = (e: MouseEvent) => {
    const side = getSide(e);
    animate(scope.current, {
      clipPath: entryAnimations[side as keyof typeof entryAnimations],
    });
  };

  const onMouseLeaveHandler = (e: MouseEvent) => {
    const side = getSide(e);
    animate(scope.current, {
      clipPath: exitAnimations[side as keyof typeof exitAnimations],
    });
  };

  const getSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximities = [
      proximityLeft,
      proximityRight,
      proximityTop,
      proximityBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximities[0].side;
  };

  return (
    <a
      onMouseEnter={(e) => onMouseEnterHandler(e)}
      onMouseLeave={(e) => onMouseLeaveHandler(e)}
      href={href}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-black" />
      <div
        ref={scope}
        className="absolute inset-0 grid place-content-center bg-neutral-900"
        style={{
          clipPath: TOP_LEFT_CLIP,
        }}
      >
        <Icon className="text-xl sm:text-3xl lg:text-4xl text-white" />
      </div>
    </a>
  );
};

export default StripeHoverEffect;
