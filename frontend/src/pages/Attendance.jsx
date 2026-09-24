
function Attendance() {
  const workers = [
    {
      name: "Ahmed Hassan",
      role: "Site Supervisor",
      site: "Westlands Commercial Site",
      time: "7:45 AM",
      status: "Present",
    },
    {
      name: "Mary Wanjiku",
      role: "Foreman",
      site: "Karen Residential Project",
      time: "7:52 AM",
      status: "Present",
    },
    {
      name: "John Kamau",
      role: "Construction Worker",
      site: "Ruiru Housing Project",
      time: "8:10 AM",
      status: "Late",
    },
    {
      name: "Fatima Ali",
      role: "Storekeeper",
      site: "Westlands Commercial Site",
      time: "-",
      status: "Absent",
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
              Attendance
            </h1>

            <p style={{ color: "#71807f" }}>
              Monitor staff attendance across construction sites.
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
            + Record Attendance
          </button>
        </div>

        {/* Summary Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "15px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>
              Total Workers
            </p>

            <h2 style={{ color: "#173b39", marginBottom: 0 }}>
              86
            </h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "15px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>
              Present Today
            </p>

            <h2 style={{ color: "#159a8c", marginBottom: 0 }}>
              78
            </h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "15px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ color: "#71807f", margin: 0 }}>
              Absent
            </p>

            <h2 style={{ color: "#c58a00", marginBottom: 0 }}>
              8
            </h2>
          </div>
        </div>

        {/* Attendance Table */}
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
            Today's Attendance
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
                <th style={{ padding: "14px" }}>Worker</th>
                <th style={{ padding: "14px" }}>Role</th>
                <th style={{ padding: "14px" }}>Site</th>
                <th style={{ padding: "14px" }}>Time</th>
                <th style={{ padding: "14px" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {workers.map((worker, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#173b39",
                      fontWeight: "bold",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {worker.name}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {worker.role}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {worker.site}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {worker.time}
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
                          worker.status === "Present"
                            ? "#dff3f0"
                            : worker.status === "Late"
                            ? "#fff3d6"
                            : "#ffe5e5",
                        color:
                          worker.status === "Present"
                            ? "#087c70"
                            : worker.status === "Late"
                            ? "#9a6a00"
                            : "#b23b3b",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {worker.status}
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

export default Attendance;