import Course from "./Course"
import './CourseList.css'
import { conflicts } from "../utilities/timeConflict";

const CourseList = (props) => {
    const courses = props.courses;
    const selectedCourses = Object.keys(courses).filter((key) => courses[key].term === props.selectedTerm);
    return (
        <div className="course-list">
            {selectedCourses.map((key) => (
                <Course id={key} course={courses[key]} selected={props.selected} toggleSelected={props.toggleSelected} conflicting={props.selected.filter(id => conflicts(courses[id], courses[key])).length > 0} profile={props.profile} />
            ))}
        </div>
    );
};

export default CourseList;