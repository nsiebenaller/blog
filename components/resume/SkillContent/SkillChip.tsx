import React from "react";

const SkillChip: React.FC<{ skill: string; printerFriendly: boolean }> = ({
	skill,
	printerFriendly,
}) => {
	return (
		<span
			className={`
				${printerFriendly ? "border border-gray-300" : "bg-gray-200"}
				text-gray-600 rounded-full px-2 py-0.5 text-xs m-1
			`}
		>
			{skill}
		</span>
	);
};

export default SkillChip;
