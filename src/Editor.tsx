import "ress";
import "./App.css";
import { useState } from "react";
import { EditorState, Klass, LexicalEditor, LexicalNode } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { RenderMarkdownPlugin } from "./plugins/RenderMarkdownPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { theme } from "./EditorTheme";
import { registerCodeHighlighting } from "@lexical/code";

const nodes: Klass<LexicalNode>[] = [
  HeadingNode,
  QuoteNode,
  ListItemNode,
  ListNode,
  CodeNode,
  CodeHighlightNode,
];

const initialConfig: React.ComponentProps<
  typeof LexicalComposer
>["initialConfig"] = {
  namespace: "MarkdownEditor",
  onError: (error) => console.error(error),
  nodes,
  theme,
};

export const Editor: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>("");

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const markdownText = $convertToMarkdownString(TRANSFORMERS);
      setMarkdownText(markdownText);
    });
  };

  const onChangeRenderedMarkdown = (
    editorState: EditorState,
    editor: LexicalEditor,
  ) => {
    return registerCodeHighlighting(editor);
  };

  return (
    <div className="container">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="editor-container markdown-editor">
          <PlainTextPlugin
            contentEditable={<ContentEditable className="content-editable" />}
            placeholder={<div className="placeholder">Enter some text...</div>}
          />
        </div>
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
      <LexicalComposer
        initialConfig={{
          namespace: "RenderedMarkdown",
          onError: (error) => console.error(error),
          nodes,
          editable: false,
          theme,
        }}
      >
        <div className="editor-container">
          <RichTextPlugin
            contentEditable={<ContentEditable className="content-editable" />}
            placeholder={""}
          />
        </div>
        <RenderMarkdownPlugin markdownText={markdownText} />
        <OnChangePlugin onChange={onChangeRenderedMarkdown} />
      </LexicalComposer>
    </div>
  );
};
