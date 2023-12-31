import React from 'react'
import { Form } from 'react-router-dom'
import {CalendarDaysIcon, ArrowLeftIcon} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const PostForm = () => {
  return (
    <section className='form-section' >
        <div className='detail-header' >
            <p>Create Your Post Now...</p>
            <Link to={"/"} >
                <ArrowLeftIcon className="arrowIcon"  />
            </Link>
        </div>
        <Form method='POST'>
            <div className='form-input'>
                <label htmlFor="form-title">Title</label>
                <input type="text" id='form-title' name='title' />
            </div>
            <div>
                <label htmlFor="form-image">Image URL</label>
                <input type="url" id='form-image' name='image' />
            </div>
            <div>
                <label htmlFor="form-date">Date</label>
                <input type="date" id='form-date' name='date' />
            </div>
            <div>
                <label htmlFor="form-description">Description</label>
                <textarea cols="30" rows="5" id='form-description' name='description' />
            </div>
            <button className='btn'>Post</button>
        </Form>
    </section>
  )
}

export default PostForm