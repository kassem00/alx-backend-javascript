export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const newTask = true;
    const newTask2 = false;
    return [newTask, newTask2];
  }
  return [task, task2];
}
