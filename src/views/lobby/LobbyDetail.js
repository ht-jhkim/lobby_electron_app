import { CButton } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

function LobbyDetail({ match }) {
  return (
    <>
      <Link to="/lobby">
        <CButton color="info">뒤로 가기</CButton>
      </Link>
      로비 ID : {match.params.id}
    </>
  );
}

export default LobbyDetail;
