import React from "react";
import Headers from "../../components/organisms/Headers";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headers />
      <>{children}</>
    </>
  );
}
