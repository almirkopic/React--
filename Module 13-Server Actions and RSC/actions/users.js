"use server";

import fs from "node:fs";

export async function saveUserAction(formData) {
  console.log("Executed");

  // Proverite relativnu putanju do fajla
  const filePath = "./dummy-db.json";

  // Čitanje fajla sa ispravnim enkodiranjem
  const data = fs.readFileSync(filePath, "utf-8");
  const instructors = JSON.parse(data);

  // Dodavanje novog instruktora
  const newInstructor = {
    id: new Date().getTime().toString(),
    name: formData.get("name"),
    title: formData.get("title"),
  };

  instructors.push(newInstructor);

  // Pisanje nazad u fajl
  fs.writeFileSync(filePath, JSON.stringify(instructors, null, 2)); // Dodato formatiranje za čitljivost
}
