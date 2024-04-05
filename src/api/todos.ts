import { TodoType } from '../types/TodoType';

const todos = [
  {
    id: 1,
    title: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn CSS',
    completed: false,
  },
  {
    id: 3,
    title: 'Learn Javascript',
    completed: false,
  },
  {
    id: 4,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 5,
    title: 'Learn Next.js',
    completed: false,
  },
];

export const fetchTodos = (): Promise<TodoType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos); // Assuming todos is defined somewhere
    }, 2000); // Adjust the timeout value (in milliseconds) as needed
  });
};
