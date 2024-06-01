const API_BASE_URL = "https://hacker-news.firebaseio.com/v0";
const POSTS_CONTAINER = document.getElementById("posts");
const LIVE_UPDATES_LIST = document.getElementById("live-updates-list");
let postIds = [];
let currentIndex = 0;
const POSTS_PER_LOAD = 10;

document.addEventListener("DOMContentLoaded", () => {
  fetchPostIds();
  setInterval(fetchLiveUpdates, 5000);
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMorePosts();
    }
  });
});

async function fetchPostIds() {
  const response = await fetch(`${API_BASE_URL}/newstories.json`);
  postIds = await response.json();
  loadMorePosts();
}

async function fetchPost(id) {
  const response = await fetch(`${API_BASE_URL}/item/${id}.json`);
  return await response.json();
}

async function loadMorePosts() {
  const postsToLoad = postIds.slice(
    currentIndex,
    currentIndex + POSTS_PER_LOAD
  );
  const postPromises = postsToLoad.map((id) => fetchPost(id));
  const posts = await Promise.all(postPromises);
  posts.forEach((post) => displayPost(post));
  currentIndex += POSTS_PER_LOAD;
}

async function fetchComments(commentIds) {
  const commentPromises = commentIds.map((id) => fetchPost(id));
  return await Promise.all(commentPromises);
}

function displayComments(comments, container) {

    comments.sort((a, b) => b.time - a.time);

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments");
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <p><strong>${comment.by}</strong> | ${new Date(
      comment.time * 1000
    ).toLocaleString()}</p>
      <p>${comment.text || ""}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
  container.appendChild(commentsContainer);
  console.log(comments);

}

async function displayPost(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.by} | ${new Date(post.time * 1000).toLocaleString()}</p>
    <p>${post.text || ""}</p>
    ${post.url ? `<a href="${post.url}" target="_blank">Read more</a>` : ""}
  `;
  POSTS_CONTAINER.appendChild(postElement);

  if (post.kids && post.kids.length > 0) {
    const comments = await fetchComments(post.kids);
    displayComments(comments, postElement);
  }
}

async function fetchLiveUpdates() {
  const latestPostIds = await fetch(`${API_BASE_URL}/newstories.json`);
  const latestIds = await latestPostIds.json();
  const newPosts = latestIds.slice(0, 5);
  LIVE_UPDATES_LIST.innerHTML = "";
  newPosts.forEach(async (id) => {
    const post = await fetchPost(id);
    const listItem = document.createElement("li");
    listItem.textContent = post.title;
    LIVE_UPDATES_LIST.appendChild(listItem);
  });
}