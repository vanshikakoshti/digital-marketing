import React from "react";

const PageHeader = ({ title, breadcrumb, description1, description2 }) => {
  return (
    <div className="pageheader-container  text-white  text-center">
    <div className="container py-4">
      <h1 className="fw-bold">{title}</h1>
      <div className="breadcrumb justify-content-center">
        <span className="breadcrumb-item text-secondary">Home</span>
        <span className="breadcrumb-item text-secondary">  </span>
        <span className="breadcrumb-item active text-white">{breadcrumb}</span>
      </div>
      <div className="mb-4">
      <p>{description1}</p>
      
      </div>
      <hr className="border-secondary" />
    </div>
    </div>
  );
};

export default PageHeader;
