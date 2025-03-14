import React from "react";
import BackIcon from "../../assets/back-icon.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const BackButton = ({ address }) => {
  const navigate = useNavigate();

  return (
    <Button variant="link" onClick={() => navigate(address)}>
      <img alt="" src={BackIcon} className="back-svg-icon" />
    </Button>
  );
};

export default BackButton;
