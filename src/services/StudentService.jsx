import axios from "axios";

function StudentService() {
  // Students base endpoint
  const studentsUrl = "http://localhost:3000/ateon-api/v1/students";

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

  return {
    getStudentCourses,
  };
}

export default StudentService;
