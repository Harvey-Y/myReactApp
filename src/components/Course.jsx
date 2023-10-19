import './Course.css';
import { conflicts } from '../utilities/timeConflict';
import { Link } from 'react-router-dom';

const Course = ({id, course, selected, toggleSelected, conflicting}) => (
    <div className="card m-2 p-2" onClick={() => {if (!conflicting || selected.includes(id)) {toggleSelected(id)}} }>
        <div className={`card-body ${selected.includes(id) ? 'selected' : ''} ${conflicting ? 'conflict' : ''}`}>
            <Link to={`${id}/edit`} className={"position-absolute top-0 end-0"} >
                <button className="btn">
                    <i className="bi bi-pencil-square text-info"></i>
                </button>
            </Link>

            <div className="card-body">
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
            </div>
            <p className="card-footer bg-transparent">{course.meets}</p>
        </div>
    </div>
);

export default Course;