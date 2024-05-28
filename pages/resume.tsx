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
    <Page>
      <Header />
      <Content>
        <div className="flex flex-col gap-5">
          <SkillContent />
          <CertificationContent />
          <EducationContent />
        </div>
        <div>
          <ExperienceContent />
          {!printerFriendly && (
            <a
              href="/blog/resume.pdf"
              download
              className="mt-4 block rounded-full bg-blue-500 p-2 px-6 text-center text-white shadow-sm transition hover:bg-blue-400"
            >
              Download
            </a>
          )}
        </div>
      </Content>
    </Page>
  );
};

export default ResumePage;
