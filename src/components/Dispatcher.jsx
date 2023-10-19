import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TermPage from "./TermPage";
import CourseEditor from "../pages/CourseEditor";

const Editor = () => {
    const { id } = useParams();
    return <CourseEditor id={id} />;
};

const Dispatcher = ({data}) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TermPage data={data} />} />
      <Route path="/:id/edit" element={<Editor />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;