// you can write your js code here

let bookmark_list = JSON.parse(localStorage.getItem("bookmark-list")) || [];

let tbody = document.querySelector("tbody");
function appendData(bookmark_list){
    console.log("ok")
    tbody.innerHTML = null;
    bookmark_list.forEach((element,index)=>{
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = element.name;
        let td2 = document.createElement("td");
        td2.innerText = element.author;
        let td3 = document.createElement("td");
        td3.innerText = element.desccription;
        let td4 = document.createElement("td");
        td4.innerText = element.addedDate;
        let td5 = document.createElement("td");
        td5.innerText = element.category;
        let td6= document.createElement("td");
        td6.innerText = element.price;
        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr);
    });
}

appendData(bookmark_list)