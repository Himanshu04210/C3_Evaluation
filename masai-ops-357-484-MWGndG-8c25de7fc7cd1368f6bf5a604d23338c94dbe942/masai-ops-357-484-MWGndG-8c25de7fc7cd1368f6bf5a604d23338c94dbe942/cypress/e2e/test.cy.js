import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://localhost:8080/", id: 67890 }]
import "cypress-localstorage-commands";
// import { start, submitData } from "../../../data";


const Data = [
  {
    name: "R",
    author: "R",
    desc: "G",
    added: "2020-01-01",
    category: "Finance",
    price: 1,
  },
  {
    name: "P",
    author: "P",
    desc: "G",
    added: "2020-01-01",
    category: "Fiction",
    price: 1,
  },
  {
    name: "H",
    author: "R",
    desc: "G",
    added: "2020-01-01",
    category: "Self Help",
    price: 1,
  },
];

describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {     

      function FormSubmit(data, score, LSLen) {
        cy.get("#name").clear().type(data.name);
        cy.get("#author").clear().type(data.author);
        cy.get("#desc").clear().type(data.desc);
        cy.get("#added").clear().type(data.added);
        cy.get("#category").select(data.category);
        cy.get("#price").clear().type(data.price);
        cy.get("form")
          .submit()
          .should(() => {
            expect(JSON.parse(localStorage.getItem("book-list")).length).to.equal(
              LSLen
            );
          })
          .then(() => {
            acc_score += score;
          });
      }
    
      function CheckTable(data, score, index) {
        cy.get("tr").eq(index).contains("td", data.name);
        cy.get("tr").eq(index).contains("td", data.desc);
        cy.get("tr").eq(index).contains("td", data.author);
        cy.get("tr").eq(index).contains("td", data.added);
        cy.get("tr").eq(index).contains("td", data.category);
        cy.get("tr")
          .eq(index)
          .contains("td", data.price)
          .then(() => {
            acc_score += score;
          });
      }

      function navigation(text) {
        cy.get("#navbar").contains("a", text).click();
      }
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
    
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it("Form Submit is Working Fine", () => {
        cy.visit(url);
        FormSubmit(Data[0], 1, 1);
      }); // Score:- 1
      it("Check the Data after mutiple form submits", () => {
        FormSubmit(Data[1], 0.5, 2);
        FormSubmit(Data[2], 0.5, 3);
      }); // Score:- 1
      it("Check the Dashboard page's Table", () => {
        navigation("Dashboard");
        CheckTable(Data[0], 1 / 3, 1);
        CheckTable(Data[1], 1 / 3, 2);
        CheckTable(Data[2], 1 / 3, 3);
      }); // Score:- 1
      it("Check the total Table size", () => {
        cy.get("#book-count")
          .contains(3)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Check Filtering is Done", () => {
        cy.get("select").select("Finance");
        CheckTable(Data[0], 0.5, 1);
        cy.get("select").select("");
        cy.get("tr")
          .should("have.length", 4)
          .then(() => {
            acc_score += 0.5;
          });
        cy.reload();
      }); // Score:-1
      it("Add  To My Books and Check the Deleting", () => {
        cy.get("tr").eq(1).contains("td", "Buy").click();
        cy.get("tbody>tr")
          .should("have.length", 2)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Add  To Bookmark and Check the Deleting", () => {
        cy.get("tr").eq(1).contains("td", "Add").click();
        cy.get("tbody>tr")
          .should("have.length", 1)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Visit My Books Page and Check Table", () => {
        navigation("My Books");
        CheckTable(Data[0], 1, 1);
      }); // Score:- 1
      it("Check The Bookmark Page", () => {
        navigation("Bookmark");
        CheckTable(Data[1], 1, 1);
      }); // Score:- 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
