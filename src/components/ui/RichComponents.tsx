"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, File, Bold, Italic, AlignLeft, AlignCenter, AlignRight, Code, Trash2 } from "lucide-react";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";

// 1. Rich Text Editor Component
export interface RichTextEditorProps {
  defaultValue?: string;
  className?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  defaultValue = "Write your release announcement notes here...",
  className = "",
}) => {
  const [content, setContent] = useState(defaultValue);
  const [activeFormats, setActiveFormats] = useState<string[]>([]);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("left");

  const toggleFormat = (format: string) => {
    setActiveFormats((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
    );
  };

  const getFormatClasses = () => {
    let classes = "";
    if (activeFormats.includes("bold")) classes += " font-extrabold";
    if (activeFormats.includes("italic")) classes += " italic";
    if (activeFormats.includes("code")) classes += " font-mono bg-slate-950 px-1 py-0.5 rounded text-blue-400 border border-slate-900";
    
    const alignClasses = {
      left: " text-left",
      center: " text-center",
      right: " text-right",
    };
    classes += alignClasses[alignment];

    return classes;
  };

  return (
    <div className={`border border-slate-800/80 bg-slate-950/20 rounded-xl overflow-hidden backdrop-blur-md flex flex-col selection:bg-blue-600 selection:text-white ${className}`}>
      {/* Editor Formatting Toolbar */}
      <div className="flex flex-wrap items-center gap-1 px-4 py-2 border-b border-slate-850/60 bg-slate-950/30">
        <Button
          variant={activeFormats.includes("bold") ? "secondary" : "ghost"}
          size="sm"
          isIconOnly
          className="h-8 w-8"
          onClick={() => toggleFormat("bold")}
        >
          <Bold className="w-3.5 h-3.5" />
        </Button>
        
        <Button
          variant={activeFormats.includes("italic") ? "secondary" : "ghost"}
          size="sm"
          isIconOnly
          className="h-8 w-8"
          onClick={() => toggleFormat("italic")}
        >
          <Italic className="w-3.5 h-3.5" />
        </Button>

        <Button
          variant={activeFormats.includes("code") ? "secondary" : "ghost"}
          size="sm"
          isIconOnly
          className="h-8 w-8"
          onClick={() => toggleFormat("code")}
        >
          <Code className="w-3.5 h-3.5" />
        </Button>

        <span className="w-px h-5 bg-slate-800/80 mx-1" />

        <Button
          variant={alignment === "left" ? "secondary" : "ghost"}
          size="sm"
          isIconOnly
          className="h-8 w-8"
          onClick={() => setAlignment("left")}
        >
          <AlignLeft className="w-3.5 h-3.5" />
        </Button>

        <Button
          variant={alignment === "center" ? "secondary" : "ghost"}
          size="sm"
          isIconOnly
          className="h-8 w-8"
          onClick={() => setAlignment("center")}
        >
          <AlignCenter className="w-3.5 h-3.5" />
        </Button>

        <Button
          variant={alignment === "right" ? "secondary" : "ghost"}
          size="sm"
          isIconOnly
          className="h-8 w-8"
          onClick={() => setAlignment("right")}
        >
          <AlignRight className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* Editor Content Area */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className={`w-full p-4 bg-transparent text-xs text-slate-300 placeholder:text-slate-600 focus:outline-none resize-none leading-relaxed min-h-[120px] ${getFormatClasses()}`}
      />
    </div>
  );
};

// 2. Drag & Drop File Upload Component
export interface FileUploadProps {
  onUploadComplete?: (fileName: string) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  className = "",
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const simulateUpload = (fileName: string) => {
    setUploadedFile(null);
    setUploadProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadProgress(null);
          setUploadedFile(fileName);
          if (onUploadComplete) onUploadComplete(fileName);
        }, 300);
      }
    }, 150);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      simulateUpload(file.name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload(e.target.files[0].name);
    }
  };

  const handleTriggerInput = () => {
    fileInputRef.current?.click();
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedFile(null);
  };

  return (
    <div className={`w-full selection:bg-blue-600 selection:text-white ${className}`}>
      {/* Upload Drag Target */}
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={handleTriggerInput}
        className={`w-full p-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 backdrop-blur-md bg-slate-950/10
          ${
            isDragActive
              ? "border-blue-500 bg-blue-500/5"
              : uploadedFile
              ? "border-green-500/60 bg-green-500/5"
              : "border-slate-800 hover:border-slate-700"
          }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        {uploadProgress !== null ? (
          /* Running upload status */
          <div className="w-full max-w-xs flex flex-col gap-3">
            <span className="text-xs text-slate-400 font-semibold animate-pulse">Uploading asset...</span>
            <ProgressBar value={uploadProgress} variant="primary" size="sm" />
          </div>
        ) : uploadedFile ? (
          /* Finished status box */
          <div className="flex items-center gap-3 w-full justify-between max-w-xs bg-slate-900 border border-green-500/20 px-4 py-2.5 rounded-xl animate-fade-in">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <File className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-200 truncate">{uploadedFile}</span>
            </div>
            <button
              onClick={handleClear}
              className="p-1 rounded-lg text-slate-500 hover:bg-slate-850 hover:text-red-400 transition-colors"
              aria-label="Remove file"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          /* Empty ready target prompt */
          <div className="flex flex-col items-center gap-3">
            <UploadCloud className={`w-8 h-8 ${isDragActive ? "text-blue-400 animate-bounce" : "text-slate-500"}`} />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-300">
                Drag & drop files here, or <span className="text-blue-400 underline">browse</span>
              </span>
              <span className="text-[10px] text-slate-500">Supports PDF, JSON, PNG up to 10MB</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
