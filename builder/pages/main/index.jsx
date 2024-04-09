import CustomEdge from "@/components/main/edge/CustomEdge";
import AddNode from "@/components/main/nodes/AddNode";
import ConditionNode from "@/components/main/nodes/ConditionNode";
import CustomNode from "@/components/main/nodes/CustomNode";
import EndNode from "@/components/main/nodes/EndNode";
import StartNode from "@/components/main/nodes/StartNode";
import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

// const Main = () => {
const Main = ({ prevData }) => {
  // let prevData = {
  //   options: {
  //     callbacks: [],
  //     targets: [],
  //   },
  //   _id: "65e07a827d4b83f55e1fac92",
  //   orgNo: "1",
  //   title: "Whatsapp Flow 29-02-2024 18:07",
  //   active: false,
  //   metadata: [],
  //   steps: [
  //     {
  //       id: "2",
  //       action: "branch",
  //       options: {
  //         intent: "smsConditional",
  //         cases: [
  //           {
  //             conditions: [
  //               {
  //                 value: "",
  //                 operator: "equals",
  //                 variable: "",
  //                 options: {
  //                   intent: "messageContent",
  //                 },
  //               },
  //             ],
  //             steps: [
  //               {
  //                 id: "5",
  //                 action: "await",
  //                 options: {
  //                   variables: {
  //                     title: "",
  //                     value: "",
  //                   },
  //                   expiryAt: {
  //                     number: 3,
  //                     value: "minutes",
  //                   },
  //                 },
  //               },
  //             ],
  //             id: "dc55d1fe-b405-41ad-82b9-ca88e8beb0f0",
  //           },
  //         ],
  //         default: {
  //           steps: [],
  //         },
  //       },
  //     },
  //     {
  //       id: "7",
  //       action: "await",
  //       options: {
  //         variables: {
  //           title: "and where",
  //           value: "",
  //         },
  //         expiryAt: {
  //           number: 3,
  //           value: "minutes",
  //         },
  //       },
  //     },
  //     {
  //       id: "8",
  //       action: "await",
  //       options: {
  //         variables: {
  //           title: "NHD D",
  //           value: "",
  //         },
  //         expiryAt: {
  //           number: 3,
  //           value: "minutes",
  //         },
  //       },
  //     },
  //   ],
  //   published: false,
  //   revisionCount: 0,
  //   tags: [],
  //   nodes: [
  //     {
  //       id: "1",
  //       type: "start",
  //       data: {
  //         label: "Whatsapp",
  //         isButton: false,
  //         isNext: true,
  //         icon: "IoChatbubblesOutline",
  //         color: "#8484ff",
  //         parentId: "1",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 400,
  //         y: 0,
  //       },
  //       sourcePosition: "bottom",
  //       width: 45,
  //       height: 47,
  //       selected: false,
  //       dragging: false,
  //     },
  //     {
  //       id: "2",
  //       type: "custom",
  //       data: {
  //         label: "Branch",
  //         isButton: false,
  //         isNext: true,
  //         icon: "RiGitBranchFill",
  //         color: "#2a2ae6",
  //         parentId: "2",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 406.5,
  //         y: 100,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 32,
  //       height: 47,
  //       selected: false,
  //       dragging: false,
  //     },
  //     {
  //       id: "10002",
  //       type: "condition",
  //       data: {
  //         label: "equals",
  //         value: "",
  //         isButton: false,
  //         isNext: true,
  //         parentId: "2",
  //         color: "#2a2ae6",
  //         deleteId: "dc55d1fe-b405-41ad-82b9-ca88e8beb0f0",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 292.5,
  //         y: 200,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 120,
  //       height: 50,
  //     },
  //     {
  //       id: "5",
  //       type: "custom",
  //       data: {
  //         label: "Wait for a response",
  //         isButton: false,
  //         isNext: true,
  //         icon: "IoChatboxEllipsesOutline",
  //         color: "#73c87b",
  //         parentId: "2",
  //         stepId: "dc55d1fe-b405-41ad-82b9-ca88e8beb0f0",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 309.29999999999995,
  //         y: 300,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 86,
  //       height: 47,
  //     },
  //     {
  //       id: "10001",
  //       type: "condition",
  //       data: {
  //         label: "else",
  //         isButton: false,
  //         isNext: true,
  //         parentId: "2",
  //         icon: "RiGitBranchFill",
  //         color: "#2a2ae6",
  //         deleteId: "82c099c0-25d7-483d-819e-e33a1fa9e877",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 432.5,
  //         y: 200,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 120,
  //       height: 50,
  //       selected: false,
  //       dragging: false,
  //     },
  //     {
  //       id: "6",
  //       type: "custom",
  //       data: {
  //         label: "Send Conversations Message",
  //         isButton: false,
  //         isNext: true,
  //         icon: "PiChatsCircle",
  //         color: "#f4b800",
  //         parentId: "2",
  //         stepId: "82c099c0-25d7-483d-819e-e33a1fa9e877",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 425.79999999999995,
  //         y: 300,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 133,
  //       height: 47,
  //     },
  //     {
  //       id: "7",
  //       type: "custom",
  //       data: {
  //         label: "Wait for a response",
  //         isButton: false,
  //         isNext: true,
  //         icon: "IoChatboxEllipsesOutline",
  //         color: "#73c87b",
  //         parentId: "7",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 379.3,
  //         y: 400,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 86,
  //       height: 47,
  //       selected: false,
  //       dragging: false,
  //     },
  //     {
  //       id: "8",
  //       type: "custom",
  //       data: {
  //         label: "Wait for a response",
  //         isButton: true,
  //         isNext: false,
  //         icon: "IoChatboxEllipsesOutline",
  //         color: "#73c87b",
  //         parentId: "8",
  //       },
  //       draggable: true,
  //       position: {
  //         x: 379.3,
  //         y: 500,
  //       },
  //       sourcePosition: "bottom",
  //       positionAbsolute: "bottom",
  //       width: 86,
  //       height: 65,
  //       selected: true,
  //       dragging: false,
  //     },
  //   ],
  //   edges: [
  //     {
  //       id: "e2",
  //       type: "custom-edge",
  //       source: "1",
  //       target: "2",
  //       animated: false,
  //       data: {
  //         source: "1",
  //         target: "2",
  //       },
  //     },
  //     {
  //       id: "e10001",
  //       type: "smoothstep",
  //       source: "2",
  //       target: "10001",
  //       animated: false,
  //       data: {
  //         source: "2",
  //         target: "10001",
  //       },
  //     },
  //     {
  //       id: "e6",
  //       type: "smoothstep",
  //       source: "6",
  //       target: "7",
  //       animated: false,
  //       data: {
  //         deleteId: "82c099c0-25d7-483d-819e-e33a1fa9e877",
  //         source: "6",
  //         target: "7",
  //       },
  //     },
  //     {
  //       id: "e3",
  //       type: "smoothstep",
  //       source: "10001",
  //       target: "6",
  //       animated: false,
  //       data: {
  //         source: "10001",
  //         target: "6",
  //         deleteId: "82c099c0-25d7-483d-819e-e33a1fa9e877",
  //       },
  //       selected: false,
  //     },
  //     {
  //       id: "ee10002",
  //       type: "smoothstep",
  //       source: "2",
  //       target: "10002",
  //       animated: false,
  //       data: {
  //         source: "2",
  //         target: "10002",
  //         deleteId: "dc55d1fe-b405-41ad-82b9-ca88e8beb0f0",
  //       },
  //     },
  //     {
  //       id: "e5",
  //       type: "smoothstep",
  //       source: "5",
  //       target: "7",
  //       animated: false,
  //       data: {
  //         deleteId: "dc55d1fe-b405-41ad-82b9-ca88e8beb0f0",
  //         source: "5",
  //         target: "7",
  //       },
  //     },
  //     {
  //       id: "e10002",
  //       type: "smoothstep",
  //       source: "10002",
  //       target: "5",
  //       animated: false,
  //       data: {
  //         source: "10002",
  //         target: "5",
  //         deleteId: "dc55d1fe-b405-41ad-82b9-ca88e8beb0f0",
  //       },
  //       selected: false,
  //     },
  //     {
  //       id: "e8",
  //       type: "custom-edge",
  //       source: "7",
  //       target: "8",
  //       animated: false,
  //       data: {
  //         source: "7",
  //         target: "8",
  //       },
  //     },
  //   ],
  //   variables: [
  //     {
  //       id: "-1",
  //       title: "currentTime",
  //       value: "06:07 PM",
  //     },
  //     {
  //       id: "0",
  //       title: "currentDate",
  //       value: "2-29-2024",
  //     },
  //     {
  //       id: "7",
  //       title: "and where",
  //       value: "",
  //     },
  //     {
  //       id: "8",
  //       title: "NHD D",
  //       value: "",
  //     },
  //   ],
  //   createdAt: "2024-02-29T12:37:22.385Z",
  //   updatedAt: "2024-02-29T12:39:26.805Z",
  // };
  console.log("prev data", prevData);
  const [ids, setIds] = useState(
    prevData
      ? prevData?.nodes.reduce((acc, node) => {
          if (Number(acc) < Number(node.id) && Number(node.id) < 10000) {
            acc = node.id;
            return acc;
          } else {
            return acc;
          }
        }, "1")
      : "1"
  );
  console.log("ids", ids);

  const onClickAdd = ({ value, id, reason }) => {
    if (!reason || reason === "deleteme") {
      let newId;
      setIds((prevId) => {
        newId = (Number(prevId) + 1).toString();
        let currentBranchId;
        setBranchId((prevBranchId) => {
          currentBranchId = (Number(prevBranchId) + 1).toString();
          changeData({ value, id, newId, reason, currentBranchId });
          handleStep({ value, id: newId, where: "end" });
          const newTitle = valueSidebar.find((el) => el.name === value);
          setCurrentTitle(newTitle);
          setOpenSidebar(() => {
            if (value === "Create Inbox")
              return { id: null, show: false, showDelete: true };
            if (value === "End of flow")
              return { id: null, show: false, showDelete: false };
            return { id: newId, show: true, showDelete: true };
          });
          if (value === "Branch") {
            return (Number(prevBranchId) + 1).toString();
          } else {
            return prevBranchId;
          }
        });
        if (value === "Branch") {
          return (Number(prevId) + 2).toString();
        } else {
          return (Number(prevId) + 1).toString();
        }
      });

      let st;
      let da;
      let va;
      let no;
      let ed;
      let flowid;
      setData((prevData) => {
        da = prevData;
        setStep((prevStep) => {
          st = prevStep;
          setNodes((prevNodes) => {
            no = prevNodes;
            setEdges((prevEdges) => {
              ed = prevEdges;
              setVariables((prevVariables) => {
                va = prevVariables;
                setFlowId((prevId) => {
                  flowid = prevId;
                  autoSave({
                    id: flowid,
                    data: da,
                    steps: st,
                    nodes: no,
                    edges: ed,
                    variables: va,
                  });
                  return prevId;
                });
                return prevVariables;
              });
              return prevEdges;
            });
            return prevNodes;
          });
          return prevStep;
        });
        return prevData;
      });
    } else {
      if (reason === "custom") {
        setOpenSidebar((prev) => {
          if (value === "Create Inbox") {
            return { id: null, show: false, showDelete: !prev.showDelete };
          }
          if (prev.id === id) {
            return { ...prev, show: !prev.show, showDelete: !prev.showDelete };
          } else {
            return { id, show: true, showDelete: true };
          }
        });
        setStep((prev) => {
          let newsetp = prev.find((el) => el.id === id);
          setCurrentStep(newsetp);
          const newTitle = valueSidebar.find((el) => el.name === value);
          setCurrentTitle(newTitle);
          return prev;
        });
      }
      if (reason === "start") {
        setOpenSidebar((prev) => {
          const newTitle = valueSidebar.find((el) => el.name === value);
          setCurrentTitle(newTitle);
          if (prev.id === id) {
            return { ...prev, show: !prev.show, showDelete: false };
          } else {
            return { id, show: true, showDelete: false };
          }
        });
      }
    }
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(
    prevData
      ? prevData?.nodes.map((node) => {
          node.data.onClick = onClickAdd;
          return node;
        })
      : [
          {
            id: ids,
            type: "start",
            data: {
              label: "Whatsapp",
              isButton: true,
              isNext: false,
              onClick: onClickAdd,
              icon: "IoChatbubblesOutline",
              color: "#8484ff",
              parentId: ids,
            },
            draggable: true,
            position: { x: 400, y: 0 },
            sourcePosition: "bottom",
          },
        ]
  );

  const handleAddMiddleNode = ({ value, s, t, edgeId }) => {
    const nodeData = nodesData.find((node) => node.name === value);
    let newId;
    setIds((prevId) => {
      newId = (Number(prevId) + 1).toString();
      let currentBranchId;

      setBranchId((prevBranchId) => {
        currentBranchId = (Number(prevBranchId) + 1).toString();

        if (!edgeId) {
          setNodes((prev) => {
            let prevY = 0;
            let prevNodes = [...prev];
            const newNodes = prevNodes.map((node) => {
              if (node.id == s) {
                prevY = node.position.y;
              }
              return node;
            });

            let updatedNodes = [];
            let idfound = false;
            let count = 0;
            for (let i = 0; i < newNodes.length; i++) {
              let obj = newNodes[i];
              if (idfound) {
                if (count === 0) {
                  updatedNodes.push({
                    id: newId,
                    type: "custom",
                    data: {
                      label: value,
                      isButton: false,
                      onClick: onClickAdd,
                      isNext: true,
                      icon: nodeData?.icon,
                      color: nodeData ? nodeData?.color : "#f4b800",
                      parentId: newId,
                    },
                    draggable: true,
                    position: {
                      x:
                        value === "Wait for a response"
                          ? 379.3
                          : value === "Send Conversations Message"
                          ? 355.8
                          : value === "End of flow"
                          ? 397.8
                          : value === "Create Inbox"
                          ? 393.9
                          : value === "Branch"
                          ? 406.5
                          : 370,
                      y: prevY + 100,
                    },
                    sourcePosition: "bottom",
                    positionAbsolute: "bottom",
                  });
                  if (value === "Branch") {
                    updatedNodes.push({
                      id: currentBranchId,
                      type: "condition",
                      data: {
                        label: "else",
                        isButton: false,
                        onClick: onClickAdd,
                        isNext: true,
                        parentId: newId,
                        icon: nodeData?.icon,
                        color: nodeData ? nodeData?.color : "#f4b800",
                      },
                      draggable: true,
                      position: {
                        x: 362.5,
                        y: prevY + 200,
                      },
                      sourcePosition: "bottom",
                      positionAbsolute: "bottom",
                    });
                  }
                }
                if (value === "Branch") {
                  obj.position.y = newNodes[i]?.position?.y + 200;
                } else {
                  obj.position.y = newNodes[i]?.position?.y + 100;
                }
                updatedNodes.push(obj);
                count++;
              } else {
                if (newNodes[i]?.id === s) {
                  idfound = true;
                }
                updatedNodes.push(obj);
              }
            }
            return updatedNodes;
          });
          setEdges((prev) => {
            let newEdges = [...prev];
            let updatedEdges = [];
            for (let i = 0; i < newEdges.length; i++) {
              let obj = newEdges[i];
              if (obj.source === s && obj.target === t) {
                obj.target = newId;
                obj.data.target = newId;
                if (value === "Branch") {
                  updatedEdges.push({
                    id: `e${newId}`,
                    type: "smoothstep",
                    source: newId,
                    target: currentBranchId,
                    animated: false,
                    data: {
                      source: newId,
                      target: currentBranchId,
                      addNode: handleAddMiddleNode,
                    },
                  });
                  updatedEdges.push({
                    id: `es${newId}`,
                    type: "custom-edge",
                    source: currentBranchId,
                    target: t,
                    animated: false,
                    data: {
                      source: currentBranchId,
                      target: t,
                      addNode: handleAddMiddleNode,
                    },
                  });
                } else {
                  updatedEdges.push({
                    id: `e${newId}`,
                    type: "custom-edge",
                    source: newId,
                    target: t,
                    animated: false,
                    data: {
                      source: newId,
                      target: t,
                      addNode: handleAddMiddleNode,
                    },
                  });
                }
              }
              updatedEdges.push(obj);
            }
            return updatedEdges;
          });
        } else {
          setNodes((prev) => {
            let prevY = 0;
            let preNode;
            let prevNodes = [...prev];
            const newNodes = prevNodes.map((node) => {
              if (node.id == s) {
                prevY = node.position.y;
                preNode = node;
              }
              return node;
            });

            let alreadyCreated = false;
            for (let i = 0; i < newNodes.length; i++) {
              for (let j = 0; j < newNodes.length; j++) {
                let parentId = newNodes[i]?.data?.parentId;
                if (
                  parentId === newNodes[j]?.data?.parentId &&
                  parentId === preNode?.data?.parentId
                ) {
                  if (
                    newNodes[i]?.data?.deleteId &&
                    newNodes[j]?.data?.stepId
                  ) {
                    if (
                      newNodes[i]?.data?.deleteId === newNodes[j]?.data?.stepId
                    ) {
                      alreadyCreated = true;
                    }
                  }
                }
              }
            }
            let updatedNodes = [];
            let idfound = false;
            let count = 0;
            for (let i = 0; i < newNodes.length; i++) {
              let obj = newNodes[i];
              if (idfound) {
                if (count === 0) {
                  updatedNodes.push({
                    id: newId,
                    type: "custom",
                    data: {
                      label: value,
                      isButton: false,
                      onClick: onClickAdd,
                      isNext: true,
                      icon: nodeData?.icon,
                      color: nodeData ? nodeData?.color : "#f4b800",
                      parentId: preNode.data.parentId,
                      stepId: edgeId,
                    },
                    draggable: true,
                    position: {
                      x:
                        value === "Wait for a response"
                          ? preNode.position.x - (362.5 - 379.3)
                          : value === "Send Conversations Message"
                          ? preNode.position.x - (362.5 - 355.8)
                          : value === "End of flow"
                          ? preNode.position.x - (362.5 - 397.8)
                          : value === "Create Inbox"
                          ? preNode.position.x - (362.5 - 393.9)
                          : value === "Branch"
                          ? preNode.position.x - (362.5 - 406.5)
                          : preNode.position.x - (362.5 - 370),
                      y: prevY + 100,
                    },
                    sourcePosition: "bottom",
                    positionAbsolute: "bottom",
                  });
                  // if (value === "Branch") {
                  //   updatedNodes.push({
                  //     id: currentBranchId,
                  //     type: "condition",
                  //     data: {
                  //       label: "else",
                  //       isButton: false,
                  //       onClick: onClickAdd,
                  //       isNext: true,
                  //       parentId: newId,
                  //       icon: nodeData?.icon,
                  //       color: nodeData ? nodeData?.color : "#f4b800",
                  //     },
                  //     draggable: true,
                  //     position: {
                  //       x: 362.5,
                  //       y: prevY + 200,
                  //     },
                  //     sourcePosition: "bottom",
                  //     positionAbsolute: "bottom",
                  //   });
                  // }
                }
                updatedNodes.push(obj);
                count++;
              } else {
                if (newNodes[i]?.id === s) {
                  idfound = true;
                }
                updatedNodes.push(obj);
              }
            }
            let changePostion = false;
            let changedPositionNode = [];
            for (let i = 0; i < updatedNodes.length; i++) {
              let obj = updatedNodes[i];
              if (changePostion) {
                if (
                  obj?.data?.parentId !== preNode?.data?.parentId ||
                  obj?.type === "add"
                ) {
                  if (alreadyCreated == false) {
                    obj.position.y = obj.position.y + 100;
                  }
                }
              } else {
                if (
                  updatedNodes[i]?.data?.parentId === preNode?.data?.parentId
                ) {
                  changePostion = true;
                }
              }
              // if (
              //   obj?.data?.label === "else" &&
              //   obj?.data?.parentId === preNode?.data?.parentId
              // ) {
              //   obj.position.y = obj.position.y + 100;
              // }
              changedPositionNode.push(obj);
            }
            return changedPositionNode;
          });
          setEdges((prev) => {
            let newEdges = [...prev];
            let updatedEdges = [];
            for (let i = 0; i < newEdges.length; i++) {
              let obj = newEdges[i];
              if (obj.source === s && obj.target === t) {
                obj.target = newId;
                obj.data.target = newId;
                obj.type = "smoothstep";
                // if (value === "Branch") {
                //   updatedEdges.push({
                //     id: `e${newId}`,
                //     type: "smoothstep",
                //     source: newId,
                //     target: currentBranchId,
                //     animated: false,
                //     data: {
                //       source: newId,
                //       target: currentBranchId,
                //       addNode: handleAddMiddleNode,
                //     },
                //   });
                //   updatedEdges.push({
                //     id: `es${newId}`,
                //     type: "smoothstep",
                //     source: currentBranchId,
                //     target: t,
                //     animated: false,
                //     data: {
                //       source: currentBranchId,
                //       target: t,
                //       addNode: handleAddMiddleNode,
                //     },
                //   });
                // } else {
                updatedEdges.push({
                  id: `e${newId}`,
                  type: "smoothstep",
                  source: newId,
                  target: t,
                  animated: false,
                  data: {
                    deleteId: edgeId,
                    source: newId,
                    target: t,
                    addNode: handleAddMiddleNode,
                  },
                });
                // }
              }
              updatedEdges.push(obj);
            }
            return updatedEdges;
          });
        }
        handleStep({ value, id: newId, where: "middle", from: s, edgeId });
        const newTitle = valueSidebar.find((el) => el.name === value);
        setCurrentTitle(newTitle);
        setOpenSidebar(() => {
          if (value === "End of flow" || value === "Create Inbox")
            return { id: null, show: false, showDelete: true };
          return { id: newId, show: true, showDelete: true };
        });
        if (value === "Branch") {
          return (Number(prevBranchId) + 1).toString();
        } else {
          return prevBranchId;
        }
      });
      return (Number(prevId) + 1).toString();
    });

    let st;
    let da;
    let va;
    let no;
    let ed;
    let flowid;
    setData((prevData) => {
      da = prevData;
      setStep((prevStep) => {
        st = prevStep;
        setNodes((prevNodes) => {
          no = prevNodes;
          setEdges((prevEdges) => {
            ed = prevEdges;
            setVariables((prevVariables) => {
              va = prevVariables;
              setFlowId((prevId) => {
                flowid = prevId;
                autoSave({
                  id: flowid,
                  data: da,
                  steps: st,
                  nodes: no,
                  edges: ed,
                  variables: va,
                });
                // setReloading(true);
                // handleReload();
                return prevId;
              });
              return prevVariables;
            });
            return prevEdges;
          });
          return prevNodes;
        });
        return prevStep;
      });
      return prevData;
    });
  };
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    prevData
      ? prevData?.edges.map((edge) => {
          edge.data.addNode = handleAddMiddleNode;
          return edge;
        })
      : []
  );

  const [data, setData] = useState(
    prevData
      ? { ...prevData }
      : {
          title: `Whatsapp Flow ${new Date()
            .toLocaleDateString("en-GB")
            .split("/")
            .join("-")} ${new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}`,
          metadata: [],
        }
  );

  const nodeTypes = useMemo(
    () => ({
      start: StartNode,
      custom: CustomNode,
      end: EndNode,
      add: AddNode,
      condition: ConditionNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      "custom-edge": CustomEdge,
    }),
    []
  );

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: "custom-edge" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  // console.log(
  //   // step,
  //   // "setsps",
  //   nodes,
  //   "nodes",
  //   edges,
  //   "edges",
  //   // variables,
  //   // "variables"
  //   ids
  //   // branchId
  // );
  return (
    <div className="bg-red-300 h-[600px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        className="h-[200px]"
      >
        <Controls position="bottom-left" />
        <Background
          color="#dde1e3"
          size={2}
          variant={BackgroundVariant.Cross}
          className="bg-[#f6fafd] h-[200px]"
          gap={16}
        />
      </ReactFlow>
    </div>
  );
};

export default Main;
