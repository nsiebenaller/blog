import React from "react";

const SkillChip: React.FC<{ skill: string; printerFriendly: boolean }> = ({
  skill,
  printerFriendly,
}) => {
  return (
    <span
      className={`
				${printerFriendly ? "border border-gray-300" : "bg-gray-200"}
				m-1 rounded-full px-2 py-0.5 text-xs text-gray-600
			`}
    >
      {skill}
    </span>
  );
};

export default SkillChip;
