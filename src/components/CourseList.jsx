import Course from "./Course"
import './CourseList.css'

const CourseList = (props) => {
    const courses = props.courses;
    const selectedCourses = Object.keys(courses).filter((key) => courses[key].term === props.selectedTerm);
    return (
        <div className="course-list">
            {selectedCourses.map((key) => (
                <Course id={key} course={courses[key]} selected={props.selected} toggleSelected={props.toggleSelected}/>
            ))}
        </div>
    );
};

export default CourseList;