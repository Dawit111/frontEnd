import React, { useEffect, useState } from "react";
import "./Advert.css";
import NavBar from "../../components/NavBar/NavBar";
import SchoolAdvertSide from "../../components/SchoolAdvertSide/SchoolAdvertSide";
import LostAndFoundSide from "../../components/LostAndFoundSide/LostAndFoundSide";
import AdvertCategories from "../../components/AdvertCategories/AdvertCategories";
import { useParams } from "react-router-dom";

const Advert = () => {
  const [minimize, setMinimize] = useState(false);
  const params = useParams();
  const {advertChoise} = params;
  return (
    <>
      <NavBar />
      <div
        style={{ gridTemplateColumns: minimize ? "6rem auto" : "22% auto" }}
        className="Advert"
      >
        {/* Left side */}
        <div className="Left-side-advert">
          <AdvertCategories minimize={minimize} setMinimize={setMinimize}/>
        </div>
        {/* Right side advert*/}
        <div className="Right-side-advert">
          {advertChoise === "school" ?
          <SchoolAdvertSide />:
          advertChoise === "lost" ?
         <LostAndFoundSide location ={"Lost Page"}/> :
         advertChoise === "found" ?
         <LostAndFoundSide location ={"Found Page"}/> :    
         <SchoolAdvertSide />
        }
   
        </div>
      </div>
    </>
  );
};

export default Advert;
