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
  if (isLoading) {
    return <div style={{ fontSize: '46px' }}>Loading...</div>;
  }
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    mutationKey: ['todos'],
  });

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
        {/* <button
          onClick={async () => {
            try {
              await addTodoMutation({ title: todo });
              setTodo('');
            } catch (error) {
              console.log(error);
            }
          }}
        >
          add todo
        </button> */}
      </div>
      {todosToDisplay}
    </div>
  );
};

export default Home;
