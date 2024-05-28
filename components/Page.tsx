import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";
import clsx from "clsx";

const Page: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const printerFriendly = usePrinterFriendly();
  return (
    <div className="flex justify-center">
      <div
        className={clsx(
          "relative h-A4 w-A4 overflow-hidden border border-gray-300 font-sans",
          !printerFriendly && "shadow-lg",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
