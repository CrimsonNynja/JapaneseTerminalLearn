import { normalize } from "https://deno.land/std@0.99.0/path/mod.ts";
import { Settings } from "../types/settings.ts";

const scriptPath = new URL('.', import.meta.url).pathname;
const settingsFilePath: string = normalize(`${scriptPath}../../settings.json`);

export const loadSettings = async (): Promise<Settings> => {
  const file = await Deno.readTextFile(settingsFilePath).catch(() => {
    createNewSettingsFile();
  })
  if (file) {
    return JSON.parse(file);
  }
  return {
    questionCount: 1,
    includedChapters: ["Hiragana", "Katakana"],
  };
};

export const saveSettings = async (settings: Settings) => {
  await Deno.writeTextFile(settingsFilePath, JSON.stringify(settings));
}

export const createNewSettingsFile = async () => {
  await Deno.writeTextFile(settingsFilePath, JSON.stringify({
    questionCount: 1,
  }));
}
