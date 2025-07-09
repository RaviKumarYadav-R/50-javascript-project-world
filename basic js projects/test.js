let avtar = document.querySelector("#avtar")
let follower = document.querySelector(".follower-count")


const apiUrl = "https://api.github.com/users/hiteshchoudhary";

let xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl);
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    avtar.src = data.avatar_url;
    follower.innerHTML = `${data.followers} followers`
    
  }
};
xhr.send();
