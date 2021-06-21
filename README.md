# JapaneseTerminalLearn

This is simply a learning tool to learn japanese through the terminal.

I am mainly using this for my own learning, so as such, not all words will be in here, though as i extend what I am learning, more will be added.

This is written in javascript, using Deno

run the program

```bash
deno run ./src/index.ts
```

I have added bash functionality to ask a question before certain commands can be run
this is in `~/.zshrc` and follows the following

```zsh
preexec () {
  if [[ $1 == 'pwd' ]]; then
    deno run <path>/JapaneseTerminalLearn/src/index.ts
  fi
}
```

will run the program before `pwd` is run
