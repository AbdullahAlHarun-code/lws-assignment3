import SingleTaskAction from "./SingleTaskAction";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { TasksContext } from "../context";

export default function SingleTask({ task }) {
  const { tasks, setTasks, taskControll } = useContext(TasksContext);
  function handdleFavourite() {
    taskControll({
      type: "TOOGLE_FAVOURITE",
      payload: { id: task.id },
    });
  }

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        {task.isFavourite ? (
          <FaStar color="yellow" onClick={handdleFavourite} />
        ) : (
          <FaStar color="grey" onClick={handdleFavourite} />
        )}
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <SingleTaskAction currentTask={task} />
      </td>
    </tr>
  );
}
