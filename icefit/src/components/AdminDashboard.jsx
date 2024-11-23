import { users } from "../data";
import { useState } from "react";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(users);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const filteredData = data.filter((user) => {
    if (role && search) {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) &&
        user.role.toLowerCase() === role.toLowerCase()
      );
    } else if (role) {
      return user.role.toLowerCase().includes(role.toLowerCase());
    } else if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return user;
    }
  });

  return (
    <section className="h-full flex flex-col items-center justify-around">
      <div className=" mx-auto w-3/4 space-y-3">
        <div className="w-1/4 flex items-center gap-2">
          <input
            type="text"
            name=""
            onChange={(e) => setSearch(e.target.value)}
            id=""
            value={search}
            placeholder="filter by name"
            className="border-2 border-gray-200 rounded-md p-1"
          />

          <select name="" id="role" onChange={(e) => setRole(e.target.value)}>
            <option value="">All</option>
            <option value="instructor">Instructors</option>
            <option value="client">Clients</option>
          </select>
        </div>

        <table className="border border-gray-300 min-h-[250px]">
          <thead className="border bg-gray-100">
            <tr className="border">
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Registered on</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="border p-5 text-center bg-slate-50 bg-opacity-70">
            {filteredData.map((user) => (
              <tr key={user.id} className="border">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.registeredOn}</td>
                <td className="p-2">
                  <button className="bg-red-500 text-white py-2 px-3 rounded text-nowrap">
                    Ban user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border bg-gray-100">
            <tr className="text-center">
              <td className="pl-6">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((curr) => curr - 1)}
                >
                  Previous
                </button>
              </td>
              <td colSpan={2} className="w-full text-center">
                Page {currentPage}
              </td>
              <td className="">
                <button onClick={() => setCurrentPage((curr) => curr + 1)}>
                  Next
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default AdminDashboard;
