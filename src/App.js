import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import Search from "./Search";
import DataMapping from "./DataMapping";


function App() {
  const [user, setuser] = useState("");
  const [loading, setloading] = useState(true);
  const [people, setpeople] = useState([]);

  const fetchdata = async () => {
    setloading(true);

    try {
      const response = await fetch(process.env.REACT_APP_REQUEST_URL);
      const data = await response.json();
      setpeople(data);
      setloading(false);
      console.log(data);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
    console.log(user);
  }, [user]);

  if (loading) {
    return (
      <>
        <Search />
        <Loading />
      </>
    );
  } else if (people.data.length === 0) {
    return <div>Date not found</div>;
  } else {
    const { data } = people;

    return (
      <>
        <Search setuser={setuser} user={user} />
        <DataMapping data={data} user={user} />
      </>
    );
  }
}

export default App;
