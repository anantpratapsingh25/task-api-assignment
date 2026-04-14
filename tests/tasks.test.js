const request = require("supertest");
const app = require("../src/app");

describe("Tasks API", () => {

  test("GET /tasks should return 200", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
  });

  test("POST /tasks should create task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test task" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test task");
  });

  test("POST /tasks should fail if title is empty", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "" });

    expect(res.statusCode).toBe(400);
  });

  test("POST /tasks should fail if title is missing", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({});

    expect(res.statusCode).toBe(400);
  });

  test("PUT /tasks/:id should return 404 for invalid id", async () => {
    const res = await request(app)
      .put("/tasks/invalid-id")
      .send({ title: "Updated" });

    expect(res.statusCode).toBe(404);
  });

  test("PATCH /tasks/:id/assign should assign user", async () => {
    const createRes = await request(app)
      .post("/tasks")
      .send({ title: "Task to assign" });

    const id = createRes.body.id;

    const res = await request(app)
      .patch(`/tasks/${id}/assign`)
      .send({ assignee: "Anant" });

    expect(res.statusCode).toBe(200);
    expect(res.body.assignee).toBe("Anant");
  });

});