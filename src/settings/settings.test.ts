import { assertEquals } from "https://deno.land/std@0.101.0/testing/asserts.ts";
import { Stub, stub } from "https://deno.land/x/mock@v0.10.0/stub.ts";
import { Settings, loadSettings } from "./settings.ts";

Deno.test('loadSettings', async () => {
  const fileStub: Stub<typeof Deno> = stub(Deno, 'readTextFile');
  fileStub.returns = [Promise.resolve('{"questionCount":3,"includedChapters":["Hiragana"],"activationCommands":["pwd"]}')];

  const expectedSettings: Settings = {
    questionCount: 3,
    includedChapters: ["Hiragana"],
    activationCommands: ["pwd"],
  }

  assertEquals(await loadSettings(), expectedSettings);
});
