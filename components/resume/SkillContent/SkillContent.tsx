import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";
import Skills from "./Skills";

const SkillContent = () => {
  const printerFriendly = usePrinterFriendly();
  return (
    <section>
      <h1 className="mb-2 text-2xl font-light">Skills</h1>
      <div
        className={`space-y-2 rounded bg-white p-4 
					${printerFriendly ? "border border-gray-300" : "shadow-md"}
				`}
      >
        <Skills
          skills={[
            "Typescript",
            "React",
            "Rust",
            "Go",
            "Java",
            "Python",
            "PostgreSQL",
            "Oracle",
            "AWS",
            "GCP",
            "Project Management",
          ]}
        />
      </div>
    </section>
  );
};

export default SkillContent;
