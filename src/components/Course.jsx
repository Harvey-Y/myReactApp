import './Course.css';
import { conflicts } from '../utilities/timeConflict';

const Course = ({id, course, selected, toggleSelected, conflicting}) => (
    <div className="card m-2 p-2" onClick={() => {if (!conflicting || selected.includes(id)) {toggleSelected(id)}} }>
        <div className={`card-body ${selected.includes(id) ? 'selected' : ''} ${conflicting ? 'conflict' : ''}`}>
            <div className="card-body">
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
            </div>
            <p className="card-footer bg-transparent">{course.meets}</p>
        </div>
    </div>
);

export default Course;