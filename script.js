/* ===== CONFIGURA AQUÍ ===== */
const CTA_URL   = "https://www.aycsalud.com/";
const VIDEO_URL = "https://www.youtube.com/watch?v=LLUpTvVqMzk";

/* ===== SEGURIDAD (básica pero efectiva para público normal) ===== */
const ADMIN_PASSWORD = "CAMBIA-ESTO-123"; // <-- pon tu clave aquí
const storageKey = "aycLandingEdits";
const adminKey   = "aycAdminUnlocked";

/* ===== CTA LINKS ===== */
["cta1","cta2","cta3"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = CTA_URL;
});

/* ===== VIDEO ===== */
function youtubeEmbed(url){
  const m = url.match(/v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}
const videoBox = document.getElementById("videoBox");
const yt = youtubeEmbed(VIDEO_URL);
if(videoBox && yt){
  videoBox.innerHTML = `<iframe src="${yt}" frameborder="0" allowfullscreen></iframe>`;
}

/* ===== AÑO ===== */
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== EDICIÓN ===== */
const editable = [...document.querySelectorAll("[data-edit]")];
let editing = false;

function loadEdits(){
  const data = JSON.parse(localStorage.getItem(storageKey) || "{}");
  editable.forEach(el=>{
    const k = el.dataset.edit;
    if(data[k] != null) el.innerHTML = data[k];
  });
}

function saveEdits(){
  const data = {};
  editable.forEach(el => data[el.dataset.edit] = el.innerHTML);
  localStorage.setItem(storageKey, JSON.stringify(data));
  alert("✅ Cambios guardados en este navegador.");
}

function setEditing(on){
  editing = on;
  editable.forEach(el => el.contentEditable = on ? "true" : "false");
}

/* ===== ADMIN GATE =====
   Solo muestra barra admin si:
   - la URL tiene ?admin=1
   - y además desbloqueas con contraseña
*/
function isAdminModeRequested(){
  const params = new URLSearchParams(location.search);
  return params.get("admin") === "1";
}

function isAdminUnlocked(){
  return localStorage.getItem(adminKey) === "1";
}

function showAdminBar(show){
  const bar = document.getElementById("adminBar");
  if(bar) bar.style.display = show ? "flex" : "none";
}

function promptUnlock(){
  const pass = prompt("🔒 Clave admin:");
  if(pass === ADMIN_PASSWORD){
    localStorage.setItem(adminKey, "1");
    showAdminBar(true);
    alert("✅ Admin desbloqueado.");
  }else{
    alert("❌ Clave incorrecta.");
  }
}

function lockAdmin(){
  localStorage.removeItem(adminKey);
  setEditing(false);
  showAdminBar(false);
  alert("🔒 Edición bloqueada.");
}

/* ===== BOTONES ===== */
const btnToggle = document.getElementById("toggleEdit");
const btnSave   = document.getElementById("saveEdits");
const btnLock   = document.getElementById("lockEdits");

/* ===== INIT ===== */
loadEdits();
setEditing(false);

// Si NO pones ?admin=1, nadie ve los botones.
if(isAdminModeRequested()){
  // Si ya desbloqueaste antes, muestra; si no, pide clave.
  if(isAdminUnlocked()){
    showAdminBar(true);
  }else{
    // Ocultos hasta que desbloquee
    showAdminBar(false);
    promptUnlock();
  }
} else {
  showAdminBar(false);
}

// Acciones de admin (si existen)
if(btnToggle) btnToggle.onclick = () => setEditing(!editing);
if(btnSave)   btnSave.onclick   = saveEdits;
if(btnLock)   btnLock.onclick   = lockAdmin;
