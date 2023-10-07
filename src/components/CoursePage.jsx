import { useState } from 'react';
import CourseList from './CourseList';

const CoursePage = (props) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <CourseList courses={props.courses} selectedTerm = {props.selectedTerm} selected={selected} toggleSelected={toggleSelected} />
  );
};

export default CoursePage;