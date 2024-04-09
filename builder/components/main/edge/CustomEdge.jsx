import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath } from "reactflow";
import { Menu, MenuHandler, MenuList, Button } from "@material-tailwind/react";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  data,
}) {
  const [path, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const handleItemClick = (value) => {
    data.addNode({
      value,
      s: data.source,
      t: data.target,
      edgeId: data.deleteId,
    });
  };

  return (
    <>
      <BaseEdge id={id} path={path} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <Menu placement="right-start">
            <MenuHandler>
              <Button className="p-0 m-0 rounded-full bg-white shadow-md">
                <GoPlus className="cursor-pointer" color="blue" size={12} />
              </Button>
            </MenuHandler>
            <MenuList className="cursor-pointer flex flex-col gap-5 w-[250px] max-h-[300px] customScrollbar">
              <p
                onClick={() => handleItemClick("Send Conversations Message")}
                className="rounded-sm py-3 px-2 font-bold text-gray-700 bg-gray-100 hover:bg-gray-300"
              >
                Send Conversations Message
              </p>
              <p
                onClick={() => handleItemClick("Wait for a response")}
                className="rounded-sm py-3 px-2 font-bold text-gray-700 bg-gray-100 hover:bg-gray-300"
              >
                Wait for a response
              </p>
              {!data?.deleteId && (
                <p
                  onClick={() => handleItemClick("Branch")}
                  className="rounded-sm py-3 px-2 font-bold text-gray-700 bg-gray-100 hover:bg-gray-300"
                >
                  Branch
                </p>
              )}
              <p
                onClick={() => handleItemClick("Create Inbox")}
                className="rounded-sm py-3 px-2 font-bold text-gray-700 bg-gray-100 hover:bg-gray-300"
              >
                Create Inbox
              </p>
            </MenuList>
          </Menu>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
