import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import DistrictMap from "./Components/Visualization/DistrictMap";
import Header from "./Components/UI/Header";
import NavBar from "./Components/UI/NavBar";
import RandomPlanContents from "./Components/Random/RandomPlanContents";
import DistrictMapTitle from "./Components/Pages/DistrictMapTitle";
import FallBackData from "./Components/FallBackData";

const Random = () => {
  const abbreviation = { ms: "MISSISSIPPI", al: "ALABAMA", pa: "PENNSYLVANIA" };
  const { id: selectedStateAbbr } = useParams();
  const selectedState = abbreviation[selectedStateAbbr];
  const [showSideBar, setShowSideBar] = useState(false);
  const [geoFeature, setGeoFeature] = useState([]);
  const location = useLocation().pathname;
  const smdmmd = location.split("/")[3];
  const [showContent, setShowContent] = useState("Highest Republican Seats");
  const [mapKey, setMapKey] = useState(0);
  const randomPlans = [
    "Highest Republican Seats",
    "Highest Democratic Seats",
    "Highest Non-White Probability",
    "Highest White Probability",
    "Highest Opportunity District",
  ];
  const apis = {
    "Highest Republican Seats": "republican",
    "Highest Democratic Seats": "democratic",
    "Highest Non-White Probability": "non-white-max",
    "Highest White Probability": "white-max",
    "Highest Opportunity District": "opportunity-max",
  };
  const [data, setData] = useState({});

  useEffect(() => {
    setData({});
    const getData = async () => {
      const api = `/${selectedStateAbbr.toUpperCase()}/random-plan/${
        apis[showContent]
      }/${smdmmd}`;
      try {
        const response = await axios.get(`http://localhost:8080${api}`);
        setData(response.data);
        setGeoFeature(response.data.features || []);
        setMapKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(
          FallBackData("random")[selectedStateAbbr][smdmmd][apis[showContent]]
        );
        setGeoFeature(
          FallBackData("random")[selectedStateAbbr][smdmmd][apis[showContent]]
            .features || []
        );
        setMapKey((prevKey) => prevKey + 1);
      }
    };
    getData();
  }, [selectedStateAbbr, smdmmd, showContent]);

  return (
    <>
      <div className="body">
        <Header
          title={selectedState}
          className={"text-brand"}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <div className="body-contents">
          <NavBar setShowContent={setShowContent} simpleItem={randomPlans} />
          <Row className="map-contents-row">
            <Col xs={12} md={6} className="map-contents-col">
              <DistrictMapTitle
                title={"Sampled " + smdmmd.toUpperCase() + " Plan"}
                address={`/${selectedStateAbbr}`}
              />
              <Row className="district-map-container">
                <DistrictMap
                  mapKey={mapKey}
                  data={geoFeature}
                  selectedState={selectedState}
                />
              </Row>
            </Col>
            <Col className="info-contents-col">
              {randomPlans
                .filter((item) => showContent === item)
                .map((item) => (
                  <Row key={item} className="info-contents-row">
                    <RandomPlanContents title={item} data={data} />
                  </Row>
                ))}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Random;
