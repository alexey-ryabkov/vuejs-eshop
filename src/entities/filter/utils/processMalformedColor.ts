export default function processMalformedColor(input: string): string {
  if (input == "PRODUCT(RED)") {
    return "Красный";
  }

  const spacesCount = input.match(/\s/g);
  if (!spacesCount || spacesCount.length < 2) {
    return input;
  }

  const colors = new Set<string>();

  for (const part of input.split(/,\s*/)) {
    const quoted = part.match(/цвета?\s*[«"](.*?)[»"]/i);
    if (quoted) {
      colors.add(quoted[1]);
      continue;
    }

    const adj = part.match(/([а-яё-]+(?:ого|его|ий|ой|ый))\s*цвета?/i);
    if (adj) {
      colors.add(adj[1]);
    }
  }

  return [...colors].join(", ");
}
