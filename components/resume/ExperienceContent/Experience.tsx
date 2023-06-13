import React from "react";

const Experience: React.FC<{
	name: string;
	employer: string;
	from: string;
	to: string;
	details: string[];
	printerFriendly: boolean;
}> = ({ name, employer, from, to, details, printerFriendly }) => {
	return (
		<div
			className={`
				bg-white rounded p-4 space-y-2
				${printerFriendly ? "border border-gray-300" : "shadow-md"}
			`}
		>
			<div className="flex justify-between">
				<h3 className="font-medium">{name}</h3>
				<p className="text-right font-light text-xs text-gray-500">
					{from} - {to}
				</p>
			</div>
			{!printerFriendly && <div className="h-1 rounded-full bg-blue-500 w-4" />}
			<h4 className="text-sm font-light">{employer}</h4>
			<ul className="list-disc ml-6 space-y-1">
				{details.map((detail) => (
					<li key={detail} className="text-xs text-gray-500">
						{detail}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Experience;
