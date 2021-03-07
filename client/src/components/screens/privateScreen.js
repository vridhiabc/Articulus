import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css';
import {Link} from 'react-router-dom'
import Calender from '../controllers/Calender';
import Charts from '../controllers/Chart';
import Chart2 from '../controllers/Chart2';
import Chart3 from '../controllers/Chart3';
import Chart4 from '../controllers/Chart4';

import {Redirect} from 'react-router-dom'

// import {SidebarData} from '../controllers/SidebarData';
import Sidebar from '../controllers/sidebar'

const PrivateScreen = (props) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  // const signout = () => {
  //   localStorage.removeItem("authToken")
  //   localStorage.removeItem("id");
  //   window.location.reload(false)
  // }

  const add = () => {
    <Redirect to='/create/{localstorage.getitem("id)}'/>
  }

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        // console.log(this.props.match.params.id);
        const { data } = await axios.get(`/api/private/dashboard/${props.match.params.id}`, config);
        setPrivateData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("id")
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-lg-8">
     <div className="App">
     <Sidebar/> 
     <h3>Hey {privateData.username}</h3>
     
    </div>
    <Link to="/create/"></Link>
     {console.log(privateData)}
        {/* <button className="btn btn-danger" onClick={signout}>Log Out</button> */}
    
    </div>
    </div>
    </div>
    </>
  );
};

export default PrivateScreen;
