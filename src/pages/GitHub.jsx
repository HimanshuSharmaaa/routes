import React from "react";
import "./GitHub.css";
import { useEffect, useState } from "react";

const GitHub = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        setData(val);
      });
  }, []);

  return (
    <div>
      <div className="card">
        <img src={data.avatar_url ? data.avatar_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfM_PSY23w3exP_CVzj4fwbSM1CsaG61zXkA&s" } alt="Avatar" style={{width:'100%'}}/>
        <div className="container">
          <h4>
            <b>{data.name}</b>
          </h4>
          <p>{data.bio}</p>
          <p>{data.followers}</p>
          <p>{data.twitter_username}</p>
          <p>{data.created_at}</p>
        </div>
      </div>
    </div>
  );
};

export default GitHub;