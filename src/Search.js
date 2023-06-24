import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ setuser, user }) => {
  const [helper, sethelper] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (helper) {
      setuser(helper);
    } else {
      setuser("");
    }
    console.log(helper, user);
    sethelper("");
  };

  return (
    <section className="sec">
      <form onSubmit={handlesubmit}>
        <div className="form-control">
          <MdSearch />
          <input
            type="text"
            placeholder="  Search"
            value={helper}
            onChange={(e) => {
              sethelper(e.target.value);
            }}
          ></input>

          <button type="submit">search</button>
        </div>
      </form>
    </section>
  );
};
export default Search;
