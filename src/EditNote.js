import React, {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Nav, Update } from "./ui-components";
import { generateClient } from "aws-amplify/api";
import { getSurvey } from "./graphql/queries";
import "./App.css";
function EditNote() {
  return <Put />;
}
const client = generateClient();

function Put() {
  const { cid } = useParams();
  const [cr, setMe] = useState({});
useEffect(() => {
    const queryData = async () => {
      const record = cid
        ? (
            await client.graphql({
              query: getSurvey.replaceAll("__typename", ""),
              variables: { id: cid },
            })
          )?.data?.getSurvey
        : cr;
        setMe(record);
    };
    queryData();
  }, [cid, cr]);



  return (
    <div>
      <header className="App-header">
        <Nav />
        <Update SurveyResult={cr} />
      </header>
    </div>
  );
}

export default EditNote;