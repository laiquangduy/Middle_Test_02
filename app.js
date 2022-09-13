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
// let inputValue = document.getElementById("ah");

// inputValue.addEventListener("input", (text) => getURL(text.target.value));

// function getURL(key) {
//   console.log(key);

//   let resultUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${key}`;
//   //   getData(url, fn);
//   let search = new Promise((resolve, reject) => {
//     getData(resultUrl, (err, re) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(re);
//       }
//     });
//   });
//   search
//     .then((re) => {
//       let resultThumb = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageprops|pageimages&format=json&titles=${resSeach[0]}`;
//       let proThumb = new Promise((resolve, reject) => {
//         getData(resultThumb, (errThumb, resThumb) => {
//           if (errThumb) {
//             reject(errThumb);
//           } else {
//             resolve(resThumb);
//           }
//         });
//       });
//       proThumb
//         .then((resultThumb) => {
//           let tempArr = resultThumb.query.pages;
//           let tempArr2 = Object.values(tempArr);

//           let tempKey = "wikibase-shortdesc";
//           let linkTitle = tempArr2[0].pageprops[tempKey];

//           let linkImg = tempArr2[0].thumbnail.source;

//           //--------
//           divData.innerHTML = "";
//           for (let i = 0; i < 5; i++) {
//             divData.innerHTML += `<div class="wrapper-1"><img src=${linkImg} alt="" class="img">
//                   <div class="wrapper-2"><h3>${resSeach[1][i]}</h3> <p>${linkTitle}</p></div></div>`;
//           }
//           //------

//           // //Event on click
//           // let onClick = document.getElementById('onclick');
//           // console.log(onClick);
//         })
//         .catch((errThumb) => console.log(errThumb));
//     })
//     .catch((err) => console.log("error"));
// }

// //API get key function:

// function getData(url, fn) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         fn(undefined, JSON.parse(xhr.responseText));
//       } else {
//         fn(new Error(xhr.statusText), undefined);
//       }
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

//   let pro = new Promise((resolve, reject) => {
//     getData(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${}`, (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });

let userInput = document.getElementById("ah");
// console.log(userInput);
let divData = document.getElementById("wp");
// console.log(divData);

//Render url
userInput.addEventListener("input", (text) => getUrl(text.target.value));

function getUrl(key) {
  let resultUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limit=10&format=json&search=${key}`;

  // return resultUrl;
  let proSeach = new Promise((resolve, reject) => {
    getData(resultUrl, (errSeach, resSeach) => {
      if (errSeach) {
        reject(errSeach);
      } else {
        resolve(resSeach);
      }
    });
  });
  // proSeach.then((resSeach) => console.log(resSeach[1][1])).catch((errSeach) => console.log(errSeach));
  proSeach
    .then((resSeach) => {
      let resultThumb = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageprops|pageimages&format=json&titles=${resSeach[0]}`;
      let proThumb = new Promise((resolve, reject) => {
        getData(resultThumb, (errThumb, resThumb) => {
          if (errThumb) {
            reject(errThumb);
          } else {
            resolve(resThumb);
          }
        });
      });
      proThumb
        .then((resultThumb) => {
          let tempArr = resultThumb.query.pages;
          console.log(tempArr);

          let tempArr2 = Object.values(tempArr);

          let tempKey = "wikibase-shortdesc";
          let linkTitle = tempArr2[0].pageprops[tempKey];

          let linkImg = tempArr2[0].thumbnail.source;
          //   console.log(linkImg);
          for (let i =0;i<5;i++){
            let resultThumb1 = 
          }

          //--------
          wp.innerHTML = "";
          for (let i = 0; i < 5; i++) {
            wp.innerHTML += `<div class="wrapper-1"><img src='${linkImg}' alt="" class="img">
            <div class="wrapper-2"><h3>${resSeach[1][i]}</h3> <p>${linkTitle} </p></div></div>`;
          }
          //------

          // //Event on click
          // let onClick = document.getElementById('onclick');
          // console.log(onClick);
        })
        .catch((errThumb) => console.log(errThumb));
    })
    .catch((errSeach) => console.log(errSeach));
}

//API get key function:
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
