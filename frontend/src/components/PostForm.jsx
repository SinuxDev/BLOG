import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { getToken } from "../util/auth";

const PostForm = ({ header, btnText, oldPostData, method }) => {
  const data = useActionData();
  return (
    <section className="form-section">
      <div className="detail-header">
        <p> {header} </p>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowIcon" />
        </Link>
      </div>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}> {error} </li>
          ))}
        </ul>
      )}
      <Form method={method}>
        <div className="form-input">
          <label htmlFor="form-title">Title</label>
          <input
            type="text"
            id="form-title"
            name="title"
            required
            defaultValue={oldPostData ? oldPostData.title : ""}
          />
        </div>
        <div>
          <label htmlFor="form-image">Image URL</label>
          <input
            type="url"
            id="form-image"
            name="image"
            required
            defaultValue={oldPostData ? oldPostData.image : ""}
          />
        </div>
        <div>
          <label htmlFor="form-date">Date</label>
          <input
            type="date"
            id="form-date"
            name="date"
            required
            defaultValue={oldPostData ? oldPostData.date : ""}
          />
        </div>
        <div>
          <label htmlFor="form-description">Description</label>
          <textarea
            cols="30"
            rows="5"
            id="form-description"
            name="description"
            required
            defaultValue={oldPostData ? oldPostData.description : ""}
          />
        </div>
        <button className="btn"> {btnText} </button>
      </Form>
    </section>
  );
};

export default PostForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;
  const token = getToken();

  const postData = {
    id: uuid(),
    title: data.get("title"),
    description: data.get("description"),
    image: data.get("image"),
    date: data.get("date"),
  };

  let url = `${process.env.REACT_APP_DOMAIN}/posts`;

  if (method === "PATCH") {
    const id = params.id;
    url = `${process.env.REACT_APP_DOMAIN}/posts/${id}`;
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch data....");
  } else {
    return redirect("/");
  }
};
