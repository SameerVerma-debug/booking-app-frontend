import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/accommodation.css";
import { useFetch } from "../../hooks/useFetch";
import { UserAccommodations } from "./UserAccommodations";
export const Accommodations = () => {

  const [accommodations,loading,error] = useFetch({path:"/user-accommodations",dependencies:[]});
  
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="user-accommodation-page">
      <Link style={{ textDecoration: "none" }} to="/account/accommodations/new">
        <button className="primary" id="add-new-user-accommodation">
          <FaPlus />
          Add New Accommodation
        </button>
      </Link>
      <UserAccommodations accommodations={accommodations}/>
    </div>
  );
};
