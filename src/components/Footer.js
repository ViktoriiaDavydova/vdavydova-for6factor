import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="alignleft">Some Text Here Maybe Contacts or Links</div>
      <div className="alignright">Some Text Here Maybe Contacts or Links</div>
    </footer>
  );
}
