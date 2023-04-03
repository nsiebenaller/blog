import React from "react";

type Props = {
	children?: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<h1>my blog</h1>
			<div className="h-100px text-blue-50">content</div>
			{children}
		</div>
	);
};

export default Layout;
