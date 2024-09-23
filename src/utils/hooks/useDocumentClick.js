import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    console.log("useDocumentClick");

    const handDocumentClick = (e) => {
      console.log("Clicked document");
    };

    document.addEventListener("click", handDocumentClick, false);
    return () => {
      document.removeEventListener("click", handDocumentClick, false);
    };
  }, []);
}
