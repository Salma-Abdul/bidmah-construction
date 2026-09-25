function Materials() {
  const materials = [
    {
      name: "Cement",
      category: "Building Material",
      quantity: "120 bags",
      status: "In Stock",
    },
    {
      name: "Steel Bars",
      category: "Structural",
      quantity: "85 pieces",
      status: "In Stock",
    },
    {
      name: "Sand",
      category: "Building Material",
      quantity: "18 tonnes",
      status: "Low Stock",
    },
    {
      name: "Concrete Blocks",
      category: "Masonry",
      quantity: "450 pieces",
      status: "In Stock",
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
              Materials
            </h1>

            <p style={{ color: "#71807f" }}>
              Track construction materials and inventory.
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
            + Add Material
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
              Total Materials
            </p>

            <h2 style={{ color: "#173b39", marginBottom: 0 }}>
              24
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
              In Stock
            </p>

            <h2 style={{ color: "#159a8c", marginBottom: 0 }}>
              20
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
              Low Stock
            </p>

            <h2 style={{ color: "#c58a00", marginBottom: 0 }}>
              4
            </h2>
          </div>
        </div>

        {/* Materials Table */}
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
            Material Inventory
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
                <th style={{ padding: "14px" }}>Material</th>
                <th style={{ padding: "14px" }}>Category</th>
                <th style={{ padding: "14px" }}>Quantity</th>
                <th style={{ padding: "14px" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {materials.map((material, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#173b39",
                      fontWeight: "bold",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {material.name}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {material.category}
                  </td>

                  <td
                    style={{
                      padding: "16px 14px",
                      color: "#71807f",
                      borderBottom: "1px solid #e8eeee",
                    }}
                  >
                    {material.quantity}
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
                          material.status === "Low Stock"
                            ? "#fff3d6"
                            : "#dff3f0",
                        color:
                          material.status === "Low Stock"
                            ? "#9a6a00"
                            : "#087c70",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {material.status}
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

export default Materials;