import React from "react";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_m, label, href) =>
      `<a href="${href}" class="text-gold hover:underline">${label}</a>`
  );
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  return html;
}

export function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    if (trimmed === "---") {
      elements.push(
        <hr
          key={key++}
          className="my-10 border-t border-border"
        />
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="font-[family-name:var(--font-serif)] text-xl font-bold text-navy mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote
          key={key++}
          className="my-6 border-l-4 border-gold bg-cream/60 px-5 py-4 rounded-r-lg text-foreground/90 leading-[1.7]"
          dangerouslySetInnerHTML={{ __html: renderInline(buf.join(" ")) }}
        />
      );
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={key++}
          className="list-decimal pl-6 my-4 space-y-2 text-foreground/80 leading-[1.7] marker:text-gold marker:font-semibold"
        >
          {items.map((it, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{ __html: renderInline(it) }}
            />
          ))}
        </ol>
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul
          key={key++}
          className="list-disc pl-6 my-4 space-y-2 text-foreground/80 leading-[1.7] marker:text-gold"
        >
          {items.map((it, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{ __html: renderInline(it) }}
            />
          ))}
        </ul>
      );
      continue;
    }

    // paragraph: gather consecutive non-empty, non-special lines
    const para: string[] = [line];
    i++;
    while (i < lines.length) {
      const next = lines[i];
      const nextTrim = next.trim();
      if (
        nextTrim === "" ||
        nextTrim === "---" ||
        next.startsWith("## ") ||
        next.startsWith("### ") ||
        next.startsWith("> ") ||
        nextTrim.startsWith("- ") ||
        /^\d+\.\s/.test(nextTrim)
      ) {
        break;
      }
      para.push(next);
      i++;
    }
    elements.push(
      <p
        key={key++}
        className="text-foreground/80 leading-[1.7] mb-4"
        dangerouslySetInnerHTML={{ __html: renderInline(para.join(" ")) }}
      />
    );
  }

  return elements;
}
