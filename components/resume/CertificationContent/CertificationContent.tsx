import React from "react";
import Certification from "./Certification";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const CertificationContent = () => {
  const printerFriendly = usePrinterFriendly();
  return (
    <section>
      <h1 className="mb-2 text-2xl font-light">Certifications</h1>
      <div
        className={`flex flex-col gap-2 rounded bg-white p-4 ${printerFriendly ? "border border-gray-300" : "shadow-md"}`}
      >
        <Certification
          name="AWS Certified Developer - Associate"
          organization="Amazon Web Services"
        />
        <Certification
          name="Eagle Scout"
          organization="Boy Scouts of America"
        />
      </div>
    </section>
  );
};

export default CertificationContent;
