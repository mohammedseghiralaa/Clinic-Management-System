import React from "react";
import Logo from "./Logo";
import Title from "./Title";

export default function Header() {
  return (
    <div className="shrink-0 flex items-center gap-3 group cursor-pointer">
      <Logo />
      <Title />
    </div>
  );
}
