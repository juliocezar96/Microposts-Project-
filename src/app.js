import { http } from "./http";
import { ui } from "./ui";

//Get posts
document.addEventListener("DOMContentLoaded", getPosts);

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPosts(data))
    .catch((error) => console.log(error));
}
