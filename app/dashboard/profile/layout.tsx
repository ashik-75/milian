import React from "react";

export const metadata = {
  title: "Ashik's Profile",
};

function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default layout;
