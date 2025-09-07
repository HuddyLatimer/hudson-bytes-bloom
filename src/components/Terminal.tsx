import { useState, useEffect } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from "lucide-react";

interface TerminalProps {
  commands: Array<{
    command: string;
    output: string | JSX.Element;
    delay?: number;
  }>;
}

const Terminal = ({ commands }: TerminalProps) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const timer = setTimeout(() => {
        setCurrentCommand(prev => prev + 1);
      }, commands[currentCommand]?.delay || 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentCommand, commands]);

  return (
    <div className={`bg-black/90 backdrop-blur-sm rounded-lg border border-gray-700 shadow-2xl transition-all duration-300 ${
      isMinimized ? 'h-12' : 'h-96'
    }`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <TerminalIcon className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">hudson@portfolio:~</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      {!isMinimized && (
        <div className="p-4 h-80 overflow-y-auto font-mono text-sm">
          {commands.slice(0, currentCommand).map((cmd, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2 text-green-400">
                <span className="text-cyan">$</span>
                <span className="animate-fade-in">{cmd.command}</span>
              </div>
              <div className="mt-1 text-gray-300 animate-fade-in">
                {typeof cmd.output === 'string' ? cmd.output : cmd.output}
              </div>
            </div>
          ))}
          {currentCommand < commands.length && (
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-cyan">$</span>
              <span className="animate-pulse">_</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Terminal;