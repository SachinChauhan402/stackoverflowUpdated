import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./CSS/Index.css";
import axios from "axios";

const Index = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios
        .get("https://sobackend.onrender.com/api/question")
        .then((res) => {
          console.log(res.data);
          setQuestions(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getQuestion();
  }, []);

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
      </div>
    </div>
  );
};

export default Index;
