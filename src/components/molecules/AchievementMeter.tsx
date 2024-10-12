import { Progress } from "@nextui-org/react";
import React from "react";

export default function AchievementMeter({ achievement }: { achievement: number }) {
  return (
    <>
      <p>{`이번 주 달성률 ${achievement} / 20`}</p>
      <Progress size="lg" aria-label="Loading..." value={achievement * 5} />
    </>
  );
}
