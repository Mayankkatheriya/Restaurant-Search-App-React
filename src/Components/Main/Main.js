import "./Main.css";
import data from "./RestaurantData.json";
import Card from "./RestaurantCard";
import {useState} from 'react'

const Main = () => {
  let [restaurantData , setRestaurantData] = useState(data);
  let [searchName, setSearchName] = useState("")
  let [searchFood, setSearchFood] = useState("")
  let [ratings, setRatings] = useState("")

  const filterByName = (e) => {
    let searchStr = e.target.value;
    setSearchName((prev)=>searchStr);
    let filteredData = data.filter((item)=>{
      return (item.name.toLowerCase().includes(searchStr.toLowerCase()) && item.type_of_food.toLowerCase().includes(searchFood.toLowerCase()) && item.rating>=ratings)
    })
    
    setRestaurantData(filteredData);
  }

  const filterByFood = (e) => {
    let searchStr = e.target.value;
    setSearchFood((prev)=>searchStr);
    let filteredData = data.filter((item)=>{
      return (item.name.toLowerCase().includes(searchName.toLowerCase()) && item.type_of_food.toLowerCase().includes(searchStr.toLowerCase()) && item.rating>=ratings)

    })
    
    setRestaurantData(filteredData);
  }

  const filterOnRating = (e) => {
    let searchVal = e.target.value;
    setRatings((prev)=>searchVal);
    let filteredData = data.filter((item)=>{
      return (item.name.toLowerCase().includes(searchName.toLowerCase()) && item.type_of_food.toLowerCase().includes(searchFood.toLowerCase()) && item.rating>=searchVal)
    })
    
    setRestaurantData(filteredData);
  }


  return (
    <main>
      <div className="filter-options">
        <input type="search" name="" id="" placeholder = "Search for Restaurant" value={searchName} onChange = {filterByName}/>
        <input type="search" name="" id="" placeholder = "Search by Food" value={searchFood} onChange = {filterByFood}/>
        <div className="rating-box">
          <label htmlFor="ratings">Minimum Ratings</label>
          <input type="number" name="" id="ratings" min = {0} max = {6} step = {0.5} placeholder = "Filter by Ratings" value={ratings} onChange = {filterOnRating}/>
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