// let ii = document.getElementById("ah");

// inputValue.onclick = function (event) {
//   console.log(event.target.parentElement.children[2]);
//   event.target.parentElement.children[2].style.display = "block";
//   //   if ((event.target.parentElement.children[2].style.display = "none")) {
//   //     event.target.parentElement.children[2].style.display = "block";
//   //   } else {
//   //     event.target.parentElement.children[2].style.display = "none";
//   //   }
// };

// function displayBox(event) {
//   if (display == "none") {
//     display == "";
//   } else {
//     display == "none";
//   }
// }
// let arrObj = [];
// let objects = {
//   id: null,
//   title: "",
//   description: "",
//   image: "",
//   pageId: null,
// };
// function fn(exception, jsonData) {
//   arrObj = [];
//   const arrTitleResponse = jsonData[1];
//   if (Array.isArray(jsonData)) {
//     let arrTitle = [];
//     for (let index = 0; index < arrTitleResponse.length; index++) {
//       arrTitle.push(arrTitleResponse[index]);
//     }
//     for (let index = 0; index < arrTitle.length; index++) {
//       objects = {
//         id: index,
//         title: arrTitle[index],
//         description: "",
//         image: "",
//       };
//       arrObj.push(objects);
//     }
//     arrObj.forEach((element) => {
//       url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageprops|pageimages&format=json&titles=${element.title}`;
//       getData(url, getThumbnail);
//     });
//     addElement();
//   }
// }
let inputValue = document.getElementById("ah");

inputValue.addEventListener("input", (text) => getURL(text.target.value));

function getURL(key) {
  console.log(key);

  url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${key}`;
  getData(url, fn);
}

function getData(url, fn) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        fn(undefined, JSON.parse(xhr.responseText));
      } else {
        fn(new Error(xhr.statusText), undefined);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

//   let pro = new Promise((resolve, reject) => {
//     getData(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${}`, (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
