import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import { List } from './TaskListStyles.js';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <List>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </List>
  );
};
