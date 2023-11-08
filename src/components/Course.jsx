import './Course.css';
import { conflicts } from '../utilities/timeConflict';
import { useAuthState } from '../utilities/firebase';
import { Link } from 'react-router-dom';

const Course = ({id, course, selected, toggleSelected, conflicting, profile}) => {
    return (
        <div className="course card m-1 p-2" data-cy="course" onClick={() => {if (!conflicting || selected.includes(id)) {toggleSelected(id)}}}>
            <div className={`card-body ${selected.includes(id) ? 'selected' : ''} ${conflicting ? 'conflict' : ''}`}>
                {profile?.isAdmin 
                ? <Link to={`${id}/edit`} className={"position-absolute top-0 end-0"} >
                    <button className="btn">
                        <i className="bi bi-pencil-square text-info"></i>
                    </button>
                </Link>
                : null}

                <div className="card-body">
                    <h3 className="card-title">{course.term} CS {course.number}</h3>
                    <p className="card-text">{course.title}</p>
                </div>
                <p className="card-footer bg-transparent">{course.meets}</p>
            </div>
        </div>
    )
};

export default Course;