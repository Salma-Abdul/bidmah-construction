import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Company Owner");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      role,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#eaf4fb",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          minHeight: "580px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "white",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 10px 35px rgba(18, 59, 93, 0.15)",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            background: "#123b5d",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "50px",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "35px",
            }}
          >
            BIDMAH
          </div>

          <h1
            style={{
              fontSize: "36px",
              margin: "0 0 20px",
              lineHeight: "1.2",
            }}
          >
            Construction
            <br />
            Operations
          </h1>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.7",
              maxWidth: "350px",
              color: "#eaf4fb",
            }}
          >
            Manage projects, site reports, materials, expenses
            and attendance from one simple dashboard.
          </p>

          <p
            style={{
              marginTop: "30px",
              fontSize: "14px",
              color: "#b9d9ee",
            }}
          >
            Simple • Mobile • Accountable
          </p>
        </div>

        {/* Right Side */}
        <div
          style={{
            padding: "55px 50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h2
              style={{
                margin: "0 0 10px",
                color: "#123b5d",
                fontSize: "30px",
              }}
            >
              Welcome back
            </h2>

            <p
              style={{
                margin: 0,
                color: "#71808a",
              }}
            >
              Sign in to your Bidmah account
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#123b5d",
                fontWeight: "bold",
              }}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #c9dce9",
                borderRadius: "9px",
                outline: "none",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            />

            {/* Password */}
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#123b5d",
                fontWeight: "bold",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #c9dce9",
                borderRadius: "9px",
                outline: "none",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            />

            {/* Role */}
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#123b5d",
                fontWeight: "bold",
              }}
            >
              Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #c9dce9",
                borderRadius: "9px",
                outline: "none",
                marginBottom: "25px",
                fontSize: "14px",
                background: "white",
              }}
            >
              <option>Company Owner</option>
              <option>Project Manager</option>
              <option>Site Supervisor</option>
              <option>Storekeeper</option>
              <option>Procurement Officer</option>
              <option>Foreman</option>
            </select>

            {/* Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                background: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "9px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#9aa7ad",
              fontSize: "12px",
            }}
          >
            BIDMAH Construction Operations System
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;