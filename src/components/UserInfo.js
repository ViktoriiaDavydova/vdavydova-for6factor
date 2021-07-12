import React from "react";
import UserCard from "./UserCard";
import CodeEntryForm from "../components/CodeEntryForm";

export default function UserInfo() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <UserCard />
      </div>
      <div style={{ marginBottom: 20 }}>
        <CodeEntryForm />
      </div>
    </div>
  );
}
