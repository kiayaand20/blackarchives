import React from "react";
import Layout from "../../components/Layout/Layout";
import DirectorInfo from "../../components/DirectorInfo/DirectorInfo";
import "./Directors.css";

export default function Directors(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className="all-directors">
          <DirectorInfo />
        </div>
      </Layout>
    </div>
  );
}
