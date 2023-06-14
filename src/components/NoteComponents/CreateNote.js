import LinearProgress from "@mui/material/LinearProgress";

const CreateNotes = ({ textHandler, saveHandler, inputText }) => {
    const charLimit = 100;
    const charLeft = charLimit -inputText.length;
  return (
    <div className="note">
      <textarea
        onChange={textHandler}
        value={inputText}
        name=""
        id=""
        cols="10"
        rows="5"
        placeholder="Type..."
        maxlength="100"
      ></textarea>
      <div className="note__footer">
        <span className="lable">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>Save</button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
};
export default CreateNotes;
