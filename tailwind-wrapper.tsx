import { Tailwind } from "@react-email/components";
import React from "react";

export default function TailwindWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            color: {
              blue: "#0052bd",
              accent: "#031d401a",
              gray: "#031d4080",
            },
          },
        },
      }}
    >
      {children}
    </Tailwind>
  );
}
