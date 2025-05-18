
import { useState, useRef, useEffect } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { MindMapNode as NodeType } from "../types/mindmap";
import { Button } from "@/components/ui/button";
import AddNodeForm from "./AddNodeForm";
import ActionButtons from "./ActionButtons";
import { cn } from "@/lib/utils";

interface MindMapNodeProps {
  node: NodeType;
  level: number;
  onUpdateNode: (id: string, newText: string) => void;
  onAddChild: (parentId: string, text: string) => void;
  onDeleteNode: (id: string) => void;
  onToggleExpand: (id: string) => void;
}

const MindMapNode: React.FC<MindMapNodeProps> = ({
  node,
  level,
  onUpdateNode,
  onAddChild,
  onDeleteNode,
  onToggleExpand,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [nodeText, setNodeText] = useState(node.text);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNodeText(node.text);
  }, [node.text]);

  const handleEditSave = () => {
    onUpdateNode(node.id, nodeText);
    setIsEditing(false);
  };

  const handleAddChild = (text: string) => {
    onAddChild(node.id, text);
    setIsAdding(false);
  };

  // Generate gradient based on level
  const getGradientStyle = () => {
    const hue = (level * 30) % 360;
    return {
      background: `linear-gradient(135deg, ${level === 0 ? "#8B5CF6" : `hsla(${hue}, 70%, 50%, 0.8)`} 0%, ${
        level === 0 ? "#6E59A5" : `hsla(${hue + 30}, 60%, 40%, 0.8)`
      } 100%)`,
    };
  };
  
  const borderStyle = {
    borderWidth: Math.max(1, 3 - level * 0.5),
  };

  return (
    <div className="flex flex-col items-start" ref={nodeRef}>
      <div className="relative group">
        <div
          className={cn(
            "relative rounded-xl p-3 mb-2 backdrop-blur-sm transition-all duration-300",
            "border border-white/10 shadow-lg",
            level === 0 ? "min-w-[200px]" : "min-w-[180px]",
            node.isExpanded ? "mb-6" : "",
            level === 0 ? "glass-card" : "bg-node-gradient bg-opacity-80"
          )}
          style={{ 
            ...getGradientStyle(),
            ...borderStyle
          }}
        >
          {!isEditing ? (
            <div 
              className="flex justify-between items-center"
              onClick={() => onToggleExpand(node.id)}
            >
              <span 
                className={cn(
                  "font-medium transition-colors duration-200", 
                  level === 0 ? "text-white text-lg" : "text-white/90 text-md"
                )}
                onDoubleClick={() => setIsEditing(true)}
              >
                {node.text}
              </span>
              
              {node.children.length > 0 && (
                <Button 
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full bg-black/20 hover:bg-black/30 text-white/80"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleExpand(node.id);
                  }}
                >
                  {node.isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </Button>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={nodeText}
                onChange={(e) => setNodeText(e.target.value)}
                className="w-full p-1 rounded bg-black/20 text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/30"
                autoFocus
              />
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 text-xs bg-black/20 hover:bg-black/30 border-white/20"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="h-7 px-2 text-xs bg-mindmap-accent hover:bg-mindmap-accent2"
                  onClick={handleEditSave}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
          
          {!isEditing && (
            <ActionButtons
              onEdit={() => setIsEditing(true)}
              onAdd={() => setIsAdding(true)}
              onDelete={() => onDeleteNode(node.id)}
              showDelete={level !== 0}
            />
          )}
        </div>
        
        {isAdding && (
          <div className="absolute left-0 top-full z-10 mt-1 w-full animate-node-expand">
            <AddNodeForm
              onSave={handleAddChild}
              onCancel={() => setIsAdding(false)}
            />
          </div>
        )}
      </div>

      {node.isExpanded && node.children.length > 0 && (
        <div className="ml-8 pl-4 border-l-2 border-dashed border-mindmap-accent2/40 animate-node-expand">
          {node.children.map((child) => (
            <MindMapNode
              key={child.id}
              node={child}
              level={level + 1}
              onUpdateNode={onUpdateNode}
              onAddChild={onAddChild}
              onDeleteNode={onDeleteNode}
              onToggleExpand={onToggleExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MindMapNode;
