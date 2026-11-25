import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my AI agent for a joke; it charged me $2, entered itself, won first prize, and left me holding the receipt.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
