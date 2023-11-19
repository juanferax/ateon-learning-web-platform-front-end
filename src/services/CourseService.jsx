import axios from "axios";

function CourseService() {
  // Courses base endpoint
  const coursesUrl = "http://localhost:3000/ateon-api/v1/courses";

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

  return {
    findById,
  };
}

export default CourseService;
