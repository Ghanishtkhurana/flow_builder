import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const InboxNode = memo(({ data, isConnectable }) => {
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
          style={{ background: data?.color ? data?.color : "#000000" }}
          className={`rounded-full w-8 h-8 text-white flex justify-center items-center`}
        >
          <div>
            <data.icon />
          </div>
        </div>
        <p className="text-[10px] text-black">{data?.label}</p>
      </div>
    </>
  );
});

InboxNode.displayName = "InboxNode";
export default InboxNode;
