
import { useState, useCallback } from "react";
import { MindMapNode as NodeType } from "../types/mindmap";
import MindMapNode from "./MindMapNode";
import AddNodeForm from "./AddNodeForm";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const generateId = (): string => Math.random().toString(36).substr(2, 9);

const initialNode: NodeType = {
  id: generateId(),
  text: "Main Topic",
  children: [],
  isExpanded: true
};

const MindMap: React.FC = () => {
  const [rootNode, setRootNode] = useState<NodeType>(initialNode);
  const [isAddingRoot, setIsAddingRoot] = useState(false);

  // Helper function to find and update a node recursively
  const findAndUpdateNode = (
    nodes: NodeType[],
    id: string,
    updater: (node: NodeType) => NodeType
  ): NodeType[] => {
    return nodes.map((node) => {
      if (node.id === id) {
        return updater(node);
      }
      if (node.children.length > 0) {
        return {
          ...node,
          children: findAndUpdateNode(node.children, id, updater),
        };
      }
      return node;
    });
  };

  const resetMap = () => {
    if (confirm("Are you sure you want to reset the mind map?")) {
      setRootNode(initialNode);
      toast.success("Mind map has been reset!");
    }
  };

  const updateNodeText = useCallback((id: string, newText: string) => {
    if (id === rootNode.id) {
      setRootNode({ ...rootNode, text: newText });
    } else {
      setRootNode({
        ...rootNode,
        children: findAndUpdateNode(rootNode.children, id, (node) => ({
          ...node,
          text: newText,
        })),
      });
    }
  }, [rootNode]);

  const addChildNode = useCallback((parentId: string, text: string) => {
    const newNode: NodeType = {
      id: generateId(),
      text,
      children: [],
      isExpanded: true,
    };
    
    if (parentId === rootNode.id) {
      setRootNode({
        ...rootNode,
        children: [...rootNode.children, newNode],
        isExpanded: true,
      });
      toast.success(`Added "${text}" to "${rootNode.text}"`);
    } else {
      setRootNode({
        ...rootNode,
        children: findAndUpdateNode(rootNode.children, parentId, (node) => ({
          ...node,
          children: [...node.children, newNode],
          isExpanded: true,
        })),
      });
      toast.success(`Added new node: ${text}`);
    }
  }, [rootNode]);

  const deleteNode = useCallback((id: string) => {
    const deleteNodeRecursively = (nodes: NodeType[], idToDelete: string): NodeType[] => {
      return nodes.filter((node) => node.id !== idToDelete).map((node) => ({
        ...node,
        children: deleteNodeRecursively(node.children, idToDelete),
      }));
    };

    setRootNode({
      ...rootNode,
      children: deleteNodeRecursively(rootNode.children, id),
    });
    toast.info("Node deleted");
  }, [rootNode]);

  const toggleNodeExpansion = useCallback((id: string) => {
    if (id === rootNode.id) {
      setRootNode({ ...rootNode, isExpanded: !rootNode.isExpanded });
    } else {
      setRootNode({
        ...rootNode,
        children: findAndUpdateNode(rootNode.children, id, (node) => ({
          ...node,
          isExpanded: !node.isExpanded,
        })),
      });
    }
  }, [rootNode]);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <div className="flex justify-between w-full mb-8 px-4">
        <div className="flex">
          <Button
            onClick={resetMap}
            variant="outline"
            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20"
          >
            Reset Map
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setIsAddingRoot(true)}
            className="bg-mindmap-accent hover:bg-mindmap-accent2"
          >
            Add New Node
          </Button>
        </div>
      </div>

      {isAddingRoot && (
        <div className="mb-6 w-72 animate-node-expand">
          <AddNodeForm
            onSave={(text) => {
              addChildNode(rootNode.id, text);
              setIsAddingRoot(false);
            }}
            onCancel={() => setIsAddingRoot(false)}
          />
        </div>
      )}

      <div className="relative flex justify-center py-8 px-4 w-full overflow-x-auto min-h-[500px]">
        <div className="mindmap-container">
          <MindMapNode
            node={rootNode}
            level={0}
            onUpdateNode={updateNodeText}
            onAddChild={addChildNode}
            onDeleteNode={deleteNode}
            onToggleExpand={toggleNodeExpansion}
          />
        </div>
      </div>
    </div>
  );
};

export default MindMap;
