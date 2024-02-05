//dummy data

// const posts = [
//     {
//         title: "This is Title 1",
//         body: "This is body 1"
//     },
//     {
//         title: "This is Title 2",
//         body: "This is body 2"
//     },
//     {
//         title: "This is Title 3",
//         body: "This is body 3"
//     },
//     {
//         title: "This is Title 4",
//         body: "This is body 4"
//     },
//     {
//         title: "This is Title 5",
//         body: "This is body 5"
//     },
//     {
//         title: "This is Title 6",
//         body: "This is body 6"
//     },
//     {
//         title: "This is Title 7",
//         body: "This is body 7"
//     },
//     {
//         title: "This is Title 8",
//         body: "This is body 8"
//     }
// ];

// fetch data

const fetchData = async(config) => {
    try {
        const res = await axios(config);
        return res.data;
    } catch (error) {
        throw Error("data is not fetched");
    }
}

const postsElement = document.querySelector(".posts");

const loadData = async () => {
    const posts = await fetchData ("https://jsonplaceholder.typicode.com/posts")
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
}

loadData();