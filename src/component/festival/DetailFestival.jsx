import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Nav } from "react-bootstrap";
import "../../css/DetailFestival.css";

function DetailFestival(props) {
  let { id } = useParams();
  const [flag, setFlag] = useState(false);
  const [tabnum, setTabnum] = useState(0);
  const handleClick = () => {
    setFlag(!flag);
  };
  const [key, setKey] = useState("home");

  const nums = (e) => {
    if (e.id == Number(id) + 1) {
      return e;
    }
  };
  let findDataNum = props.data.findIndex(nums);
  console.log(props.data[findDataNum].image);
  return (
    <>
      <div
        className="detail_image_container"
        style={{
          backgroundImage: "url(" + `${props.data[findDataNum].image}` + ")",
        }}
      ></div>
      <div className="detail_title_container">
        <h3 className="detail_title">{props.data[findDataNum].title}</h3>
        <div className="detail_button_container">
          <button
            className="detail_cardBtn"
            onClick={() => {
              handleClick();
            }}
          >
            <img
              src={flag ? "/clicklike.png" : "/like.png"}
              style={{ width: 20, userSelect: "none", right: "0" }}
              alt="likeBtn"
            />
          </button>
          <button className="detail_shareBtn">
            <img
              src="/share.png"
              style={{ width: 20, userSelect: "none", right: "0" }}
            ></img>
          </button>
        </div>
      </div>
      <span className="detail_content">{props.data[findDataNum].content}</span>
      <Nav onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabnum(0);
            }}
          >
            행사정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabnum(1);
            }}
          >
            후기모음
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab tabnum={tabnum} data={props.data} />
      <br />
      <h5>이런행사는 어때요?</h5>
      <div className="detail_card_container">
        <div
          className="detail_card_info"
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: "url(" + `${props.data[6].image}` + ")",
          }}
        ></div>
        <div
          className="detail_card_info"
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: "url(" + `${props.data[7].image}` + ")",
          }}
        ></div>
        <div
          className="detail_card_info"
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: "url(" + `${props.data[9].image}` + ")",
          }}
        ></div>
      </div>
      <button className="detail_button_apply">신청하기</button>
    </>
  );
}

export default DetailFestival;

const Tab = (props) => {
  let { id } = useParams();
  let [fade, setFade] = useState("");
  const nums = (e) => {
    if (e.id == Number(id) + 1) {
      return e;
    }
  };
  let findDataNum = props.data.findIndex(nums);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [props]);

  if (props.tabnum == 0) {
    return (
      <div className={`start ${fade}`}>
        {" "}
        <div className="detail_content_container">
          <span className="detail_location">
            일시 : {props.data[findDataNum].date}
          </span>
          <span className="detail_location">
            장소 : {props.data[findDataNum].location}
          </span>
          <span className="detail_date">신청기간 : 2022.6.3</span>
          <span className="detail_date">문의하기 : 서울관광공사</span>
          <span className="detail_date">신청하기 : 홈페이지 링크</span>
        </div>
        <button className="detail_button_apply">신청하기</button>
      </div>
    );
  } else if (props.tabnum == 1) {
    return (
      <div className={`start ${fade}`}>
        <div>홍길동</div>
        <div>홍순자</div>
        <div>홍도리</div>
      </div>
    );
  }
};
