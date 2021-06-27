const args = Deno.args[0]?.split(' ');

const commands = [
  'pwd',
  'brew',
  'code'
];

export const shouldRunOnCommand = () => {
  if (args === undefined) {
    return true;
  }

  let ret = false;
  commands.forEach((command) => {
    args.forEach((arg) => {
      if (command === arg) {
        ret = true;
      }
    });
  });
  return ret;
}
