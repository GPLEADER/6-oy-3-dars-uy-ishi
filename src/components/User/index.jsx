import React from "react";

const User = ({ user }) => {
    const { image, firstName, lastName, phone, email, address, cars } = user;

    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                width: "200px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <img src={image} alt="" />
            <h3 style={{ margin: "0 0 10px" }}>{firstName}</h3>
            <h3 style={{ margin: "0 0 10px" }}>{lastName}</h3>
            <p style={{ margin: "0 0 5px" }}>📧 {email}</p>
            <p style={{ margin: "0" }}>📞 {phone}</p>
            <p style={{ margin: "0 0 5px" }}>📍{address.region}</p>
            <p style={{ margin: "0 0 5px" }}>📍{address.zip}</p>
            <p style={{ margin: "0 0 5px" }}>🚗{cars[0]} {cars[1]}</p>
        </div>
    );
};

export default User;
