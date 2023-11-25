import axios from "axios";

function UserService() {
  // Users base endpoint
  const usersUrl = "http://localhost:3000/ateon-api/v1/users";

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

      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  return {
    saveNote,
  };
}

export default UserService;
