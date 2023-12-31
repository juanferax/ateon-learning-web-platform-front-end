import axios from "axios";

function ProfessorService() {
  // Students base endpoint
  const professorsUrl =
    "https://ateon-api-back-end-production.up.railway.app/ateon-api/v1/professors";

  const getProfessorCourses = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${professorsUrl}/courses`, {
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

  const getProfessorSchedule = async (date = null) => {
    const token = localStorage.getItem("accessToken");

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = date
        ? await axios.get(`${professorsUrl}/schedules/${date}`, {
            headers: headers,
          })
        : await axios.get(`${professorsUrl}/schedules`, { headers: headers });

      console.log("Respuesta del servidor:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al hacer la petición:", error);
    }
  };

  return {
    getProfessorCourses,
    getProfessorSchedule,
  };
}

export default ProfessorService;
