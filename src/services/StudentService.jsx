import axios from "axios";

function StudentService() {
  // Students base endpoint
  const studentsUrl =
    "https://ateon-api-back-end-production.up.railway.app/ateon-api/v1/students";

  //   const findById = async (id) => {
  //     const token = localStorage.getItem("accessToken");

  //     try {
  //       const response = await axios.get(`${studentsUrl}/${id}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       console.log("Respuesta del servidor:", response.data);
  //       return response.data;
  //     } catch (error) {
  //       console.error("Error al hacer la petición:", error);
  //     }
  //   };

  const getStudentCourses = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${studentsUrl}/courses`, {
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

  const getStudentSchedule = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${studentsUrl}/schedules`, {
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
    getStudentCourses,
    getStudentSchedule,
  };
}

export default StudentService;
