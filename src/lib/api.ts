export const sendContactForm = async (data: any) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

// export const login = async (data: any) =>
//   fetch("/api/login", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//   }).then((res) => {
//     if (!res.ok) throw new Error("Failed to login");
//     return res.json();
//   });

export const signUp = async (data: any) =>
  fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to sign up");
    return res.json();
  });

// export const getContactMessages = async (token: string) =>
//   fetch("/api/contactMessages", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => {
//     if (!res.ok) throw new Error("Failed to get messages");
//     return res.json();
//   });

export const ForgetPassword = async (data: any) =>
  fetch("/api/forgotPassword", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send email");
    return res.json();
  });

export const changePassword = async (data: any) =>
  fetch("/api/changePassword", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to change password");
    return res.json();
  });

export const deleteMessage = async (data: any) =>
  fetch("/api/deleteMessage", {
    method: "Delete",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to change password");
    return res.json();
  });
