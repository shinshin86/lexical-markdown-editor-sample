import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";

export const RenderMarkdownPlugin: React.FC<{ markdownText: string }> = (
  { markdownText },
) => {
  const [editor] = useLexicalComposerContext();

  editor.update(() => {
    $convertFromMarkdownString(markdownText, TRANSFORMERS);
  });

  return null;
};
