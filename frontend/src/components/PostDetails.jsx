import {CalendarDaysIcon, ArrowLeftIcon} from "@heroicons/react/24/solid";
import { Link, useSubmit } from "react-router-dom";

const PostDetails = ({post}) => {
    const {description,image,title,date} = post;
    const submit = useSubmit();

    const postDeleteHandler = () => {
      const confirmStatus = window.confirm("Are you sure that you want to delete");

      if(confirmStatus){
        submit(null,{method: "DELETE"})
      }

    }

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
                <Link to={`edit-post`} >
                  <p className="btn sm" >Edit</p>
                </Link>
                <p className="btn sm" onClick={postDeleteHandler} >Delete</p>
            </div>
        </section>
    </>
  )
}

export default PostDetails