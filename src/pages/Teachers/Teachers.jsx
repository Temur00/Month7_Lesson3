import React, { useEffect, useState } from "react";
import "./Teachers.scss";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Teachers = ({ user }) => {
  const [teachers, setTeachers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searched, setSearched] = useState("");

  const fetchTeachers = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/teachers`);
      setTeachers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product? ❌")) {
      axios
        .delete(`http://localhost:3000/teachers/${id}`)
        .then((res) => {
          console.log("Product deleted successfully ✅", res.data);
          fetchTeachers(); // Fetch teachers data after successful deletion
        })
        .catch((error) => {
          console.log("The product was not deleted ❌");
        });
    }
  };

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // FILTER
  const filteredTeachers =
    selectedCategory === "all"
      ? teachers
      : teachers.filter((teacher) => teacher.level === selectedCategory);

  // SEARCH
  const searchedTeachers = searched
    ? filteredTeachers.filter(
        (teacher) =>
          teacher.firstname.toLowerCase().includes(searched.toLowerCase()) ||
          teacher.lastname.toLowerCase().includes(searched.toLowerCase())
      )
    : filteredTeachers;

  return (
    <div className="wrong">
      <div className="all-teachers">
        <div className="like-header">
          <p className="teachers">Teachers</p>
          <input
            className="search"
            type="search"
            name="search"
            id="search"
            placeholder="Search ..."
            onChange={handleSearch}
          />
          <select
            className="filter"
            name="all"
            id="all"
            onChange={handleCategory}
            value={selectedCategory}
          >
            <option value="all">All</option>
            <option value="senior">Senior</option>
            <option value="middle">Middle</option>
            <option value="junior">Junior</option>
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchedTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.firstname}</td>
                <td>{teacher.lastname}</td>
                <td>{teacher.level}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(teacher.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers;
