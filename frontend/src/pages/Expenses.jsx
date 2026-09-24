function Expenses() {
  const expenses = [
    {
      description: "Cement purchase",
      project: "Westlands Commercial Site",
      amount: "KES 85,000",
      date: "24 Sep 2026",
      status: "Approved",
    },
    {
      description: "Transport costs",
      project: "Karen Residential Project",
      amount: "KES 32,500",
      date: "23 Sep 2026",
      status: "Approved",
    },
    {
      description: "Sand delivery",
      project: "Ruiru Housing Project",
      amount: "KES 18,000",
      date: "22 Sep 2026",
      status: "Pending",
    },
    {
      description: "Site equipment",
      project: "Westlands Commercial Site",
      amount: "KES 45,000",
      date: "21 Sep 2026",
      status: "Pending",
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
              Expenses
            </h1>

            <p style={{ color: "#71807f" }}>
              Track and manage construction project expenses.
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
            + Add Expense
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
              Total Expenses
            </p>

            <h2 style={{ color: "#173b39", marginBottom: 0 }}>
              KES 180,500
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
              Approved
            </p>

            <h2 style={{ color: "#159a8c", marginBottom: 0 }}>
              KES 117,500
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
              Pending
            </p>

            <h2 style={{ color: "#c58a00", marginBottom: 0 }}>
              KES 63,000
            </h2>
          </div>
        </div>

        {/* Expenses Table */}
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
            Recent Expenses
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
                <th style={{ padding: "14px" }}>Description</th>
                <th style={{ padding: "14px" }}>Project</th>
                <th style={{ padding: "14px" }}>Amount</th>
                <th style={{ padding: "14px" }}>Date</th>
                <th style={{ padding: "14px" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#173b39",
                      fontWeight: "bold",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {expense.description}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {expense.project}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#173b39",
                      fontWeight: "bold",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {expense.amount}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {expense.date}
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
                          expense.status === "Pending"
                            ? "#fff3d6"
                            : "#dff3f0",
                        color:
                          expense.status === "Pending"
                            ? "#9a6a00"
                            : "#087c70",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {expense.status}
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

export default Expenses;