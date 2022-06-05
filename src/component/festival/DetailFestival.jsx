import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../css/DetailFestival.css";

function DetailFestival(props) {
  let { id } = useParams();

  const nums = (e) => {
    if (e.id == Number(id) + 1) {
      return e;
    }
  };
  let findDataNum = props.data.findIndex(nums);

  return (
    <>
      {props.data && (
        <>
          <div className="detail_image_container">
            <img
              className="detail_image"
              src={`${props.data[findDataNum].image}`}
              width={"70%"}
            />
          </div>
          <div className="detail_content_container">
            <h3 className="detail_title">{props.data[findDataNum].title}</h3>
            <div className="detail_location_container">
              <span className="detail_content">
                {props.data[findDataNum].content}
              </span>
              <br />
              <span className="detail_location">
                장소 : {props.data[findDataNum].location}
              </span>
              <span className="detail_date">
                날짜 : {props.data[findDataNum].date}
              </span>
            </div>
            <div className="detail_button_container">
              <br />
              <br />
              <Button variant="success" className="detail_button_like">
                찜하기
              </Button>{" "}
              <Button variant="warning" className="detail_button_apply">
                신청하기
              </Button>{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailFestival;
