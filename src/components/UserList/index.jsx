import React from "react";
import User from "../User";

const UserList = ({ users }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
