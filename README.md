# JapaneseTerminalLearn

[![Deno](https://github.com/CrimsonNynja/JapaneseTerminalLearn/actions/workflows/deno.yml/badge.svg)](https://github.com/CrimsonNynja/JapaneseTerminalLearn/actions/workflows/deno.yml)

This is simply a learning tool to me learn japanese kanji and words through the terminal.

I am mainly using this for my own learning, so as such, not all words will be in
here, though as I extend what I am learning, more will be added. Feel free to fork this to add your own dictionaries if you wish.

This is written in typescript, using [Deno](https://deno.land/)

to run the program

```bash
deno run --allow-write --allow-read --allow-write --allow-read ./src/index.ts
```

This will create for you an empty `reportCard.json` and `settings.json` files at the root of your project files. The settings file should be edited to suit your own needs as describe here:

```js
{
  // the amount of questions to ask per invocation
  "questionCount": 3,
  // an array of commands to trigger on if using the method below
  "activationCommands": [],
  // which chapters to include in the questions
  "includedChapters": []
}
```

I use this in conjunction with [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) to force a question everytime I run a command in the `activationCommands` section in the settings file. To set this up, open the `~/.zshrc` file, and add the following to your `preexec` function

```zsh
preexec () {
    deno run <path>/JapaneseTerminalLearn/src/index.ts $1
}
```

This will cause the program to halt commands until you get correct answers.

you can also check your reportCard by passing the review argument into the program. The `ReportCard.json` keeps track of you correct answers and will decrease the score of a question if it is answers incorrectly. When a question has hit a score of 5, it will stop being asked, and be removed from the question pool.
