import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CDataTable, CRow } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

function Lobby() {
  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push({
      id: i + 1,
      dong: 100 + i + 1,
      ip: `172.20.202.${i + 1}`,
    });
  }

  const fields = [
    { key: "id", label: "로비번호" },
    { key: "dong", label: "동" },
    { key: "ip", label: "IP" },
    { key: "detail", label: "" },
  ];
  return (
    <>
      <CRow>
        <CCol xl={12}>
          <CCard xl={12}>
            <CCardHeader>로비 정보</CCardHeader>
            <CCardBody className="text-center">
              <CDataTable
                items={items}
                fields={fields}
                hover
                pagination={{
                  align: "center",
                }}
                itemsPerPage={5}
                scopedSlots={{
                  detail: (item) => (
                    <td>
                      <Link to={`/lobby/${item.id}`}>
                        <CButton color="info" size="sm">
                          상세보기
                        </CButton>
                      </Link>
                    </td>
                  ),
                }}
              />
            </CCardBody>
            <CCardFooter className="d-flex flex-row-reverse bd-highlight">
              <CButton color="info">전체 업데이트</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Lobby;
