import { renderHTML } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

getJSON(
  "https://t.if.co.id/json/badrul.json",
  "badrul",
  "boyz",
  responseFunction
);

function responseFunction(response) {
  console.log("HTTP Status:", response.status);
  console.log("Response Data:", response.data);

  if (response.status === 200) {
    // Assuming the response.data contains the JSON object with a "card" structure like the one you previously shared
    const profile = response.data.card;

    // Render profile data in HTML format
    const htmlContent = `
      <div class="card">
        <img src="${
          profile.profile - image
        }" alt="Foto Profil" class="profile-image">
        <h2 class="name">${profile.name}</h2>
        <p class="job-title">${profile.job - title}</p>
        <p class="info">${profile.quote}</p>
        <p class="info"><strong>Contact:</strong> ${profile.contact.phone}</p>
        <p class="info"><strong>Email:</strong> ${profile.contact.email}</p>
        <p class="skills"><strong>Languages:</strong> ${profile.skills.languages.join(
          ", "
        )}</p>
        <p class="skills"><strong>Hourly Rate:</strong> ${
          profile.skills["hourly-rate"]
        }</p>
        <div class="social-icons">
          ${profile["social-icons"]
            .map(
              (icon) => `
            <a href="${icon.url}" class="social-icon">
              <i class="${icon.icon}"></i> ${icon.platform}
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    // Assuming there's a container to insert the rendered HTML content
    renderHTML(htmlContent, document.body); // or a specific element like document.getElementById('profile-container')
  }
}
