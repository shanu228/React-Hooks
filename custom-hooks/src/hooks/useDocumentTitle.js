import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    console.log("inside cutome hook");
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
