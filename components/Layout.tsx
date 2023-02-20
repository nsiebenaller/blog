import React from "react";

type Props = {
	children?: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<h1>my blog</h1>
			{children}
		</div>
	);
};

export default Layout;
