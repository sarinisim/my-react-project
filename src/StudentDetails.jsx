function StudentDetails({ student, onExit }) {
  const { name, age, average } = student;

  let titleText = "";
  if (average > 90) {
    titleText = "תלמיד מצטיין";
  } else if (average < 60) {
    titleText = "טעון שיפור";
  }

  function handleExitClick() {
    const now = new Date().toLocaleTimeString("he-IL");
    console.log(`${name}- יצאת בשעה ${now}`);
    onExit();
  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
      <h3>
        {name} {titleText && <span>- {titleText}</span>}
      </h3>
      <p>גיל: {age}</p>
      <p>ממוצע ציונים: {average}</p>
      <button onClick={handleExitClick}>יציאה מבית הספר</button>
    </div>
  );
}

export default StudentDetails;