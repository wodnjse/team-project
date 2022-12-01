function Seoul() {
    fetch('http://localhost:8000/data/seoul') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "location.href='https://www.mangoplate.com/search/${element.명소}'">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function Gyeonggi() {
    fetch('http://localhost:8000/data/gyeonggi') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "location.href='https://www.mangoplate.com/search/${element.명소}'">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function Sokcho() {
    fetch('http://localhost:8000/data/sokcho') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "location.href='https://www.mangoplate.com/search/${element.명소}'">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                    </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function Busan() {
    fetch('http://localhost:8000/data/busan') // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "window.open('https://www.mangoplate.com/search/${element.명소}')">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                        </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });
}

function changeTagSeoul() {
    document.getElementById('tagSeoul').style.backgroundColor = "#186ADE";
    document.getElementById('tagSeoul').style.color= "#fff";

    document.getElementById('tagGyeonggi').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagSokcho').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagBusan').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagGyeonggi').style.color= "#000";
    document.getElementById('tagSokcho').style.color= "#000";
    document.getElementById('tagBusan').style.color= "#000";
}
function changeTagGyeonggi() {
    document.getElementById('tagGyeonggi').style.backgroundColor = "#186ADE";
    document.getElementById('tagGyeonggi').style.color= "#fff";

    document.getElementById('tagSeoul').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagSokcho').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagBusan').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagSeoul').style.color= "#000";
    document.getElementById('tagSokcho').style.color= "#000";
    document.getElementById('tagBusan').style.color= "#000";
}
function changeTagSockcho() {
    document.getElementById('tagSokcho').style.backgroundColor = "#186ADE";
    document.getElementById('tagSokcho').style.color= "#fff";

    document.getElementById('tagSeoul').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagGyeonggi').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagBusan').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagSeoul').style.color= "#000";
    document.getElementById('tagGyeonggi').style.color= "#000";
    document.getElementById('tagBusan').style.color= "#000";
}
function getCityData(city) {
    fetch(`http://localhost:8000/data/${city}`) // 해당 주소의 api를 불러옴
        .then((response) => response.json()) // 불러온 api 값을 response로 받고 response값을 json으로 리턴 한다.
        .then((data) => { //그 값이 data라는 변수에 json array 형태로 들어감
            data.forEach(element => { //가져온 값의 모든 값을 가져오기 위해 forEach문으로 모든 요소를 반복해 가져옴
                const list = document.getElementById('listElement') // 읽어온 데이터를 추가할 리스트의 아이디를 가져옴
                list.insertAdjacentHTML('beforeend', `
                <li class = "auction-row" onclick = "window.open('https://www.mangoplate.com/search/${element.명소}')">
                        <p class = "auctionID">${element.명소}</p>
                        <p class = "auctionAddress">⭐${element.별점}</p>
                        </li>
                `); // 아이디로 가져온 값을 html 문으로 반복해서 뒤에 추가함
            });
        });

}
function loadCity(city) {
    let tags = {
        'seoul': 'tagSeoul',
        'gyeonggi': 'tagGyeonggi',
        'sokcho': 'tagSokcho',
        'busan': 'tagBusan'
    }

    document.getElementById('listElement').innerHTML = '';
    getCityData(city);
    changeTag(tags[city]);
}



loadCity('seoul');

function changeTag(selectedTag) {
    let tagList = ['tagSeoul', 'tagGyeonggi', 'tagSokcho', 'tagBusan'];
    tagList = tagList.filter(tag => tag !== selectedTag)

    document.getElementById(selectedTag).style.backgroundColor = "#186ADE";
    document.getElementById(selectedTag).style.color = "#fff";

    for (let tag of tagList) {
        document.getElementById(tag).style.backgroundColor = "#DCE3E8";
        document.getElementById(tag).style.color = "#000";
    }
    /*  document.getElementById('tagSeoul').style.backgroundColor= "#DCE3E8";
      document.getElementById('tagGyeonggi').style.backgroundColor= "#DCE3E8";
      document.getElementById('tagSokcho').style.backgroundColor= "#DCE3E8";
      document.getElementById('tagSeoul').style.color= "#000";
      document.getElementById('tagGyeonggi').style.color= "#000";
      document.getElementById('tagSokcho').style.color= "#000";*/
}






/* html에서 onClick 사용해서 js에서 onClick 사용 안됨

document.getElementById('tagBusan').onclick = function () {
    this.style.backgroundColor = "#186ADE";
    this.style.color = "#fff";
    document.getElementById('tagSeoul').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagGyeonggi').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagSokcho').style.backgroundColor= "#DCE3E8";
    document.getElementById('tagSeoul').style.color= "#000";
    document.getElementById('tagGyeonggi').style.color= "#000";
    document.getElementById('tagSokcho').style.color= "#000";
}
*/