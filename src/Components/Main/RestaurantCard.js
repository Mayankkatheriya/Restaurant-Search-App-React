const RestaurantCard = ({ item }) => {
  const StarRating = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#ffcc00" : "#ddd" }}>
          &#9733;
        </span>
      );
    }

    return (
      <>
        {stars} {rating} / 5
      </>
    );
  };

  return (
    <div className="card">
      <div className="title">
        <h3>{item.name}</h3>
        <div className="ratings">{StarRating(item.rating)}</div>
      </div>
      <div className="address">
        <p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"
            />
          </svg>{" "}
          {item.address}, {item["address line 2"]}
        </p>
      </div>
      <div className="post">
        <span>
          {item.outcode} {item.postcode}
        </span>
      </div>
      <div className="base">
        <div className="food-type">{item["type_of_food"]}</div>
        <a href={item.URL}>Visit Menu</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
