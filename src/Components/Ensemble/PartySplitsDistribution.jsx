import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Table } from "react-bootstrap";
import SimpleBarChart from "../Visualization/SimpleBarChart";
import FallBackData from "../FallBackData";

const PartySplitsDistribution = ({ title, selectedStateAbbr, smdmmd }) => {
  const [data, setData] = useState({});
  const [fallBack, setFallBack] = useState(false);

  useEffect(() => {
    setData({});
    const getData = async () => {
      const api = `/${selectedStateAbbr.toUpperCase()}/party-split-distribution/${smdmmd}`;
      try {
        const data = await axios.get(`http://localhost:8080${api}`);
        setData(data.data);
      } catch (error) {
        console.log(
          FallBackData("ensemble")[selectedStateAbbr][smdmmd].party.partySplits
        );
        setFallBack(true);
        setData(
          FallBackData("ensemble")[selectedStateAbbr][smdmmd].party.partySplits
        );
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [selectedStateAbbr, smdmmd]);

  return (
    <Row className="info-contents-row">
      <div className="info-title">{title}</div>
      <Row className="info-contents-inner-row">
        <Col
          className="info-visualization-container"
          style={{ width: "100%", height: 330 }}
        >
          {fallBack == false && (
            <SimpleBarChart
              title="Republican : Democratic"
              keyName={"numberOfPlans"}
              data={data.partySplitsBar || []}
            />
          )}
          {fallBack == true && (
            <SimpleBarChart
              title="Republican : Democratic"
              keyName={"value"}
              data={data || []}
            />
          )}
        </Col>
      </Row>
      {fallBack == false && (
        <Row>
          <Table striped bordered hover className="info-table">
            <thead className="table-header">
              <tr>
                <td>Vote Share</td>
                <td>Average Seat Share</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50%(fixed)</td>
                <td>
                  Republican = {data.averageSeatShare?.republican ?? 0}%,
                  Democratic = {data.averageSeatShare?.democratic ?? 0}%
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      )}
    </Row>
  );
};

export default PartySplitsDistribution;
