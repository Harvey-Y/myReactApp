const Course = ({course}) => (
    <div className="card m-2 p-2">
        <div className="card-body">
            <h3 className="card-title">{course.term} CS {course.number}</h3>
            <p className="card-text">{course.title}</p>
        </div>
        <p className="card-footer bg-transparent">{course.meets}</p>
    </div>
);

export default Course;