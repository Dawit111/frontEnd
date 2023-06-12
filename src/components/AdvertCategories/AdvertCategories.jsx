import React, { useState } from 'react'
import AdvertCategory from '../AdvertCategory/AdvertCategory';
import menuIcon from "../../img/menu.png";


const AdvertCategories = ({minimize, setMinimize}) => {
    const AdvertCategories = [
        { id: 1, name: "School Advert" },
        { id: 2, name: "Lost Things" },
        { id: 3, name: "Found Things" },
      ];

      const [currentCategory, setCurrentCategory] = useState(null);
  return (
<div className="Advert-container">
            <div className="categoryHeader">
              <div className="categoryText">
                {minimize ? "" : <h3>Advert Categories</h3>}
              </div>
              <div className="menuIcon">
                <img
                  src={menuIcon}
                  alt=""
                  title="mimimize/maximize"
                  style={{ cursor: "pointer", height: "2rem", width: "2rem" }}
                  onClick={() => setMinimize((minimize) => !minimize)}
                />
              </div>
            </div>

            <hr style={{ width: "100%", border: "0.1px solid gray" }} />

            <div className="Advert-list">
              {AdvertCategories.map((category, id) => (
                <div onClick={() => setCurrentCategory(category)}>
                  <AdvertCategory
                    key={id}
                    data={category}
                    minimize={minimize}
                    currentCategory={currentCategory}
                  />
                  
                </div>
              ))}
            </div>
          </div>
            )
}

export default AdvertCategories