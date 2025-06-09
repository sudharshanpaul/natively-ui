"use client";
import React from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Prism as SyntaxHighlighterComponent } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const SyntaxHighlighter = SyntaxHighlighterComponent as any;

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab]?.code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab]?.code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab]?.language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab]?.highlightLines || []
    : highlightLines;

  return (
    <div className="relative w-full rounded-lg bg-[#1a1a1a] font-mono text-sm border border-zinc-800">
      <div className="flex flex-col">
        {tabsExist && (
          <div className="flex overflow-x-auto border-b border-zinc-800 bg-[#1a1a1a]">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-xs transition-colors border-b-2 ${
                  activeTab === index
                    ? "text-white border-blue-500"
                    : "text-zinc-400 hover:text-zinc-200 border-transparent"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center px-4 py-2 border-b border-zinc-800 bg-[#1a1a1a]">
            <div className="text-xs text-zinc-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <SyntaxHighlighter
          language={activeLanguage}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: '16px',
            background: '#1a1a1a',
            fontSize: '13px',
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
            lineHeight: '1.5',
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            textAlign: 'right',
            userSelect: 'none',
            color: '#4a5568',
            fontSize: '13px',
          }}
          lineProps={(lineNumber: number) => ({
            style: {
              backgroundColor: activeHighlightLines.includes(lineNumber)
                ? "rgba(59, 130, 246, 0.1)"
                : "transparent",
              display: "block",
              width: "100%",
              lineHeight: "1.8"
            },
          })}
          PreTag="div"
        >
          {String(activeCode)}
        </SyntaxHighlighter>p
      </div>
    </div>
  );
};