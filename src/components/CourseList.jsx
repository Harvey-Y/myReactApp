import Course from "./Course"
import './CourseList.css'

const CourseList = (props) => {
    const courses = props.courses;
    const selectedCourses = Object.keys(courses).filter((key) => courses[key].term === props.selectedTerm);
    return (
        <div className="course-list">
            {selectedCourses.map((key) => (
                <Course key={key} course={courses[key]}/>
            ))}
        </div>
    );
};

export default CourseList;