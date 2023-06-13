import React from "react";
import NextImage, { StaticImageData } from "next/image";

const Certification: React.FC<{
	name: string;
	organization: string;
	img: StaticImageData;
	imgAlt: string;
	printerFriendly: boolean;
}> = ({ name, organization, img, imgAlt, printerFriendly }) => {
	return (
		<div
			className={`
				bg-white rounded p-4 grid grid-cols-[max-content_1fr] gap-x-2
				${printerFriendly ? "border border-gray-300" : "shadow-md"}
			`}
		>
			<NextImage src={img} alt={imgAlt} width="48" height="48" />
			<div className="flex flex-col justify-center">
				<h3>{name}</h3>
				<p className="text-sm font-light">{organization}</p>
			</div>
		</div>
	);
};

export default Certification;
