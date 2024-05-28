import React from "react";

const Certification: React.FC<{
  name: string;
  organization: string;
}> = ({ name, organization }) => {
  return (
    <div className={`grid grid-cols-[max-content_1fr] gap-x-2 `}>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm">{name}</h3>
        <p className="text-xs font-light">{organization}</p>
      </div>
    </div>
  );
};

export default Certification;
