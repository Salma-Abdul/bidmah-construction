function Users() {
  const users = [
    {
      name: "Ahmed Hassan",
      email: "ahmed@bidmah.com",
      role: "Company Owner",
      status: "Active",
    },
    {
      name: "Mary Wanjiku",
      email: "mary@bidmah.com",
      role: "Project Manager",
      status: "Active",
    },
    {
      name: "John Kamau",
      email: "john@bidmah.com",
      role: "Site Supervisor",
      status: "Active",
    },
    {
      name: "Fatima Ali",
      email: "fatima@bidmah.com",
      role: "Storekeeper",
      status: "Inactive",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f8f7",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, color: "#173b39" }}>
              Users
            </h1>

            <p style={{ color: "#71807f" }}>
              Manage users and their roles in the system.
            </p>
          </div>

          <button
            style={{
              background: "#159a8c",
              color: "white",
              border: "none",
              borderRadius: "9px",
              padding: "13px 20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            + Add User
          </button>
        </div>

        {/* Users Table */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "24px",
            boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            overflowX: "auto",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#173b39",
              fontSize: "20px",
            }}
          >
            System Users
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  background: "#f4f8f7",
                }}
              >
                <th style={{ padding: "14px" }}>Name</th>
                <th style={{ padding: "14px" }}>Email</th>
                <th style={{ padding: "14px" }}>Role</th>
                <th style={{ padding: "14px" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#173b39",
                      fontWeight: "bold",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {user.name}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {user.email}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "#dff3f0",
                        color: "#087c70",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background:
                          user.status === "Active"
                            ? "#dff3f0"
                            : "#ffe5e5",
                        color:
                          user.status === "Active"
                            ? "#087c70"
                            : "#b23b3b",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;