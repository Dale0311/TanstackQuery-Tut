import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../api/todos';

const Home = () => {
  const {
    data: todos,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ['todos'],
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
  return <div>{todosToDisplay}</div>;
};

export default Home;
