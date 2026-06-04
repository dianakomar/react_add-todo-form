import users from '../../api/users';
import { UserInfo } from '../UserInfo';

type Props = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user?: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
};

export const TodoInfo = ({ todo }: { todo: Props }) => {
  const user = users.find(u => u.id === todo.userId);

  return (
    <article
      key={todo.id}
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
