import React from "react";

const CourseList = (schedule) => {
    const courses = schedule.courses;
    return (
        <div>
        {Object.keys(courses).map((key) => (
            <p key={key}> {courses[key].term} CS {courses[key].number}: {courses[key].title} </p>
        ))}
        </div>
    );
};

export default CourseList;