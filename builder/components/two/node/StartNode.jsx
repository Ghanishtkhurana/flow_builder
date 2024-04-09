import React from "react";
import { Handle, Position } from "reactflow";
import { IoIosAdd } from "react-icons/io";

const StartNode = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{ padding: "10px 20px", background: data.color }}
        className="rounded-full border-1 text-[12px] text-white"
      >
        {<data.icon />}
      </div>
      <div className="text-red-400 text-[12px]">{data.name}</div>
      {!data.isNext && (
        <div className="text-red-400 text-[12px]">
          {" "}
          <IoIosAdd className="text-[20px]" />
        </div>
      )}
      {data.id !== "1" && (
        <Handle
          style={{
            background: "#ff0000",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
          }}
          type="target"
          isConnectable={true}
          // className="w-16 bg-orange-300 h-5"
          position={Position.Top}
        />
      )}
    </div>
  );
};

export default StartNode;
