"use client";

import React, { useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./MyEditor.css";

export default function MyEditor({ onChange, data }) {
  const editorRef = useRef();

  return (
    <div className="main-container">
      <div className="editor-container editor-container_classic-editor">
        <div className="editor-container__editor" ref={editorRef}>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={data}
            onChange={(e) => {
              const newData = e.target.value;
              onChange && onChange(newData);
            }}
            rows={10}
            placeholder="Enter your content here..."
          />
        </div>
      </div>
    </div>
  );
}
