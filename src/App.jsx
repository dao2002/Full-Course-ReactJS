import { useState, useEffect } from "react";

export default function App() {
  const [blodPostData, setBlodPostData] = useState({
    title: "",
    body: "",
  });

  console.log(blodPostData);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (blodPostData.title && blodPostData.body) {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify({
                userId: 1,
                title: blodPostData.title,
                body: blodPostData.body,
              }),
              headers: {
                "Content-Type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success!");
                console.log(data);
              })
              .catch((err) => console.log(err));
          }
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={blodPostData.title}
            onChange={(e) => {
              setBlodPostData((currentBlogPostData) => ({
                ...currentBlogPostData,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            value={blodPostData.body}
            onChange={(e) => {
              setBlodPostData((currentBlogPostData) => ({
                ...currentBlogPostData,
                body: e.target.value,
              }));
            }}
          />
        </div>
        <button>Create Post</button>
      </form>
    </div>
  );
}
