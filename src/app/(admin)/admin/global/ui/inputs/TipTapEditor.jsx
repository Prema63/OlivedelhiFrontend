// components/TiptapEditor.jsx
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TiptapEditor = ({ label, value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(label, editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <div className="border border-gray-300 rounded-md p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;