import {useEffect, useState} from 'react';
import {TaskItem} from "./TaskItem.tsx";
import type {Task} from "./TaskType.ts";

export const TaskPage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const refreshData = () => {
        const task1: Task = {'id': 1, 'title': 'First Task', 'description': 'get task component built.'};
        const task2: Task = {'id': 2, 'title': 'Second Task', 'description': 'use new task component.'};
        return ([task1, task2]);
    }
    useEffect(() => {
       setTasks(refreshData());
    }, [])

    return (
        <>
        <h1>Task List</h1>
            <ul>
                {tasks.map(task => {
                    return <TaskItem
                        key={task.id}
                        initialTask={task}
                    />
                })}
            </ul>
        </>
    );
};
