import React from "react";

export const Bookmarks = () => {
  React.useEffect(() => {
    document.title = "Bookmarks || Privacy Protector";
  }, []);
  return <div>Bookmarks</div>;
};
