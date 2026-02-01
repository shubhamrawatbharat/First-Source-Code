const weapons = [
  {
    name: "Glock 19",
    inGameName: "9X19MM SIDEARM",
    image: "images/9X19MM SIDEARM.jpg"
  },
  {
    name: "Heckler & Koch USP45 Tactical",
    inGameName: "KM .45 TACTICAL",
    image: "images/KM .45 TACTICAL.jpg"
  },
  {
    name: "SIG-Sauer P228",
    inGameName: "228 Compact",
    image: "images/228 COMPACT.jpg"
  },
  {
    name: "IMI/Magnum Research Desert Eagle Mark XIX",
    inGameName: "Night Hawk .50C",
    image: "images/NIGHT HAWK .50C.jpg"
  },
  {
    name: "Fabrique Nationale Five-seveN",
    inGameName: "ES FIVE-SEVEN",
    image: "images/ES FIVE-SEVEN.jpg"
  },
  {
    name: "Beretta 92G Elite II",
    inGameName: ".40 DUAL ELITES",
    image: "images/.40 DUAL ELITES.jpg"
  },
  {
    name: "Benelli M3 Super 90",
    inGameName: "LEONE 12 GAUGE SUPER",
    image: "images/LEONE 12 GAUGE SUPER.jpg",
  },
  {
    name: "Benelli M4 Super 90",
    inGameName: "LEONE YG1265 AUTO SHOTGUN",
    image: "images/LEONE YG1265 AUTO SHOTGUN.jpg",
  },
  {
    name: "Steyr TMP",
    inGameName: "SCHMIDT MACHINE PISTOL",
    image: "images/SCHMIDT MACHINE PISTOL.jpg"
  },
  {
    name: "Ingram MAC-10",
    inGameName: "INGRAM MAC-10",
    image: "images/INGRAM MAC-10.jpg",
  },
  {
    name: "Heckler & Koch MP5N",
    inGameName: "KM SUB-MACHINE GUN",
    image: "images/KM SUB-MACHINE GUN.jpg",
  },
  {
    name: "Heckler & Koch UMP45",
    inGameName: "KM UMP45",
    image: "images/KM UMP45.jpg",
  },
  {
    name: "Fabrique Nationale P90",
    inGameName: "ES C90",
    image: "images/ES C90.jpg",
  },
  {
    name: "IMI Galil ARM",
    inGameName: "IDF DEFENDER",
    image: "images/IDF DEFENDER.jpg",
  },
  {
    name: "FAMAS F1",
    inGameName: "CLARION 5.56",
    image: "images/CLARION 5.56.jpg",
  },
  {
    name: "AK-47",
    inGameName: "CV-47",
    image: "images/CV-47.jpg",
  },
  {
    name: "M4A1 Carbine",
    inGameName: "MAVERICK M4A1 CARBINE",
    image: "images/MAVERICK M4A1 CARBINE.jpg",
  },
  {
    name: "SIG SG 552",
    inGameName: "KRIEG 552",
    image: "images/KRIEG 552.jpg",
  },
  {
    name: "Steyr AUG A1",
    inGameName: "BULLPUP",
    image: "images/BULLPUP.jpg",
  },
  {
    name: "Steyr Scout",
    inGameName: "SCHMIDT SCOUT",
    image: "images/SCHMIDT SCOUT.jpg",
  },
  {
    name: "SIG SG 550 SR",
    inGameName: "KRIEG 550 COMMANDO",
    image: "images/KRIEG 550 COMMANDO.jpg",
  },
  {
    name: "Accuracy International Arctic Warfare Super Magnum",
    inGameName: "MAGNUM SNIPER RIFLE",
    image: "images/MAGNUM SNIPER RIFLE.jpg",
  },
  {
    name: "Heckler & Koch G3SG/1",
    inGameName: "D3/AU-1",
    image: "images/D3 AU-1.jpg"
  },
  {
    name: "FN M249-E2 SAW",
    inGameName: "M249",
    image: "images/M249.jpg"
  }

  // Add more weapons as needed
];

function renderWeapons() {
  const container = document.getElementById("weapon-list");
  container.innerHTML = "";
  weapons.forEach(weapon => {
    container.innerHTML += `
      <div class="weapon-card">
        <img src="${weapon.image}" alt="${weapon.name}">
        <h2>${weapon.name}</h2>
        <p><strong>In-game name:</strong> ${weapon.inGameName}</p>
      </div>
    `;
  });
}

renderWeapons();