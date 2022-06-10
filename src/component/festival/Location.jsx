import React from "react";
import { Badge } from "react-bootstrap";
import "../../css/sample.css";

const Location = (props) => {
  let keyIdx = 1;
  const locate = ["전체", "서울", "경기/인천", "강원", "대전/세종/충청", "대구/경북", "부산/울산/경남", "광주/전라", "제주", "온라인"];
  const locateObj = locate.map((elem) => elem = {
    id : keyIdx++,
    elem
  })

  return (
    <div className="badgeContainer">
      {
        locateObj.map((item) =>
          <Badge className="badge"
            className={props.category === item.elem ? "active" : null} 
            pill bg="dark" type="button" 
            style={{
              display: "inline-flex", alignItems: "center",
              margin: "0 5px 5px 0",
              fontFamily: "SCDream4", fontWeight: "100"
            }}
            key={item.id}
            onClick={() => props.setCategory(item.elem)}
          >
            {item.elem}
          </Badge>
        )
      }
    </div>
  );
};

export default Location;
