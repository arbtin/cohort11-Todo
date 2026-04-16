import type { Task } from './TaskType.ts';

type TaskItemProps = {
  initialTask: Task;
};

export const TaskItem = ({ initialTask }: TaskItemProps) => {
  return (
    <li
      className="p-1 card"
      aria-label={`Task ${initialTask.id}`}
      id={initialTask.id}
    >
      <b>{initialTask.title}</b><br/> {initialTask.description}
    </li>
  );
};
