# JapaneseTerminalLearn

This is simply a learning tool to learn japanese through the terminal.

I am mainly using this for my own learning, so as such, not all words will be in
here, though as i extend what I am learning, more will be added.

This is written in javascript, using Deno

run the program

```bash
deno run --allow-write --allow-read ./src/index.ts
```

I have added bash functionality to ask a question before certain commands can be
run this is in `~/.zshrc` and follows the following

```zsh
preexec () {
  if [[ $1 == 'pwd' ]]; then
    deno run <path>/JapaneseTerminalLearn/src/index.ts
  fi
}
```

will run the program before `pwd` is run

terminology:

a book is the set of all questions that can be asked a book is created from
chapters, which represent question categories, i.e. places, food

the sensei decides which questions to ask from the book, based on your previous
answers (correct/incorrect)

your previous answers are recorded in the report

the questions the sensei can ask, are determined by taking the dictionary, and
prunning it with the report, then picking the question at random
