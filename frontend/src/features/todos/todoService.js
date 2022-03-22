import axios from "axios";

const API_URL = "/api/todo/";

// Create new goal
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, todoData, config);

  return response.data;
};

// // Get user goals
// const getGoals = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(API_URL, config);

//   return response.data;
// };

// // Delete user goal
// const deleteGoal = async (goalId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + goalId, config);

//   return response.data;
// };

const todoService = {
  createTodo,
};

export default todoService;