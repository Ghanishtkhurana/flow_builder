import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  // console.log("data", data);
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

      <Handle
        style={{
          background: "#07a36b",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
        }}
        type="source"
        className="w-16 bg-orange-400 h-5"
        isConnectable={true}
        position={Position.Bottom}
      />
    </div>
  );
};

export default CustomNode;
