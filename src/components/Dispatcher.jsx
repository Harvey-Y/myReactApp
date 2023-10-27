import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TermPage from "./TermPage";
import CourseEditor from "../pages/CourseEditor";
import { useProfile } from "../utilities/profile";

const Editor = () => {
    const { id } = useParams();
    return <CourseEditor id={id} />;
};

const Dispatcher = ({data}) => {
    const [profile, profileLoading, profileError] = useProfile();

    if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
    if (profileLoading) return <h1>Loading user profile</h1>;
    if (!profile) return <h1>No profile data</h1>;

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TermPage data={data} profile={profile} />} />
            <Route path="/:id/edit" element={<Editor />} />
          </Routes>
        </BrowserRouter>
    )
};

export default Dispatcher;