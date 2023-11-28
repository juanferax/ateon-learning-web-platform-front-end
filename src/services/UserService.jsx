import axios from "axios";

function UserService() {
  // Users base endpoint
  const usersUrl =
    "https://ateon-api-back-end-production.up.railway.app/ateon-api/v1/users";

  const findById = async (id) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${usersUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  const saveNote = async (note) => {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Note: " + note);

    try {
      const response = await axios.post(`${usersUrl}/${user._id}/notes`, note, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Respuesta del servidor save note:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  return {
    findById,
    saveNote,
  };
}

export default UserService;
