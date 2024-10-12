export const getAllLocations = async () => {
  try {
    console.log("trying")
    const response = await fetch("/api/locations");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const getLocationById = async (id) => {
  try {
    const response = await fetch(`/api/locations/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
