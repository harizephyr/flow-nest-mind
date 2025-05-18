
import MindMap from "../components/MindMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mindmap-bg to-mindmap-node flex flex-col">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mindmap-accent to-mindmap-highlight mb-2">
          Mind Map Builder
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto px-4">
          Create beautiful mind maps with auto-expanding nodes. Click on nodes to expand/collapse, 
          or hover to see edit options. Double-click any text to edit it.
        </p>
      </header>
      
      <main className="flex-1 px-2 md:px-6 py-8 overflow-hidden">
        <MindMap />
      </main>
      
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>Mind Map Builder &copy; 2025</p>
      </footer>
    </div>
  );
};

export default Index;
