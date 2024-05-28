import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const EducationContent = () => {
  const printerFriendly = usePrinterFriendly();
  return (
    <section>
      <h1 className="mb-2 text-2xl font-light">Education</h1>
      <div
        className={`
					grid grid-cols-[max-content_1fr] gap-x-2 rounded bg-white p-4
					${printerFriendly ? "border border-gray-300" : "shadow-md"}
				`}
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-sm">Savannah College of Art & Design</h3>
          <p className="text-xs font-light">B.A. Interactive Design</p>
        </div>
      </div>
    </section>
  );
};

export default EducationContent;
