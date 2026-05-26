import { useState } from "react";
import notice from "../data/notice";

export default function NoticeBar() {
  const [visible, setVisible] = useState(() => {
    if (!notice || !notice.pinned) return false;
    try {
      const now = new Date();
      const start = notice.startDate ? new Date(notice.startDate) : null;
      const end = notice.endDate ? new Date(notice.endDate) : null;
      const inRange = (!start || now >= start) && (!end || now <= end);
      const dismissedKey = `noticeDismissed:${notice.id}`;
      const dismissedTime = localStorage.getItem(dismissedKey);
      const dismissedDate = dismissedTime ? new Date(dismissedTime) : null; 
      const dismissed = dismissedDate && start && end ? dismissedDate >= start && dismissedDate <= end : false;
      return inRange && !dismissed;
    } catch {
      return false;
    }
  });

  if (!visible) return null;

  const handleClose = () => {
    try {
      localStorage.setItem(`noticeDismissed:${notice.id}`, new Date().toISOString());
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  return (
    <div
      className="sticky top-0 z-50 text-white flex items-center justify-between gap-4 px-4 py-2 shadow-md"
      style={{ backgroundColor: notice.color || "#dc2626" }}
      role="region"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <strong className="font-semibold">{notice.title}</strong>
        <span className="opacity-95">{notice.message}</span>
      </div>
      <button
        className="text-white bg-transparent text-lg p-1 hover:opacity-90 focus:outline-none"
        onClick={handleClose}
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
