import table from "@editorjs/table";
import list from "@editorjs/list";
import image from "@editorjs/simple-image";
import header from "@editorjs/header";
import inlineCode from "@editorjs/inline-code";

export const EDITOR_TOOLS = {
  header,
  list,
  table,
  image,
  inlineCode
};

export const REVIEW_TEMPLATE = [
  {
    "type": "paragraph",
    "data": {
      "text": "Beste [Student],"
    }
  },
  {
    "type": "paragraph",
    "data": {
      "text": "Je hebt het project [beoordeling] gedaan, je krijgt van ons een [kleur] status."
    }
  },
  {
    "type": "paragraph",
    "data": {
      "text": "<b>Requirements</b>"
    }
  },
  {
    "type": "list",
    "data": {
      "style": "ordered",
      "items": [
        "✔️ Afgevinkt",
        "❌ Niet gedaan"
      ]
    }
  },
  {
    "type": "paragraph",
    "data": {
      "text": "<b>Wat je goed hebt gedaan 🚀</b>"
    }
  },
  {
    "type": "list",
    "data": {
      "style": "unordered",
      "items": [
        "Positief punt"
      ]
    }
  },
  {
    "type": "paragraph",
    "data": {
      "text": "<b>Wat beter kan</b>"
    }
  },
  {
    "type": "list",
    "data": {
      "style": "unordered",
      "items": [
        "Verbeterpunt"
      ]
    }
  },
  {
    "type": "paragraph",
    "data": {
      "text": "Met vriendelijke groet,"
    }
  },
  {
    "type": "paragraph",
    "data": {
      "text": "De Winc docenten"
    }
  }
];
