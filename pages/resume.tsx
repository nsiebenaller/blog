import React from "react";
import Page from "@/components/Page";
import Header from "@/components/resume/Header";
import Content from "@/components/resume/Content";
import SkillContent from "@/components/resume/SkillContent";
import ExperienceContent from "@/components/resume/ExperienceContent";
import CertificationContent from "@/components/resume/CertificationContent";
import EducationContent from "@/components/resume/EducationContent";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const ResumePage = () => {
  const printerFriendly = usePrinterFriendly();
  return (
    <>
      <Page>
        <Header />
        <Content>
          <SkillContent />
          <ExperienceContent />
          <div className="grid grid-cols-2 gap-4">
            <CertificationContent />
            <EducationContent />
          </div>
        </Content>
      </Page>
      {!printerFriendly && (
        <div className="absolute left-0 top-0 z-50 h-full w-full">
          <div className="sticky left-6 top-8 inline-block drop-shadow-lg">
            <a
              href="/blog/resume.pdf"
              download
              className="mt-4 inline-block rounded-full bg-blue-500 p-2 px-6 text-center text-white shadow-sm transition hover:bg-blue-400"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumePage;
