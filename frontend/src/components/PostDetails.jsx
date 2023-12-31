import {CalendarDaysIcon, ArrowLeftIcon} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PostDetails = ({post}) => {
    const {description,image,title,date} = post;

  return (
    <>
        <section className='details' >
            <div className="detail-header">
              <div>
                <h3 className='detail-title' > {title} </h3>
                <p className='date' >
                  <CalendarDaysIcon className='clockIcon' /> <span> {date} </span>
                </p>
              </div>
              <Link to={"/"} >
                <ArrowLeftIcon className="arrowIcon"  />
              </Link>
            </div>
            <img src={image} alt={title} />
            <p className='description' > {description} </p>
            <div className="detail-footer" >
                <Link to={"/edit-post/:id"} >
                  <p className="btn sm" >Edit</p>
                </Link>
                <p className="btn sm" >Delete</p>
            </div>
        </section>
    </>
  )
}

export default PostDetails