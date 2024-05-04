// import React from "react";

//initially

// const Items = (props) => {
//   return (
//     <div>
//       <span>
//         {props.itemName} - {props.price} - {props.availability}
//       </span>
//     </div>
//   );
// };

// export default Items;

import React from "react";
import PropTypes from "prop-types";

const Items = (props) => {
  let stock;
  if (props.availability) {
    stock = "Available";
  } else {
    stock = "out of stock";
  }

  return (
    <div>
      <span>
        {props.itemName} - {props.price} -{props.availability && "Available"}
      </span>
    </div>
  );
};

Items.defaultProps = {
  itemName: "item",
  price: 454,
  availability: false,
};

Items.propTypes = {
  itemName: PropTypes.string,
  price: PropTypes.number,
};

export default Items;
