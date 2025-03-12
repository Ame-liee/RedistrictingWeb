import React from "react";
import BackButton from "../UI/BackButton";

const DistrictMapTitle = ({ title, address }) => {
  return (
    <div className="info-contents-row">
      <BackButton className="back-button" address={address} />
      <div className="text-district-map-title">{title}</div>
    </div>
  );
};

export default DistrictMapTitle;
