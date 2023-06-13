import React from "react";
import NextImage from "next/image";
import scadLogo from "@/public/scad.png";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const EducationContent = () => {
	const printerFriendly = usePrinterFriendly();
	return (
		<section>
			<h1 className="text-2xl font-light mb-2">Education</h1>
			<div
				className={`
					bg-white rounded p-4 grid grid-cols-[max-content_1fr] gap-x-2
					${printerFriendly ? "border border-gray-300" : "shadow-md"}
				`}
			>
				<NextImage src={scadLogo} alt={"SCAD"} width="48" />
				<div className="flex flex-col justify-center">
					<h3>Savannah College of Art & Design</h3>
					<p className="text-sm font-light">B.A. Interactive Design</p>
				</div>
			</div>
		</section>
	);
};

export default EducationContent;
