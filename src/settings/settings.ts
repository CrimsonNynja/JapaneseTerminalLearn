import { normalize } from "https://deno.land/std@0.99.0/path/mod.ts";
import { SCRIPT_PATH } from "../constants/constants.ts";

export type Settings = {
  questionCount: number;
  activationCommands: string[];
  includedChapters: string[];
  jlp?: number;
}

const settingsFilePath: string = normalize(`${SCRIPT_PATH}../../settings.json`);

const defaultSettings: Settings = {
  questionCount: 1,
  activationCommands: ["pwd"],
  includedChapters: ["Hiragana", "Katakana"],
};

/**
 * loads the settings from the file
 * @returns {Promise<Settings>} the loaded settings
 */
export const loadSettings = async (): Promise<Settings> => {
  const file = await Deno.readTextFile(settingsFilePath).catch(() => {
    createNewSettingsFile();
  });
  if (file) {
    return JSON.parse(file);
  }
  return defaultSettings;
};

/**
 * saves the given settings file
 * @param {Settings} settings the file to save
 */
export const saveSettings = async (settings: Settings) => {
  await Deno.writeTextFile(settingsFilePath, JSON.stringify(settings));
}

/**
 * creates a new settings file at the root of the project with default values
 */
export const createNewSettingsFile = async () => {
  await Deno.writeTextFile(settingsFilePath, JSON.stringify(defaultSettings));
};
