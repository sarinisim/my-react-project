import CourseDetails from "./CourseDetails";

function PersonDetails({ name, age }) {
  return (
    <div>
      <h2>פרטים אישיים</h2>
      <p>שם: {name}</p>
      <p>גיל: {age}</p>

      <h3>קורסים</h3>
      <CourseDetails courseName="מדעי המחשב" grade={95} />
      <CourseDetails courseName="מתמטיקה" grade={90} />
    </div>
  );
}

export default PersonDetails;