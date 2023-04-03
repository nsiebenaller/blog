import React from "react";

type Props = {
	children?: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<header className="h-10 border-b border-slate-300">
				<input
					className="w-full h-full outline-none"
					type="text"
					placeholder="Search blog..."
				/>
			</header>
			<aside></aside>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
