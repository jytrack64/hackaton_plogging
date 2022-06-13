import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Menubar from "./component/Menubar";
import Main from "./component/main/Main";
import Login from "./component/user/Login";
import Register from "./component/user/Register";
import Festival from "./component/festival/Festival";
import Profile from "./component/profile/Profile";
import DetailFestival from "./component/festival/DetailFestival";
import Running from "./component/running/Running";
import Writing from "./component/profile/Writing";
import Comment from "./component/profile/Writing";

import "./css/Scroll.css";
import "./styles/fonts/font.css";
import "./index.css";
import "./css/Main.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [data, setData] = useState(null);
  const [category, setCategory] = useState("전체");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setData(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          "https://raw.githubusercontent.com/ctaaag/hackaton_plogging/main/flogging_data.json"
        );
        setData([...response.data]);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <>
      <Menubar />
      <div className="temp tempFor" >
        <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/event"
            element={
              <Festival
                setCategory={setCategory}
                category={category}
                data={data}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/detail/:id"
            element={<DetailFestival data={data} />}
          />
          <Route path="/running" element={<Running />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/running" element={<Running />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="*" element={<div>없는페이지입니다</div>} />
        </Routes>
      </div>
    </>
  );
}





