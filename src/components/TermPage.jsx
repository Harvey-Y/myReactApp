import { useState } from "react";
import Banner from './Banner';
import Modal from './Modal';
import Cart from "./Cart";
import CourseList from './CourseList';

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
    { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    { 
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const TermPage = (props) => {
  const data = props.data;
  const [termSelection, setTerm] = useState(() => Object.keys(terms)[0]);
  const [selectedClass, setClass] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleSelected = (item) => setClass(
    selectedClass.includes(item)
    ? selectedClass.filter(x => x !== item)
    : [...selectedClass, item]
  );

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Banner title={data.title} />
      <div>
        <TermSelector selection={termSelection} setSelection={setTerm} />
        <button className="ms-auto btn btn-outline-dark" onClick={openModal}><i className="bi bi-cart4"></i>Course Plan</button>
      </div>
      <Modal open={open} close={closeModal}>
          <Cart selected={selectedClass} courses={data.courses}/>
      </Modal>
      <CourseList courses={data.courses} selectedTerm = {termSelection} selected={selectedClass} toggleSelected={toggleSelected} profile={props.profile} />
    </div>
  );
}

export default TermPage;