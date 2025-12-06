// src/components/admin/QuillEditor.jsx
import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value || "");
  const quillInstance = useRef(null);

  useEffect(() => {
    setEditorHtml(value || "");
  }, [value]);

  const handleChange = (html) => {
    setEditorHtml(html);
    onChange(html);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  // Store the quill instance
  const handleQuillRef = (quill) => {
    quillInstance.current = quill;
  };

  return (
    <div className="quill-editor-container" ref={handleQuillRef}>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
        style={{ height: "400px", marginBottom: "50px" }}
      />
    </div>
  );
};

export default QuillEditor;
