import app from "../src/app";
import supertest from "supertest";

describe("GET /health", () => {
  it("should return the status Code 200", async () => {
    const result = await supertest(app).get("/health");
    expect(result.statusCode).toEqual(200);
  });
  it("should return the text OK!", async () => {
    const result = await supertest(app).get("/health");

    expect(result.text).toEqual("OK!");
  });
});
