const { expect } = require("chai")
const storyteller = require("./index")

describe("Schema creation", () => {
  it("exists", () => expect(storyteller.sheet).to.be.ok)
})
