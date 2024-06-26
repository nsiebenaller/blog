import React from "react";

const Experience: React.FC<{
  name: string;
  employer: string;
  from: string;
  to: string;
  details: string[];
  printerFriendly: boolean;
}> = ({ name, employer, from, to, details, printerFriendly }) => {
  return (
    <div
      className={`
				space-y-2 rounded bg-white p-4
				${printerFriendly ? "border border-gray-300" : "shadow-md"}
			`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{name}</h3>
          {!printerFriendly && (
            <div className="h-2 w-2 rounded-full bg-blue-500" />
          )}
          <h4 className="text-sm font-light">{employer}</h4>
        </div>
        <p className="text-right text-xs font-light text-gray-500">
          {from} - {to}
        </p>
      </div>

      <ul className="ml-6 list-disc space-y-1">
        {details.map((detail) => (
          <li key={detail} className="text-xs text-gray-700">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
