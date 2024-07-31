import React from "react";

export function BackgroundGradientAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="background-animation">{children}</div>;
}
