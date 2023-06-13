import React from "react";
import Certification from "./Certification";
import awsLogo from "@/public/aws-certified-developer-associate.png";
import eagleScoutLogo from "@/public/eagle-scout.png";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const CertificationContent = () => {
	const printerFriendly = usePrinterFriendly();
	return (
		<section>
			<h1 className="text-2xl font-light mb-2">Certifications</h1>
			<div className="space-y-4">
				<Certification
					name="AWS Certified Developer - Associate"
					organization="Amazon Web Services"
					img={awsLogo}
					imgAlt="AWS Developer Associate Logo"
					printerFriendly={printerFriendly}
				/>
				<Certification
					name="Eagle Scout"
					organization="Boy Scouts of America"
					img={eagleScoutLogo}
					imgAlt="Eagle Scout Logo"
					printerFriendly={printerFriendly}
				/>
			</div>
		</section>
	);
};

export default CertificationContent;
