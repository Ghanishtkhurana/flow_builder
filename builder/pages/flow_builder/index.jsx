import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "@/components/flow_builder/CustomNode";

const optArr = [
  {
    label: "Send Conversations Message",
  },
  {
    label: "Wait for a response",
  },
  {
    label: "Create Inbox",
  },
  {
    label: "End of flow",
  },
];

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 600, y: 100 },
    data: { label: <div>1</div>, handleTop: false },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 600, y: 100 },
    data: { label: <div>2</div>, handleTop: false },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

let id = initialNodes.length;
const getId = () => `${++id}`;

const Flow_builder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [open, setOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(null);
  const [activeNodePosition, setActiveNodePosition] = useState({ x: 0, y: 0 });
  const [ev, setEv] = useState(null);
  const ref = useRef(null);
  console.log("activenode", activeNode);

  const onConnect = useCallback(
    (params) => {
      console.log("onConnect", params);
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const handleClickOutside = () => {
    setActiveNode(null);
  };

  const nodeTypes = {
    custom: CustomNode,
  };

  const handleTheNodeClick = (event, node) => {
    console.log("node", node);
    setOpen(true);
    setActiveNode(node);
    setEv(event);
  };

  const handleTheClose = (el) => {
    console.log("el", el);
    const pane = ref.current.getBoundingClientRect();
    let newNode = {
      id: getId(),
      type: "custom",
      position: {
        // x: activeNode.position.x + 100,
        // y: activeNode.position.y + 100,
        top: ev.clientY < pane.height - 200 && ev.clientY,
        left: ev.clientX < pane.width - 200 && ev.clientX,
        right: ev.clientX >= pane.width - 200 && pane.width - ev.clientX,
        bottom: ev.clientY >= pane.height - 200 && pane.height - ev.clientY,
      },
      data: { label: <div>{el.label}</div>, handleTop: true },
    };
    console.log("newNode", newNode);
    setNodes((ns) => ns.concat(newNode));
    setEdges((es) =>
      es.concat({
        id: `e${activeNode.id}-${newNode.id}`,
        source: activeNode.id,
        target: newNode.id,
      })
    );
    setOpen(false);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={(event, node) => handleTheNodeClick(event, node)}
      />
      {open && (
        <div
          className="border-1 border-gray-600 bg-white rounded-md"
          style={{
            position: "absolute",
            left: `${activeNode.position.x + 40}px`,
            top: `${activeNode.position.y + 40}px`,
          }}
        >
          {/* other card content... */}
          {optArr.map((el, i) => (
            <p
              onClick={() => handleTheClose(el)}
              className="py-2 px-4 text-[14px] hover:bg-gray-400 transition-all duration-400"
            >
              {el.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Flow_builder;
