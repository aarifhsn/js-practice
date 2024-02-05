// 4 ways to call api- XMLHttpRequest, fetch, axios, jquery
// js xml HTTP Request
// js api calling

const makeRequest = (method, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onload =() => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  }
  
  xhr.onerror = () => {
    console.log('error is here');
  }

  xhr.send();
}

const getData =() => {
  makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}
  
getData();