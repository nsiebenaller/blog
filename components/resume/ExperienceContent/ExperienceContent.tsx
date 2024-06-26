import React from "react";
import Experience from "./Experience";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";
import ExperienceSlim from "./ExperienceSlim";

const ExperienceContent = () => {
  const printerFriendly = usePrinterFriendly();
  return (
    <section>
      <h1 className="mb-2 text-2xl font-light">Experience</h1>
      <div className="space-y-4">
        <Experience
          name="Engineering Lead"
          employer="Agrograph"
          from="Sep 2022"
          to="Present"
          details={[
            "Coordinate and manage several teams of developers and data scientists",
            "Architect, plan and execute strategic direction of Agrograph product suite",
            "Review code contributions from frontend, backend, and data science teams",
            "Plan and develop geospatial ETL pipelines using pub/sub and ML models",
          ]}
          printerFriendly={printerFriendly}
        />
        <Experience
          name="Frontend Web Developer"
          employer="Telnyx"
          from="Jan 2021"
          to="Sep 2022"
          details={[
            "Facilitated the successful launches of marketing and product sites",
            "Improved brand web presence through A/B tests and observability (SEO, AdWords)",
            "Created interactive web components, layouts, and landing pages with the latest web technologies (React, Next.js)",
            "Worked with a headless CMS to provide a flexible content management experience for the marketing team",
          ]}
          printerFriendly={printerFriendly}
        />
        <Experience
          name="Software Engineer"
          employer="General Dynamics Information Technology"
          from="Nov 2018"
          to="Mar 2021"
          details={[
            "Migrated 10-year-old medical grants web application to the AWS gov cloud",
            "Integrated React into existing system to improve performance, reusability, and user-experience",
            "Optimized accessibility and performance of application in several key areas, such as, page load, asset & JS compression, and content size",
            "Developed cohesive REST API platform to abide by speed and content guidelines",
          ]}
          printerFriendly={printerFriendly}
        />
        <ExperienceSlim
          name="Web Application Developer"
          employer="Hardin Design and Development"
          from="Sep 2017"
          to="Nov 2018"
          printerFriendly={printerFriendly}
        />
        <ExperienceSlim
          name="Software Consultant"
          employer="Self-Employed"
          from="Jun 2016"
          to="Sep 2017"
          printerFriendly={printerFriendly}
        />
      </div>
    </section>
  );
};

export default ExperienceContent;
