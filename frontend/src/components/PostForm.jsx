import React from 'react'
import { Form, useActionData } from 'react-router-dom'
import {CalendarDaysIcon, ArrowLeftIcon} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const PostForm = ({header, btnText, oldPostData}) => {
    const data = useActionData();
  return (
    <section className='form-section' >
        <div className='detail-header' >
            <p> {header} </p>
            <Link to={"/"} >
                <ArrowLeftIcon className="arrowIcon"  />
            </Link>
        </div>
        {
            data && data.errors && (
                <ul>
                    {
                        Object.values(data.errors).map((error) => (
                            <li key={error}> {error} </li>
                        ))
                    }
                </ul>
            )
        }
        <Form method='POST'>
            <div className='form-input'>
                <label htmlFor="form-title">Title</label>
                <input type="text" id='form-title' name='title' required defaultValue={oldPostData ? oldPostData.title : ""} />
            </div>
            <div>
                <label htmlFor="form-image">Image URL</label>
                <input type="url" id='form-image' name='image' required defaultValue={oldPostData ? oldPostData.image : ""} />
            </div>
            <div>
                <label htmlFor="form-date">Date</label>
                <input type="date" id='form-date' name='date' required  defaultValue={oldPostData ? oldPostData.date : ""} />
            </div>
            <div>
                <label htmlFor="form-description">Description</label>
                <textarea cols="30" rows="5" id='form-description' name='description' required defaultValue={oldPostData ? oldPostData.description : ""} />
            </div>
            <button className='btn'> {btnText} </button>
        </Form>
    </section>
  )
}

export default PostForm