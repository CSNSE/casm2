import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { Nav, Update } from "./ui-components";
import { getSurvey } from "./graphql/queries";
import "./App.css";

function EditF() {
  return <Put />;
}
function Put() {
    const {cid} = useParams();
    console.log("put" + {cid});
    return (
        <div>
          <header className="App-header">
            <Nav />
            <Update idProp={cid} />
          </header>
        </div>
      );
}

export default EditF;