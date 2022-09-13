

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
