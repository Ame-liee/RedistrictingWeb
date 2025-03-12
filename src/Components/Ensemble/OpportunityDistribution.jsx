import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import NavBar from "../UI/NavBar";
import SimpleBarChart from "../Visualization/SimpleBarChart";
import FallBackData from "../FallBackData";

const OpportunityDistribution = ({
  title,
  showGraph,
  setShowGraph,
  navbarItem,
  selectedStateAbbr,
  smdmmd,
}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const api = `/${selectedStateAbbr.toUpperCase()}/opportunity-distribution/${smdmmd}`;
      try {
        const response = await axios.get(`http://localhost:8080${api}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        const bars = {
          opportunityDistrictsBar: {
            black: [],
            hispanic: [],
            asian: [],
            nonWhite: [],
          },
          opportunityRepresentativesBar: {
            black: [],
            hispanic: [],
            asian: [],
            nonWhite: [],
          },
        };
        const buildBar = (barKey, option, data) => {
          Object.entries(data).forEach(([key, values]) => {
            const counts = values.reduce(
              (acc, item) => {
                const index = acc.findIndex(
                  (obj) => obj.name === String(item[option])
                );
                if (index !== -1) acc[index].numberOfPlans += 1;
                return acc;
              },
              [
                { name: "0", numberOfPlans: 0 },
                { name: "1", numberOfPlans: 0 },
              ]
            );
            bars[barKey][key] = counts;
          });
        };
        const fallbackData =
          FallBackData("ensemble")[selectedStateAbbr][smdmmd].racial;
        console.log(fallbackData);
        buildBar(
          "opportunityDistrictsBar",
          "numOpDistricts",
          fallbackData.opportunityDistricts
        );
        buildBar(
          "opportunityRepresentativesBar",
          "numOpRepresentatives",
          fallbackData.opportunityRepresentatives
        );
        console.log(bars);
        setData(bars);
      }
    };
    getData();
  }, [selectedStateAbbr, smdmmd, showGraph]);

  return (
    <Row className="info-contents-row">
      <div className="info-title">{title}</div>
      <Row>
        <NavBar setShowContent={setShowGraph} simpleItem={navbarItem} />
      </Row>
      <Row className="info-contents-inner-row">
        <Col
          className="info-visualization-container"
          style={{ width: "100%", height: 330 }}
        >
          <SimpleBarChart
            title="Opportunity Districts"
            data={data.opportunityDistrictsBar?.[showGraph] || []}
            keyName="numberOfPlans"
          />
        </Col>
        <Col
          className="info-visualization-container"
          style={{ width: "100%", height: 330 }}
        >
          <SimpleBarChart
            title="Opportunity Representatives"
            data={data.opportunityRepresentativesBar?.[showGraph] || []}
            keyName="numberOfPlans"
          />
        </Col>
      </Row>
    </Row>
  );
};

export default OpportunityDistribution;
