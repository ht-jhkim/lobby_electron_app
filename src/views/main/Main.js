import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from "@coreui/react";
import React from "react";

function Main() {
  const SampleTable = ({ name }) => {
    return (
      <CCol xl={4}>
        <CCard>
          <CCardHeader>{name} 정보</CCardHeader>
          <CCardBody className="text-center">
            <CDataTable />
          </CCardBody>
        </CCard>
      </CCol>
    );
  };

  return (
    <>
      <CRow>
        <SampleTable name="로비" />
        <SampleTable name="월패드" />
        <SampleTable name="경비실기" />
      </CRow>
    </>
  );
}

export default Main;
