import React from "react";
import Experience from "./Experience";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

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
            "Streamline continuous integration pipeline to increase speed and reliability of deployments",
            "Plan and develop geospatial ETL pipelines using pub/sub and remote sensing",
          ]}
          printerFriendly={printerFriendly}
        />
        <Experience
          name="Frontend Web Developer"
          employer="Telnyx"
          from="Jan 2021"
          to="Sep 2022"
          details={[
            "Collaborated with the Telnyx marketing team and other engineers on continually improving the brand's web presence (SEO, AdWords)",
            "Facilitated the successful launches of marketing and product sites",
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
      </div>
    </section>
  );
};

export default ExperienceContent;
