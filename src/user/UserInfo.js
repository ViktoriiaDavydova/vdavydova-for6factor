import React from "react";
import UserCard from "./UserCard";
import CodeEntryForm from "../components/CodeEntryForm";

/**
 * Component for displaying user information gotten from UserCard and CodeEntryForm components
 */

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
