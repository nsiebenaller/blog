import React from "react";

const SkillChip: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs text-gray-900`}>
      {skill}
    </span>
  );
};

export default SkillChip;
