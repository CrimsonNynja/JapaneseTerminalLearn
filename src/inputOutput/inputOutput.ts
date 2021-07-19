import { writeAll } from "https://deno.land/std@0.99.0/io/util.ts";

export const getLine = async () => {
  const buffer: Uint8Array = new Uint8Array(1024);
  const bytes: number|null = await Deno.stdin.read(buffer);
  if (bytes) {
    const line: string = new TextDecoder().decode(buffer.subarray(0, bytes)).trim();
    return line;
  }

  return '';
};

export const write = async (message: string) => {
  const text: Uint8Array = new TextEncoder().encode(message);
  await writeAll(Deno.stdout, text);
};
