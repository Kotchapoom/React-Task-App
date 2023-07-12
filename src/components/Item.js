import "./Item.css";
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function Item(props) {
  const { data, deleteTask, editTask } = props;

  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="btn-container">
        <BsTrash3 className="btn-delete" onClick={() => deleteTask(data.id)} />
        <FaRegEdit className="btn-edit" onClick={() => editTask(data.id)} />
      </div>
    </div>
  );
}

