import { Button } from "@heroui/react";
import React from "react";

const HeroPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">
        Welcome to the Hero Page
      </h1>
      <Button className="mx-auto mt-4" variant="secondary">
        Click Me
      </Button>
    </div>
  );
};

export default HeroPage;
