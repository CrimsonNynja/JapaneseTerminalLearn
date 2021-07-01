import { Settings } from "../types/settings.ts";

/**
 * enum for the command type
 * @readonly
 * @enum {string}
 */
export enum Command {
  REVIEW = 'review',
  QUIZ = 'quiz',
  QUIT = 'quit',
}

/**
 * determines if the program should run a review or a quiz
 * @param {string[]} args the args passed to the system
 * @returns {Command}
 */
export const getCommandType = (args: string[], settings: Settings): Command => {
  if (args[0] === 'review') {
    return Command.REVIEW;
  } else if (shouldRunOnActivationCommands(args, settings)) {
    return Command.QUIZ;
  }
  return Command.QUIT;
};

/**
 * gets and parses all args passed to this program
 * @returns {string[]} an array of all args passed to the program
 */
export const parseCommandLineArgs = (): string[] => {
  return Deno.args[0]?.split(' ');
}

/**
 * determines if any activations commands have been triggered
 * @param {string[]} args the args passed to the program
 * @param {Settings} settings the settings of the user
 * @returns {boolean} if the activation commands should be triggered
 */
export const shouldRunOnActivationCommands = (args: string[], settings: Settings): boolean => {
  let ret = false;

  settings.activationCommands.forEach((command: string) => {
    args.forEach((arg: string) => {
      if (arg === command) {
        ret = true;
        return;
      }
    });
  });

  return ret;
}
