import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { FcFile, FcFolder } from "react-icons/fc";

type NodeType = {
  name: string | number;
  folders?: NodeType[];
};

const NODES: NodeType[] = [
  {
    name: "movies",
    folders: [
      {
        name: "2024",
        folders: [
          {
            name: "Fast and furious",
            folders: [{ name: "part 1", folders: [{ name: "movie.mp4" }] }],
          },
        ],
      },
      { name: 2023, folders: [{ name: "Comedy" }] },
      { name: 2022, folders: [] },
    ],
  },
  { name: "tv shows", folders: [] },
  { name: "songs", folders: [] },
];

const FileSystem = () => {
  return (
    <ul>
      {NODES.map((node) => (
        <Nodes node={node} key={node.name} />
      ))}
    </ul>
  );
};

export default FileSystem;

const Nodes = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <li className="my-1.5">
      <span className="flex items-center gap-1.5">
        {node.folders ? (
          <span className="flex items-center">
            <button onClick={toggleOpen}>
              {isOpen ? <BiChevronDown /> : <BiChevronRight />}
            </button>
            <FcFolder className="size-6" />
          </span>
        ) : (
          <FcFile className="size-6" />
        )}
        {node.name}
      </span>
      {isOpen && (
        <ul className="pl-10">
          {node.folders?.map((node) => (
            <Nodes node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
};
