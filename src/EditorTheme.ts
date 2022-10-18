import "./EditorTheme.css";
import type { EditorThemeClasses } from "lexical";

/**
 * This code is based on the code of the lexical project.
 * URL: https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/themes/PlaygroundEditorTheme.ts (commit 343a00670695084f561ac832543b519af76566f8)
 */
export const theme: EditorThemeClasses = {
  code: "code",
  codeHighlight: {
    atrule: "tokenAttr",
    attr: "tokenAttr",
    boolean: "tokenProperty",
    builtin: "tokenSelector",
    cdata: "tokenComment",
    char: "tokenSelector",
    class: "tokenFunction",
    "class-name": "tokenFunction",
    comment: "tokenComment",
    constant: "tokenProperty",
    deleted: "tokenProperty",
    doctype: "tokenComment",
    entity: "tokenOperator",
    function: "tokenFunction",
    important: "tokenVariable",
    inserted: "tokenSelector",
    keyword: "tokenAttr",
    namespace: "tokenVariable",
    number: "tokenProperty",
    operator: "tokenOperator",
    prolog: "tokenComment",
    property: "tokenProperty",
    punctuation: "tokenPunctuation",
    regex: "tokenVariable",
    selector: "tokenSelector",
    string: "tokenSelector",
    symbol: "tokenProperty",
    tag: "tokenProperty",
    url: "tokenOperator",
    variable: "tokenVariable",
  },
  heading: {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  },
  list: {
    listitem: "listItem",
    listitemChecked: "listItemChecked",
    listitemUnchecked: "listItemUnchecked",
    nested: {
      listitem: "nestedListItem",
    },
    olDepth: [
      "ol1",
      "ol2",
      "ol3",
      "ol4",
      "ol5",
    ],
    ul: "ul",
  },
  paragraph: "paragraph",
  quote: "quote",
  text: {
    bold: "textBold",
    code: "textCode",
    italic: "textItalic",
    strikethrough: "textStrikethrough",
    subscript: "textSubscript",
    superscript: "textSuperscript",
    underline: "textUnderline",
    underlineStrikethrough: "textUnderlineStrikethrough",
  },
};
