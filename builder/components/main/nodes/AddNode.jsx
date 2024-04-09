import React, { memo, useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { GoPlus } from "react-icons/go";

const AddNode = memo(({ data, isConnectable, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    toggleDropdown();
    data?.onClick({ value, id, reason: "deleteme" });
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
        <div className="relative inline-block text-left" ref={dropdownRef}>
          {data?.isButton && (
            <div className="text-black mt-0.5 w-5 h-4 flex justify-center items-center">
              {data?.label !== "Create Inbox" && <GoPlus onClick={toggleDropdown} className="cursor-pointer" />}
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
      <Handle
        type="target"
        id="a"
        position={Position.Top}
        className="w-16 !bg-teal-500 h-5"
        isConnectable={isConnectable}
      />
      {data?.isNext && (
        <Handle
          type="source"
          id="b"
          position={Position.Bottom}
          className="w-16 !bg-teal-500 h-5"
          isConnectable={false}
        />
      )}
    </>
  );
});

AddNode.displayName = "AddNode";
export default AddNode;
