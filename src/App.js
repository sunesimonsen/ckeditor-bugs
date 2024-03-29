import React, { useState, useMemo } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

import CKEditorInspector from "@ckeditor/ckeditor5-inspector";

const initialContent = `
  <h1>Hello world</h1>
`;

const App = () => {
  const [content, setContent] = useState(initialContent);

  const onChange = (evt, editor) => {
    setContent(editor.getData());
  };

  const onReady = (editor) => {
    CKEditorInspector.attach(editor);
  };

  const config = useMemo(
    () => ({
      plugins: [Paragraph, Bold, Italic, Essentials],
      toolbar: ["bold", "italic"],
    }),
    [],
  );

  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      config={config}
      onChange={onChange}
    />
  );
};

export default App;
