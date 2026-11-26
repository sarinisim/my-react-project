import StudentDetails from "./StudentDetails";

const students = [
  { id: 1, name: "דני", age: 16, average: 95 },
  { id: 2, name: "רון", age: 17, average: 75 },
  { id: 3, name: "מיכאל", age: 16, average: 55 },
];

function School() {
  function handleGateOpen() {
    console.log("השער נפתח");
  }

  return (
    <div>
      <h2>בית ספר</h2>
      {students.map((student) => (
        <StudentDetails
          key={student.id}
          student={student}
          onExit={handleGateOpen}
        />
      ))}
    </div>
  );
}

export default School;