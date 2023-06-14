import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";

const Note = ({note, deleteNote}) => {
  return (
    <div className="note">
      <div className="note__body">{note.text}</div>
      <div className="footer">
        <DeleteForeverOutlined className="note__delelte" onClick={()=>deleteNote(note.id)}/>
      </div>
    </div>
  );
};
export default Note;
