import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });
});

describe("GET /fibonacci", () => {
  it("should return 400 when is not passed the query string elements", async () => {
    const { status } = await api.get("/fibonacci");
    expect(status).toBe(400);
  });
  it("should return 400 when the query string elements is NaN", async () => {
    const elements = NaN;
    const { status } = await api.get("/fibonacci").query({ elements });
    expect(status).toBe(400);
  });
  it("should return 400 when the query string elements is less than 1", async () => {
    const elements = 0;
    const { status } = await api.get("/fibonacci").query({ elements });
    expect(status).toBe(400);
  });
  it("should return 400 when the query string elements is bigger than Max Value", async () => {
    const { status } = await api.get(
      `/fibonacci?elements=${Number.MAX_VALUE + 1}`
    );
    expect(status).toBe(400);
  });
  it("should return a valid Body and status 200 when the query string is valid", async () => {
    const elements = 6;
    const { status, body } = await api.get("/fibonacci").query({ elements });
    expect(status).toBe(200);
    expect(body).toHaveLength(6);
    expect(body).toEqual([0, 1, 1, 2, 3, 5]);
  });
});
