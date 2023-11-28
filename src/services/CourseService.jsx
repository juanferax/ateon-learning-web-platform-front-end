import axios from "axios";

function CourseService() {
  // Courses base endpoint
  const coursesUrl =
    "https://ateon-api-back-end-production.up.railway.app/ateon-api/v1/courses";

  const findById = async (id) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${coursesUrl}/${id}`, {
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

  const getCourseMetrics = async (id) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${coursesUrl}/${id}/metrics`, {
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

  return {
    findById,
    getCourseMetrics,
  };
}

export default CourseService;
