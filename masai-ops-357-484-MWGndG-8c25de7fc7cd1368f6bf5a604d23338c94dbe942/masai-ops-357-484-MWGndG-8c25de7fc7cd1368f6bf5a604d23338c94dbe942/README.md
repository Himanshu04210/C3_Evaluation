# WEB - Masai Library Management App

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit is Working Fine - 1 mark.
 ✅ Check the Data after multiple forms submit - 1 mark.
 ✅ Check the Dashboard page's Table - 1 mark.
 ✅ Check the total Table size - 1 mark.
 ✅ Check Filtering is Done - 1 mark.
 ✅ Add To My Books and Check the Deleting- 1 mark.
 ✅ Add To Bookmark and Check the Deleting- 1 mark.
 ✅ Visit My Books Page and Check Table- 1 mark.
 ✅ Check The Bookmark Page- 1 mark. 
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- Scripts
- Styles
- index.html
- dashboard.html
- buy.html
- bookmark.html


- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Before writing any code please read the problem statement very carefully.
- Here you have to build a Library Management System.
- Your application had a Navbar that contains 4 tabs (this is already in the template no need to build).
- Home
- Dashboard
- My Books
- Bookmark
#### Home Page:-
- This page contains a form with 5 input boxes and one select tag having the following fields (this is already in the template no need to build).
- Book Name
- Author Name
- Book Description
- Added Date
- Book Category(Select)
- On clicking on form submit (form submit event) you should store students' data in your local storage with the key "book-list"
- Hint : localStorage.setItem("book-list",JSON.stringify)

#### Refer to this image for better understanding:-

![alt text](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-18/Screenshot%202022-08-18%20at%2010.12.16%20AM_354865.png)

- Refer to this doc to understand how to take input values from date - Link
#### Dashboard Page:-
- On this page, all the data from the book list will be shown in a table format.
- The table will have the following columns:-
- Name
- Author
- Description
- Added Date
- Category
- Price
- Buy
- Bookmark
- Here the values will come from the LacalStorage Except for the last 2 columns.
- In the Buy column for each row you should put the value Buy.
- In the Bookmark column for each row you should put the value Add.
- These texts Add and Buy are case-sensitive so please make sure there is no spelling mistake.
- When you click on the Buy button that particular row should be deleted and should be added in a new localStorage with the key buy-list
- Hint : localStorage.setItem("buy-list",JSON.stringify)
- Similarly when you click on the Add button that particular row should be deleted and should be added in a new localStorage with the key bookmark-list

#### Refer to this image for better understanding:-
![alt text](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-18/Screenshot%202022-08-18%20at%2010.18.48%20AM_713775.png)

- On this page, we will also have a part that counts the no of current books added. It should be updated along with adding new books or deleting books.
- We will also have a select tag. Using this we can filter books by category.
#### My Books Page:-
- On this page, all the data from the buy list will be shown in a table format.
#### The table will have the following columns:-
- Name
- Author
- Description
- Added Date
- Category
- Price
- Here the values will come from the Local storage.
#### Refer to this image for better understanding:-
![alt text](https://i.imgur.com/KM7kYcS.png)

#### Bookmark Page:-
- On this page, all the data from the bookmark list will be shown in a table format.
- The table columns are same as the My Books Page.
#### Refer to this image for better understanding:-
![alt text](https://i.imgur.com/YDDioy9.png)
#### General guidelines:-
- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
