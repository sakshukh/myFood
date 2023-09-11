//import fssai_logo from "../../assets/fssai_logo.png";

const RestaurantAddress = ({ address }) => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <span>
        {/* {address.type ? (
          address.type === "FSSAI" ? (
            <img src={fssai_logo} style={{ width: "100px" }} />
          ) : (
            address.type
          )
        ) : (
          ""
        )} */}
      </span>
      <span>{address.text ? address.text[0] : ""}</span>
      <div>{address.name ? address.name : ""}</div>
      <div>{address.area ? address.area : ""}</div>
      <div>{address.completeAddress ? address.completeAddress : ""}</div>
    </div>
  );
};

export default RestaurantAddress;
