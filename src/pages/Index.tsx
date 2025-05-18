
import { Link } from "react-router-dom";
import MindMap from "../components/MindMap";
import { ChevronLeft } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mindmap-bg to-mindmap-node flex flex-col">
      <header className="py-6 text-center relative">
        <Link to="/" className="absolute left-6 top-6 flex items-center text-gray-400 hover:text-white transition-colors">
          <ChevronLeft size={16} className="mr-1" />
          <span>Back to Home</span>
        </Link>
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
        <p>MindNest &copy; 2025</p>
      </footer>
    </div>
  );
};

export default Index;
