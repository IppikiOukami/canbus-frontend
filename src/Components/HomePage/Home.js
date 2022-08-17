import React, {useState} from "react";
import {authn} from "../commonComponents/Authentication";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [initials, setInitials] = useState('');

    const handleSubmit = () => {
        if(!authn(initials)){
            return navigate("/NoAccess");
        }
        return navigate('/CBViz');
    }

    return (
      <div>
          <h1>Home</h1>
          <input placeholder='Enter Initials' onChange={(e) => setInitials(e.target.value)} />
          <button onClick={handleSubmit}>Access Visualizer</button>
      </div>
    );
};

export default Home;