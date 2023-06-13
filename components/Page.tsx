import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const Page: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	const printerFriendly = usePrinterFriendly();
	return (
		<div
			className={`relative font-sans 
				${printerFriendly ? "w-A4 h-A4 overflow-hidden" : ""}
			`}
		>
			{children}
		</div>
	);
};

export default Page;
