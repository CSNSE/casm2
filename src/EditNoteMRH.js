import React, { Component, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Nav, SurveyUpdateForm } from "./ui-components";
import { API } from "aws-amplify";
import "./App.css";
import { getNote } from "./graphql/queries";
function EditNote() {
  return <Put />;
}

function Put() {
  const { cid } = useParams();
  const [cr, setMe] = useState({});
useEffect(() => {
    const queryData = async () => {
      const record = cid
        ? (
            await API.graphql({
              query: getNote.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getNote
        : cr;
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
        <Nav />
        <SurveyUpdateForm SurveyResult={cr} />
      </header>
    </div>
  );
}

export default EditNote;