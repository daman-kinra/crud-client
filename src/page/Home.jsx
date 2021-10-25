import React, { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import { MdClose } from "react-icons/md";
import Card from "../components/Card";
function Home({ data, updateData, deleteMultipe, deleteData, createData }) {
  const [showCreateNewEntry, setShowCreateNewEntry] = useState(false);
  const [showUpdateCard, setShowUpdateCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState({});
  return (
    <div className="home">
      <Header setShowCreateNewEntry={setShowCreateNewEntry} />
      {showCreateNewEntry && (
        <>
          <div onClick={() => setShowCreateNewEntry(false)} className="close">
            <MdClose />
          </div>
          <Form
            loading={loading}
            isUpdating={false}
            data={currentData}
            apiCall={async (data) => {
              setLoading(true);
              try {
                await createData(data);
              } catch (error) {
                console.log(error);
              } finally {
                setLoading(false);
                setShowCreateNewEntry(false);
              }
            }}
          />
        </>
      )}
      {showUpdateCard && (
        <>
          <div onClick={() => setShowUpdateCard(false)} className="close">
            <MdClose />
          </div>
          <Form
            loading={loading}
            isUpdating={true}
            data={currentData}
            apiCall={async (data) => {
              setLoading(true);
              try {
                await updateData(data);
              } catch (error) {
                console.log(error);
              } finally {
                setLoading(false);
                setShowUpdateCard(false);
              }
            }}
          />
        </>
      )}
      <div className="card-list">
        {data.map((item) => (
          <Card
            key={item._id}
            card={item}
            setShowUpdateCard={setShowUpdateCard}
            setCurrentData={setCurrentData}
            onClickDelete={async (id) => {
              // setLoading(true);
              try {
                await deleteData(id);
              } catch (error) {
                console.log(error);
              } finally {
                // setLoading(false);
                // setShowCreateNewEntry(false);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Home);
