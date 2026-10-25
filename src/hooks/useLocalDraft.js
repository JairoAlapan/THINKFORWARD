import { useEffect, useState } from "react";

export function readDraft(key, empty) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

/**
 * Keeps one draft object in this browser's local storage.
 * Nothing is sent anywhere; the student decides when to save or clear.
 */
export default function useLocalDraft(key, empty) {
  const [values, setValues] = useState(() => readDraft(key, empty));
  const [savedAt, setSavedAt] = useState(null);

  useEffect(() => {
    setValues(readDraft(key, empty));
    setSavedAt(null);
  }, [key]);

  const setField = (field, text) => setValues((prev) => ({ ...prev, [field]: text }));

  const save = () => {
    const stamp = new Date();
    window.localStorage.setItem(key, JSON.stringify({ ...values, _savedAt: stamp.toISOString() }));
    setSavedAt(stamp);
  };

  const clear = () => {
    window.localStorage.removeItem(key);
    setValues(empty);
    setSavedAt(null);
  };

  const restoreStamp = () => {
    try {
      const raw = window.localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed?._savedAt ? new Date(parsed._savedAt) : null;
    } catch {
      return null;
    }
  };

  return { values, setField, save, clear, savedAt, restoreStamp };
}