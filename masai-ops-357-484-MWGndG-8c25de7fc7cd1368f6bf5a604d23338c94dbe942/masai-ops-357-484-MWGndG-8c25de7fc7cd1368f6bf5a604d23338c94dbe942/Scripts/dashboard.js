// you can write your js code here
let book_list = JSON.parse(localStorage.getItem("book-list"))|| [];
let tbody = document.querySelector("tbody");

let buy_list = JSON.parse(localStorage.getItem("buy-list")) || [];
let bookmark_list = JSON.parse(localStorage.getItem("bookmark-list")) || [];


let book_count = document.getElementById("book-count");

function appendData(book_list){
    book_count.innerText = book_list.length;
    tbody.innerHTML = null;
    book_list.forEach((element,index)=>{
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



        let td6 = document.createElement("td");
        td6.innerText = "Buy";
        td6.addEventListener("click",()=>{
            buy_list.push(element);
            console.log(element)
            localStorage.setItem("buy-list", JSON.stringify(buy_list));
            book_list.splice(index,1);
            localStorage.setItem("book-list" , JSON.stringify(book_list));
            appendData(book_list);
        });


        let td7 = document.createElement("td");
        td7.innerText = "Add";

        td7.addEventListener("click", ()=>{
            bookmark_list.push(element);
            localStorage.setItem("bookmark-list", JSON.stringify(bookmark_list));
            book_list.splice(index,1);
            localStorage.setItem("book-list", JSON.stringify(book_list));
            appendData(book_list);
        })



        let td8 = document.createElement("td");
        td8.innerText = element.price;
        tr.append(td1,td2,td3,td4,td5,td6,td7, td8)
        tbody.append(tr);
    });
}


appendData(book_list);


let filter = document.getElementById("filter");

filter.addEventListener("change",(e)=>{
    let brand = e.target.value;

    if(brand == "Fiction"){
        let filterData = book_list.filter((ele,ind)=>{
            return brand == ele.category;
        })
        appendData(filterData);

    }else if(brand == "Self Help"){
        let filterData = book_list.filter((ele,ind)=>{
            return brand == ele.category;
        })
        appendData(filterData);

    }else if(brand == "Finance"){
        let filterData = book_list.filter((ele,ind)=>{
            return brand == ele.category;
        })
        appendData(filterData)
    }else{
        appendData(book_list)
    }
});