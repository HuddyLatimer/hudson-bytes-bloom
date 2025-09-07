import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
}

const CodeBlock = ({ language, code, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCode = (code: string) => {
    // Simple syntax highlighting for demo purposes
    return code
      .replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '<span class="text-gray-500">$&</span>') // Comments
      .replace(/\b(const|let|var|function|return|if|else|for|while|class|import|export|from)\b/g, '<span class="text-purple">$1</span>') // Keywords
      .replace(/(['"])([^'"]*)\1/g, '<span class="text-green-400">$&</span>') // Strings
      .replace(/\b(\d+)\b/g, '<span class="text-blue-400">$1</span>'); // Numbers
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {filename && (
            <span className="text-gray-400 text-sm ml-4">{filename}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-2 py-1 text-gray-400 hover:text-white transition-colors text-sm"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          <code 
            className="text-gray-300 font-mono"
            dangerouslySetInnerHTML={{ __html: formatCode(code) }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;