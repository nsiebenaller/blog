import React from "react";
import Skill from "./Skill";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const SkillContent = () => {
	const printerFriendly = usePrinterFriendly();
	return (
		<section>
			<h1 className="text-2xl font-light mb-2">Skills</h1>
			<div
				className={`bg-white rounded p-4 space-y-2 
					${printerFriendly ? "border border-gray-300" : "shadow-md"}
				`}
			>
				<Skill
					name="Typescript"
					skills={["Next", "React", "Express", "Fastify", "Prisma"]}
					printerFriendly={printerFriendly}
				/>
				<Skill
					name="Rust"
					skills={["Actix", "sqlx"]}
					printerFriendly={printerFriendly}
				/>
				<Skill
					name="Java"
					skills={["Spring", "Maven"]}
					printerFriendly={printerFriendly}
				/>
				<Skill
					name="Golang"
					skills={["Gin", "gorm"]}
					printerFriendly={printerFriendly}
				/>
				<Skill
					name="Python"
					skills={["GDAL", "pandas"]}
					printerFriendly={printerFriendly}
				/>
				<Skill
					name="Databases"
					skills={["PostgreSQL", "Oracle"]}
					printerFriendly={printerFriendly}
				/>
				<Skill
					name="Cloud"
					skills={["AWS", "GCP"]}
					printerFriendly={printerFriendly}
				/>
			</div>
		</section>
	);
};

export default SkillContent;
