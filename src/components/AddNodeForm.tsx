
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AddNodeFormProps {
  onSave: (text: string) => void;
  onCancel: () => void;
}

const AddNodeForm: React.FC<AddNodeFormProps> = ({ onSave, onCancel }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSave(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 rounded-lg bg-mindmap-node border border-white/10 shadow-lg backdrop-blur-sm">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter node text..."
        className="w-full p-2 mb-2 rounded bg-black/20 text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-mindmap-accent"
        autoFocus
      />
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onCancel}
          className="h-8 bg-black/20 hover:bg-black/30 border-white/20"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          size="sm"
          disabled={!text.trim()}
          className="h-8 bg-mindmap-accent hover:bg-mindmap-accent2"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddNodeForm;
