import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";
import { initialNodes } from "./node/nodes-edges";
import { TbMessages } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";
import { CiInboxIn } from "react-icons/ci";
import { FaCodeBranch } from "react-icons/fa";
import { GoStop } from "react-icons/go";

const optArr = [
  {
    label: "Send Conversations Message",
    icon: TbMessages,
    color: "#f4b800",
  },
  {
    label: "Wait for a response",
    icon: RiMessage2Line,
    color: "#73c87b",
  },
  {
    label: "Branch",
    icon: FaCodeBranch,
    color: "#2a2ae6",
  },
  {
    label: "Create Inbox",
    icon: CiInboxIn,
    color: "#1894c8",
  },
  {
    label: "End of flow",
    icon: GoStop,
    color: "#fe0101",
  },
];

let id = initialNodes.length;
const getId = () => `${++id}`;

export default function ContextMenu({
  id,
  top,
  left,
  right,
  bottom,
  setMenu,
  activeNode,
  ...props
}) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const duplicateNode = useCallback(() => {
    const node = getNode(id);
    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };

    addNodes({ ...node, id: `${node.id}-copy`, position });
  }, [id, getNode, addNodes]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  const handleTheClose = (el) => {
    let newNode = {
      id: getId(),
      type: "start",
      position: {
        x: activeNode.position.x + 2.5,
        y: activeNode.position.y + 120,
      },
      data: {
        label: <div>{el.label}</div>,
        icon: el.icon,
        color: el.color,
        name: el.label,
        isNext: false,
        id: getId(),
      },
    };
    console.log("newNode", newNode);
    // setNodes((ns) => ns.concat(newNode));
    setNodes((previous) => {
      const nodes = [...previous];
      const updateNode = nodes.map((el, i) => ({
        ...el,
        data: {
          ...el.data,
          isNext: true,
        },
        type: "custom",
      }));
      console.log("updateNode", updateNode);
      return [...updateNode, newNode];
    });
    setEdges((previous) => [
      ...previous,
      {
        id: `e${activeNode.id}-${newNode.id}`,
        source: activeNode.id,
        target: newNode.id,
        type : "custom"
      },
    ]);
    setMenu(null);
  };
  console.log("initialNodes", initialNodes);
  return (
    <div
      className="context-menu rounded-xl overflow-hidden"
      style={{ top, left, right, bottom }}
    >
      {/* other card content... */}
      {optArr.map((el, i) => (
        <div className="flex justify-start pl-5 w-full items-center  hover:bg-gray-400 transition-all duration-400 border-gray-300">
          <el.icon
            style={{ color: el.color }}
            className="text-[20px] text-gray-600"
          />
          <p
            onClick={() => handleTheClose(el)}
            className="py-2 px-4 w-full text-[14px]"
          >
            {el.label}
          </p>
        </div>
      ))}
    </div>
  );
}
