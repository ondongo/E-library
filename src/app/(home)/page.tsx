"use client";
import React, { useCallback, useRef } from "react";

import { Button, Flex } from "@chakra-ui/react";

import "./style.css";
import ReactCanvasConfetti from "react-canvas-confetti";
import PrincipalView from "@/components/PrincipalView";
import SidebarLeft from "@/components/SideBarLeft";
import SideBarRight from "@/components/SideBarRight";

function Home() {
  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);
  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    if (refAnimationInstance.current != null) {
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  }, []);

  const loadFire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 258,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  const startAnimation = async () => {
    loadFire();
  };
  return (
    <Flex width="auto" height={"auto"} background={"#F5FBF2"}>
      <Flex width={"100%"}>
        <SidebarLeft />
        <PrincipalView />
        <SideBarRight />
      </Flex>
    </Flex>
  );
}

export default Home;
