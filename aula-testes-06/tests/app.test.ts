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

describe("GET /event", () => {
  it("should return 200 and a body with the correct object", async () => {
    const { status, body } = await api.get("/event");
    expect(status).toBe(200);
    expect(body).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String),
    });
  });
});
