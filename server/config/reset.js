import { pool } from "./database.js";
import "../config/dotenv.js";
import eventsData from "../data/events.js";

const createEventsTable = async () => {
  const createTableQuesry = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        date timestamp NOT NULL,
        image VARCHAR(255) NOT NULL
        );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  eventsData.forEach((event) => {
      const insertQuery = {
          text: 'INSERT INTO events (name, image, location, date) VALUES ($1, $2, $3, $4)',
          values: [
              event.name,
              event.image,
              event.location,
              event.date
          ],
      };

      pool.query(insertQuery, (err) => {
          if (err) {
              console.error('⚠️ error inserting event', err);
              return;
          }
          console.log(`✅ ${event.name} added successfully`);
      });
  });
};

seedEventsTable();