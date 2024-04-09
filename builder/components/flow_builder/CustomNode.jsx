import React, { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  //   const [card, setCard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        style={{ padding: "10px 20px" }}
        className="rounded-full border-1 border-gray-500 bg-pink-300"
      >
        {data.label}
      </div>

      {data.handleTop && <Handle type="target" position={Position.Top} />}

      <Handle
        style={{
          background: "#ff0000",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
        type="source"
        position={Position.Bottom}
      />
    </>
  );
};

export default CustomNode;
