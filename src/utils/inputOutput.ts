export const getLine = async () => {
  const buffer: Uint8Array = new Uint8Array(1024);
  const bytes: number = <number>await Deno.stdin.read(buffer);
  const line: string = new TextDecoder().decode(buffer.subarray(0, bytes)).trim();

  return line;
};

export const write = (message: string) => {
  const text: Uint8Array = new TextEncoder().encode(message);
  Deno.writeAll(Deno.stdout, text);
};
