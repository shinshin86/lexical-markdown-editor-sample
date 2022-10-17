import "ress";
import "./App.css";
import { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { RenderMarkdownPlugin } from "./plugins/RenderMarkdownPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState } from "lexical";
import { CodeHighlightPlugin } from "./plugins/CodeHighlightPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { Klass, LexicalNode } from "lexical";

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
};

export const Editor: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>("");

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const markdownText = $convertToMarkdownString(TRANSFORMERS);
      setMarkdownText(markdownText);
    });
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
        }}
      >
        <div className="editor-container">
          <RichTextPlugin
            contentEditable={<ContentEditable className="content-editable" />}
            placeholder={""}
          />
        </div>
        <RenderMarkdownPlugin markdownText={markdownText} />
        <CodeHighlightPlugin />
      </LexicalComposer>
    </div>
  );
};
