const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server.js');
const { MONGO_URI, History } = require('../models/workoutModels');

require("dotenv").config();

const clearDB = async () => {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    await collection.drop();
  }
}

describe('Route integration', () => {
  beforeEach(async () => {
    await mongoose.connect(MONGO_URI)
  });
  
  afterEach(async () => {
    await clearDB();
    await mongoose.connection.close();
  });
  
  
  describe("POST /api/chest", () => {
    it('should save sets to the database', async () => {
      const set = await request(app).post('/api/chest')
      .send({
        reps: 10,
        weight: 150,
        notes: 'test',
      })
      
      const res = await request(app).get('/api/chest');
      console.log('response body', res.body)
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    })
  })

  describe("GET /api/chest", () => {
    it("should return all sets as an array", async () => {
      const res = await request(app).get('/api/chest');
      console.log(res.body)
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    })
  })

})