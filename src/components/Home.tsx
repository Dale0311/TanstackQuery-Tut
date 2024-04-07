import { useMutation, useQuery } from '@tanstack/react-query';
import { addTodo, fetchTodos } from '../api/todos';
import { useState } from 'react';

const Home = () => {
  const {
    data: todos,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos'],
  });

  const [todo, setTodo] = useState('');
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    mutationKey: ['todos'],
  });
  if (isLoading) {
    return <div style={{ fontSize: '46px' }}>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const todosToDisplay = todos?.map((todo) => (
    <div key={todo.id}>{todo.title}</div>
  ));

  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={async () => {
            await addTodoMutation({ title: todo });
            setTodo('');
          }}
        >
          add todo
        </button>
      </div>
      {todosToDisplay}
    </div>
  );
};

export default Home;
