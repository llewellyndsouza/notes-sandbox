describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "users name",
      username: "username",
      password: "password",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user); //To add a new user
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("Notes");
    cy.contains(
      "Note app, by Llewellyn Dsouza - part of the FullStackOpen.com"
    );
  });

  it("login form can be opened", function () {
    cy.contains("log in").click();
  });

  it("user can login", function () {
    cy.contains("log in").click();
    cy.get("#username").type("username");
    cy.get("#password").type("password");
    cy.get("#login-button").click();
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.contains("LogOut").click();
      cy.contains("log in").click();
      cy.get("#username").type("username");
      cy.get("#password").type("password");
      cy.get("#login-button").click();
    });

    it("a new note can be created", function () {
      cy.contains("New Note").click();
      cy.get("#newNoteInput").type("a note created by cypress");
      cy.contains("save").click();
      cy.contains("a note created by cypress");
    });
  });
});
