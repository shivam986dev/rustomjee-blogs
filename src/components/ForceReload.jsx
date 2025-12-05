import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ForceReload() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lastPath = sessionStorage.getItem("lastPath");
    if (lastPath === pathname) {
      return;
    }
    sessionStorage.setItem("lastPath", pathname);
    window.location.reload();
  }, [pathname]);
  return null;
}
