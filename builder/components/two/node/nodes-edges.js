import { FaTelegramPlane } from "react-icons/fa";

export const initialNodes = [
  {
    id: "1",
    type: "start",
    position: { x: 175, y: 0 },
    data: {
      label: (
        <div className="bg-blue-500">
          <FaTelegramPlane className="text-white" />
        </div>
      ),
      icon: FaTelegramPlane,
      color: "#2196f3",
      name: "Telegram",
      id: "1",
      isNext: false,
    },
  },
  // { id: "2", position: { x: 0, y: 250 }, data: { label: "b" } },
  // { id: "3", position: { x: 175, y: 250 }, data: { label: "c" } },
  // { id: "4", position: { x: 350, y: 250 }, data: { label: "d" } },
];

export const initialEdges = [
  // {
  //   id: "e1-2",
  //   source: "1",
  //   target: "2",
  //   type: "smoothstep",
  // },
  // {
  //   type: "smoothstep",
  //   id: "e1-3",
  //   source: "1",
  //   target: "3",
  // },
];
// export const initialEdges = [
//   {
//     id: 'e1-2',
//     source: '1',
//     target: '2',
//   },
//   {
//     id: 'e1-3',
//     source: '1',
//     target: '3',
//   },
//   {
//     id: 'e1-4',
//     source: '1',
//     target: '4',
//   },
// ];

export default { initialNodes, initialEdges };
