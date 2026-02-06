import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import Authentication from "./Authentication";

const Hero = () => {
  return (
    <div className="max-w-4xl px-10 py-24 flex flex-col items-center justify-center mx-auto">
      <h2 className="text-6xl font-bold text-center">
        VidNova - AI Short Video Generator
      </h2>
      <p className="text-2xl text-center mt-5 text-muted-foreground">
        Transform your ideas into engaging, scroll-stopping videos in seconds.
        Create, customize, and publish high-impact content effortlessly—no
        editing skills required.
      </p>

      <div className="mt-8 flex gap-3">
        <Button size={"lg"} variant={"secondary"} className="text-base">
          Explore
        </Button>
        <Authentication>
          <Button
            size={"lg"}
            className="text-base flex justify-between items-center"
          >
            <span>Get Started</span>
            <FaArrowRight />
          </Button>
        </Authentication>
      </div>
    </div>
  );
};

export default Hero;
