import "./Main.css";
import data from "./RestaurantData.json";
import Card from "./RestaurantCard";
import {useState} from 'react'

const Main = () => {
  let [restaurantData , setRestaurantData] = useState(data);

  const filterByName = (e) => {
    let searchStr = e.target.value;
    let filteredData = data.filter((item)=>{
      return (item.name.toLowerCase().includes(searchStr.toLowerCase()))
    })
    
    setRestaurantData(filteredData);
  }

  const filterByFood = (e) => {
    let searchStr = e.target.value;
    let filteredData = data.filter((item)=>{
      return (item.type_of_food.toLowerCase().includes(searchStr.toLowerCase()))
    })
    
    setRestaurantData(filteredData);
  }

  const filterOnRating = (e) => {
    let searchVal = e.target.value;
    let filteredData = data.filter((item)=>{
      return (item.rating>=searchVal)
    })
    
    setRestaurantData(filteredData);
  }


  return (
    <main>
      <div className="filter-options">
        <input type="search" name="" id="" placeholder = "Search for Restaurant" onChange = {filterByName}/>
        <input type="search" name="" id="" placeholder = "Search by Food" onChange = {filterByFood}/>
        <div className="rating-box">
          <label htmlFor="ratings">Minimum Ratings</label>
          <input type="number" name="" id="ratings" min = {0} max = {6} step = {0.5} placeholder = "Filter by Ratings" onChange = {filterOnRating}/>
        </div>
      </div>
      <div className="card-container">
        {restaurantData.map((item) => (
          <Card key={item.id.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Main;