import { pool } from "./database.js";
import "../config/dotenv.js";
import eventsData from "../data/events.js";
import locationsData from "../data/locations.js";

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
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
          text: 'INSERT INTO events (title, image, location, date) VALUES ($1, $2, $3, $4)',
          values: [
              event.title,
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

//Now for locations
const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL
        );
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 locations table created successfully");
  } catch (err) {
    console.error("⚠️ error creating locations table", err);
  }
};

const seedLocationsTable = async () => {
  await createLocationsTable();

  locationsData.forEach((location) => {
      const insertQuery = {
          text: 'INSERT INTO locations (name, address, city, state) VALUES ($1, $2, $3, $4)',
          values: [
              location.name,
              location.address,
              location.city,
              location.state
          ],
      };

      pool.query(insertQuery, (err) => {
          if (err) {
              console.error('⚠️ error inserting location', err);
              return;
          }
          console.log(`✅ ${location.name} added successfully`);
      });
  });
};

seedEventsTable();
seedLocationsTable();