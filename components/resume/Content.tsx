import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const Content: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const printerFriendly = usePrinterFriendly();
  return (
    <section
      className={`
				relative z-0 grid h-full w-full auto-rows-min grid-cols-2 
				gap-4 px-8 py-4 ${printerFriendly ? "white" : "bg-gray-200"}
			`}
    >
      {children}
    </section>
  );
};

export default Content;
