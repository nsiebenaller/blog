import React from "react";
import SkillChip from "./SkillChip";

const Skills: React.FC<{
  skills: string[];
}> = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill) => (
        <SkillChip key={skill} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
