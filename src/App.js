import React, { useState } from "react";
import data from "./data";
import Table from "./container/Table";
import SideBar from "./container/Sidebar";
import ActionCenter from "./container/Actioncenter";
import Header from "./container/Header";
import InlineLink from "./container/Inlinelinks";
import SelectOptions from "./container/Selectoptions";
import AddNewGig from "./container/Newgig";
import "./index.css";

export const NewGig = React.createContext();

function App() {
  const [newGig, setNewGig] = useState(false);

  return (
    <div className="main-container">
      <SideBar />
      <div>
        <ActionCenter />
        <Header onClickHander={() => setNewGig(!newGig)} />
        <NewGig.Provider value={newGig}>
          <InlineLink />
        </NewGig.Provider>
        {newGig ? (
          <AddNewGig />
        ) : (
          <>
            <SelectOptions />
            <div>
              <Table data={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
