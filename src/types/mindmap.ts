
export interface MindMapNode {
  id: string;
  text: string;
  children: MindMapNode[];
  isExpanded?: boolean;
}

export interface NodePosition {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}
