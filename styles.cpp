:root{
  --ayc-teal:#39B2C1;
  --ayc-green:#88BC31;
  --ayc-yellow:#F6C201;

  --bg:#F6FAFB;
  --text:#0B1B21;
  --muted:#5B6B73;

  --card:#FFFFFF;
  --stroke:rgba(11,27,33,.12);
  --shadow:0 16px 44px rgba(11,27,33,.10);
  --radius:20px;
  --max:1120px;
}

*{box-sizing:border-box}
body{
  margin:0;
  font-family:system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:linear-gradient(180deg,var(--bg),#fff);
  color:var(--text);
}

a{text-decoration:none;color:inherit}

.topbar{
  position:sticky;top:0;z-index:10;
  background:rgba(246,250,251,.85);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--stroke);
}

.topbar-inner{
  max-width:var(--max);
  margin:auto;
  padding:12px 18px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
}

.brand{display:flex;gap:12px;align-items:center}
.logo{
  width:42px;height:42px;border-radius:14px;
  background:linear-gradient(135deg,var(--ayc-teal),var(--ayc-green));
}

.brand span{font-size:12px;color:var(--muted)}

.wrap{
  max-width:var(--max);
  margin:auto;
  padding:24px 18px 80px;
}

.hero{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}
@media(max-width:900px){
  .hero{grid-template-columns:1fr}
}

.card{
  background:var(--card);
  border:1px solid var(--stroke);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  overflow:hidden;
}

.card-inner{padding:22px}

.kicker{
  display:inline-flex;
  gap:8px;
  padding:8px 12px;
  border-radius:999px;
  background:rgba(57,178,193,.15);
  font-weight:600;
}

.spark{
  width:18px;height:18px;border-radius:6px;
  background:linear-gradient(135deg,var(--ayc-teal),var(--ayc-yellow));
}

h1{margin:12px 0;font-size:clamp(28px,4vw,42px)}
.sub{color:var(--muted);line-height:1.6}

.btn{
  padding:12px 16px;
  border-radius:14px;
  border:1px solid var(--stroke);
  background:#fff;
  cursor:pointer;
  font-weight:600;
}

.btn.primary{
  background:linear-gradient(135deg,var(--ayc-teal),var(--ayc-green));
}

.small{padding:8px 10px;font-size:13px}

.icon{
  display:inline-grid;
  place-items:center;
  width:18px;height:18px;
}

.cta-row{display:flex;gap:10px;flex-wrap:wrap}

.video-wrap{padding:14px;background:#eef7f8}
.video{
  aspect-ratio:16/9;
  background:#000;
  border-radius:16px;
  overflow:hidden;
}

.section{
  margin-top:22px;
  padding:22px;
  background:#fff;
  border-radius:var(--radius);
  box-shadow:var(--shadow);
}

.bullets{list-style:none;padding:0;margin:12px 0;display:grid;gap:10px}
.bullet{
  display:flex;gap:10px;
  background:#f9fcfd;
  padding:12px;
  border-radius:14px;
}

.tick{
  width:22px;height:22px;
  border-radius:8px;
  background:linear-gradient(135deg,var(--ayc-yellow),var(--ayc-green));
  display:grid;place-items:center;
  font-weight:900;
}

.footer-cta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  background:linear-gradient(135deg,rgba(57,178,193,.2),rgba(136,188,49,.15));
}

.center-muted{
  margin-top:24px;
  text-align:center;
  color:var(--muted);
  font-size:13px;
}
.admin-only{ display:none; }
