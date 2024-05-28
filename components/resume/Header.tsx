import React from "react";
import usePrinterFriendly from "@/hooks/usePrinterFriendly";

const Header = () => {
  const printerFriendly = usePrinterFriendly();
  return (
    <header
      className={`
				relative z-10 grid w-full 
				grid-flow-col bg-white p-10 
				${printerFriendly ? "border-b border-b-gray-300" : "shadow-md"}
			`}
    >
      {!printerFriendly && (
        <div className="triangle">
          <div className="triangle-border">
            <div className="triangle-line" />
          </div>
        </div>
      )}
      <section>
        <h2 className="font-extralight">
          <span
            className={`
							font-normal ${printerFriendly ? "font-semibold" : "text-blue-500"}`}
          >{`Hello, `}</span>
          {`I'm Nicholas Siebenaller`}
        </h2>
        <h1 className="text-4xl uppercase">{`Software Engineer`}</h1>
      </section>
      <section className="grid justify-between font-extralight">
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <span className="material-icons-outlined text-sm">call</span>
          <span className="text-xs">{`(262) 391 - 2072`}</span>
        </div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <span className="material-icons-outlined text-sm">email</span>
          <span className="text-xs">{`nicholaspaulsiebenaller@gmail.com`}</span>
        </div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <span className="material-icons-outlined text-sm">person</span>
          <a
            href="https://linkedin.com/in/nsiebenaller"
            className="text-xs"
          >{`linkedin.com/in/nsiebenaller`}</a>
        </div>
      </section>
    </header>
  );
};

export default Header;
