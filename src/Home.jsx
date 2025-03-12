import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import CircleIcon from "./assets/circle-icon.svg";
import USMap from "./Components/Visualization/USMap";
import Header from "./Components/UI/Header";

const Home = () => {
  const [selectedState, setSelectedState] = useState("SELECT A STATE");
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const customStates = ["MISSISSIPPI", "ALABAMA", "PENNSYLVANIA"];
  const abbreviation = { MISSISSIPPI: "ms", ALABAMA: "al", PENNSYLVANIA: "pa" };
  const navigate = useNavigate();
  const toSateInfo = (state) => {
    navigate(`/${state}`);
  };

  return (
    <>
      <div className="body">
        <div className="body-home">
          <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <Container>
            <div className="text-question">IS A FAIR VOTE BEING HELD?</div>
            <div className="text-selected-state">
              {hoveredLocation ? hoveredLocation : selectedState}
            </div>
            <div>
              <div className="available-state-container">
                <span className="text-available-state">
                  {" "}
                  <img
                    alt=""
                    src={CircleIcon}
                    width="10px"
                    height="10px"
                    className="svg-icon"
                  />
                  &nbsp;Available State
                </span>
              </div>
              <div>
                <Container className="us-map">
                  <USMap
                    hoveredLocation={hoveredLocation}
                    selectedState={selectedState}
                    setHoveredLocation={setHoveredLocation}
                    setSelectedState={setSelectedState}
                    toSateInfo={toSateInfo}
                  />
                </Container>
              </div>
              <div className="button-dropdown-layout">
                <Dropdown className="button-dropdown">
                  <Dropdown.Toggle variant="dark">
                    Select a State
                  </Dropdown.Toggle>
                  <Dropdown.Menu show>
                    {customStates.map((state) => (
                      <Dropdown.Item
                        key={state}
                        onClick={() => {
                          setSelectedState(state);
                          toSateInfo(abbreviation[state]);
                        }}
                      >
                        {state}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
