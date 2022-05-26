import React from "react";
import { Badge } from "react-bootstrap";

const Location = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Badge pill bg="secondary" type="button">
        서울
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        경기/인천
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        강원
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        대전/세종/충청
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        대구/경북
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        부산/울산/경남
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        광주/전라
      </Badge>{" "}
      <Badge pill bg="secondary" type="button">
        제주
      </Badge>
    </div>
  );
};

export default Location;
