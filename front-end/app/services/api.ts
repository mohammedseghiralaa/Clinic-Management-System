export const loginAdmin = async (data: { email: string; password: string }) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Invalid email or password");
  }

  const result = await res.json();
  return result; // ترجع البيانات للـmutation
};
