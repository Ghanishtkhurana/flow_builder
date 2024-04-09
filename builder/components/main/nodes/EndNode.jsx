import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { RxCross2 } from "react-icons/rx";

const EndNode = memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="flex flex-col justify-center items-center">
        <div
          style={{ background: "#000" }}
          className={`rounded-full w-8 h-8 text-white flex justify-center items-center`}
        >
          <div>
            <RxCross2 />
          </div>
        </div>
        <p className="text-[10px] text-black">{data?.label}</p>
      </div>
    </>
  );
});

EndNode.displayName = "EndNode";
export default EndNode;
