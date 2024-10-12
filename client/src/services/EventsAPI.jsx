export const getAllEvents = async () => {
  try {
    const response = await fetch("/api/events");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const getEventById = async (id) => {
  try {
    const response = await fetch(`/api/events/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
