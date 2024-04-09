import React, { memo, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { GoPlus } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const StartNode = memo(({ data, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const Icon = {
    IoChatbubblesOutline: IoChatbubblesOutline,
    FaWhatsapp: FaWhatsapp,
  }[data.icon];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    toggleDropdown();
    data?.onClick({ value, id });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={() => data?.onClick({ reason: "start", id, value: data?.label })}
          style={{ background: data?.color ? data?.color : "#8484ff" }}
          className={`rounded-full w-8 h-8 text-white flex justify-center items-center`}
        >
          <div>
            <Icon />
          </div>
        </div>
        <p className="text-[10px] text-red-600">{data?.label}</p>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          {data?.isButton && (
            <div className="text-black mt-0.5 w-5 h-4 flex justify-center items-center">
              <GoPlus onClick={toggleDropdown} className="cursor-pointer" />
            </div>
          )}
          {isOpen && (
            <div className="origin-top-right z-10 absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <p
                  onClick={() => handleItemClick("Send Conversations Message")}
                  className="block px-2 py-1 text-[10px] text-gray-700 hover:bg-gray-100"
                >
                  Send Conversations Message
                </p>
                <p
                  onClick={() => handleItemClick("Wait for a response")}
                  className="block px-2 py-1 text-[10px] text-gray-700 hover:bg-gray-100"
                >
                  Wait for a response
                </p>
                <p
                  onClick={() => handleItemClick("Branch")}
                  className="block px-2 py-1 text-[10px] text-gray-700 hover:bg-gray-100"
                >
                  Branch
                </p>
                <p
                  onClick={() => handleItemClick("Create Inbox")}
                  className="block px-2 py-1 text-[10px] text-gray-700 hover:bg-gray-100"
                >
                  Create Inbox
                </p>
                <p
                  onClick={() => handleItemClick("End of flow")}
                  className="block px-2 py-1 text-[10px] text-gray-700 hover:bg-gray-100"
                >
                  End of flow
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {data?.isNext && (
        <Handle
          type="source"
          id="a"
          position={Position.Bottom}
          className="w-16 !bg-teal-500 h-5"
          isConnectable={false}
        />
      )}
    </>
  );
});

StartNode.displayName = "StartNode";
export default StartNode;
