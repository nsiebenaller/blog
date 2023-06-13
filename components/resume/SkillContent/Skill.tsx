import React from "react";
import SkillChip from "./SkillChip";

const Skill: React.FC<{
	name: string;
	skills: string[];
	printerFriendly: boolean;
}> = ({ name, skills, printerFriendly }) => {
	return (
		<div>
			<h3 className="text-lg font-light">{name}</h3>
			<div className="flex flex-wrap ">
				{skills.map((skill) => (
					<SkillChip
						key={skill}
						skill={skill}
						printerFriendly={printerFriendly}
					/>
				))}
			</div>
		</div>
	);
};

export default Skill;
