import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const Content: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const printerFriendly = usePrinterFriendly();
	return (
		<section
			className={`
				relative z-0 w-full h-full grid grid-cols-2 auto-rows-min 
				py-4 px-8 gap-4 ${printerFriendly ? "white" : "bg-gray-200"}
			`}
		>
			{children}
		</section>
	);
};

export default Content;
