import React from "react";
import MediaControlCard from "../components/MediaControlCard";
import CodeEntryForm from "../components/CodeEntryForm";

export default function UserInfo() {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <MediaControlCard />
      </div>
      <div style={{ marginBottom: 20 }}>
        <CodeEntryForm />
      </div>
    </div>
  );
}
