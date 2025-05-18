
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-mindmap-bg to-[#151825] flex flex-col overflow-hidden relative">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-mindmap-accent/10 blur-3xl"
          initial={{ x: -100, y: -100 }}
          animate={{ 
            x: ["-5%", "5%", "-5%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-mindmap-highlight/10 blur-3xl"
          initial={{ x: 100, y: 100 }}
          animate={{ 
            x: ["5%", "-5%", "5%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <header className="relative z-10 container mx-auto py-8 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mindmap-accent to-mindmap-highlight flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M12 13v9" />
                  <path d="m9 18 3 3 3-3" />
                  <path d="M18 16h.01" />
                  <path d="M6 16h.01" />
                </svg>
              </div>
            </motion.div>
            <motion.h1 
              className="ml-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mindmap-accent via-white to-mindmap-highlight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MindNest
            </motion.h1>
          </div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ul className="flex gap-8 text-sm text-gray-300">
              <li className="hover:text-white transition-colors">Features</li>
              <li className="hover:text-white transition-colors">Examples</li>
              <li className="hover:text-white transition-colors">Pricing</li>
              <li className="hover:text-white transition-colors">Contact</li>
            </ul>
          </motion.nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-mindmap-accent to-mindmap-highlight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Visualize Your Ideas with Dynamic Mind Maps
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Transform complex thoughts into clear, interconnected nodes with our intuitive mind mapping tool. Expand, collapse, and organize your ideas effortlessly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col gap-4 sm:flex-row justify-center items-center"
          >
            <Button 
              onClick={() => navigate('/app')} 
              className="px-8 py-6 text-lg bg-gradient-to-r from-mindmap-accent to-mindmap-accent2 hover:from-mindmap-accent2 hover:to-mindmap-accent transition-all duration-300 shadow-lg shadow-mindmap-accent/20"
            >
              Get Started
            </Button>
            
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
        
        {/* Preview Image */}
        <motion.div 
          className="mt-16 w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-mindmap-accent/10">
            <div className="absolute inset-0 bg-gradient-to-br from-mindmap-accent/20 to-mindmap-highlight/20 opacity-30" />
            <img 
              src="https://placehold.co/1200x675/1a1f2c/8B5CF6?text=Mind+Map+Preview" 
              alt="Mind Map Preview" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </main>

      <section className="relative z-10 container mx-auto py-20 px-4">
        <motion.h2 
          className="text-2xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-mindmap-accent to-mindmap-highlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          Key Features
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-mindmap-accent/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mindmap-accent">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 17H6" />
                <path d="M9 12H6" />
                <path d="M9 7H6" />
                <path d="M18 17h-5" />
                <path d="M11 12h7" />
                <path d="M18 7h-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Intuitive Interface</h3>
            <p className="text-gray-400">Navigate complex thoughts with our user-friendly design that makes mapping ideas simple and enjoyable.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-mindmap-highlight/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mindmap-highlight">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="16" />
                <line x1="8" x2="16" y1="12" y2="12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expandable Nodes</h3>
            <p className="text-gray-400">Click to expand and collapse nodes, keeping your mind map organized and focused on what matters.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="w-12 h-12 rounded-lg bg-mindmap-accent2/20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mindmap-accent2">
                <path d="M4 20h16" />
                <path d="m6 16 6-12 6 12" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Hierarchy</h3>
            <p className="text-gray-400">Clearly see relationships between ideas with visual indicators that show connections and importance.</p>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>MindNest &copy; 2025 - Organize your thoughts beautifully</p>
      </footer>
    </div>
  );
};

export default LandingPage;
