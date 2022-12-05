// you can write your js code here

let form = document.querySelector("form");

let book_list = JSON.parse(localStorage.getItem("book-list"))|| [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let objData = {
        name: form.name.value,
        author: form.author.value,
        desccription: form.desc.value,
        addedDate: form.added.value,
        category: form.category.value,
        price: form.price.value
    };
    console.log(objData)
    book_list.push(objData);
    localStorage.setItem("book-list",JSON.stringify(book_list));
});

