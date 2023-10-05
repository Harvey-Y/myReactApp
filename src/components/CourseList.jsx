import Course from "./Course"
import './CourseList.css'

const CourseList = (schedule) => {
    const courses = schedule.courses;
    return (
        <div className="course-list">
        {Object.keys(courses).map((key) => (
            <Course key={key} course={courses[key]}/>
        ))}
        </div>
    );
};

export default CourseList;