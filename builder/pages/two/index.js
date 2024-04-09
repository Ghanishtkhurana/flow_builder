import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

// import { initialNodes, initialEdges } from "./nodes-edges";
// import ContextMenu from "./ContextMenu";

import "reactflow/dist/style.css";
import StyleComp from "@/components/two/StyleComp";
import { initialEdges, initialNodes } from "@/components/two/node/nodes-edges";
import ContextMenu from "@/components/two/ContextMenu";
import CustomNode from "@/components/two/node/CustomNode";
import CustomEdge from "@/components/two/edge/CustomEdge";
import StartNode from "@/components/two/node/StartNode";

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log("edges", edges);
  console.log("npde", nodes);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);
  const [activeNode, setAcitveNode] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      setAcitveNode(node);
      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu]
  );

  const nodeTypes = useMemo(
    () => ({
      custom: CustomNode,
      start: StartNode,
    }),
    []
  );

  const edgeType = useMemo(
    () => ({
      custom: CustomEdge,
    }),
    []
  );
  // Close the context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <StyleComp />
      <ReactFlow
        ref={ref}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeType}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
        fitView
      >
        <Background />
        {menu && (
          <ContextMenu
            onClick={onPaneClick}
            activeNode={activeNode}
            setMenu={setMenu}
            {...menu}
          />
        )}
      </ReactFlow>
    </div>
  );
};

export default Flow;
