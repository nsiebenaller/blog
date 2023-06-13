import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const Header = () => {
	const printerFriendly = usePrinterFriendly();
	return (
		<header
			className={`
				relative z-10 grid grid-flow-col 
				w-full bg-white p-10 
				${printerFriendly ? "border-b border-b-gray-300" : "shadow-md"}
			`}
		>
			{!printerFriendly && (
				<div className="triangle">
					<div className="triangle-border">
						<div className="triangle-line" />
					</div>
				</div>
			)}
			<section>
				<h2 className="font-extralight">
					<span
						className={`
							font-normal ${printerFriendly ? "font-semibold" : "text-blue-500"}`}
					>{`Hello, `}</span>
					{`I'm Nicholas Siebenaller`}
				</h2>
				<h1 className="text-4xl uppercase">{`Full Stack Developer`}</h1>
				<h3 className="font-extralight">{`Creative Problem-Solving Software Engineer`}</h3>
			</section>
			<section className="grid justify-between font-extralight">
				<div className="grid grid-cols-[max-content_1fr] gap-2 items-center">
					<span className="material-icons-outlined text-sm">call</span>
					{`(262) 391 - 2072`}
				</div>
				<div className="grid grid-cols-[max-content_1fr] gap-2 items-center">
					<span className="material-icons-outlined text-sm">email</span>
					{`nicholaspaulsiebenaller@gmail.com`}
				</div>
				<div className="grid grid-cols-[max-content_1fr] gap-2 items-center">
					<span className="material-icons-outlined text-sm">person</span>
					<a href="https://linkedin.com/in/nsiebenaller">{`linkedin.com/in/nsiebenaller`}</a>
				</div>
			</section>
		</header>
	);
};

export default Header;
