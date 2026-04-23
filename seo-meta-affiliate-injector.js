export function buildSEOPage({
  title,
  description,
  url,
  keywords = "",
  content = ""
}) {

  // =========================
  // 🔗 AFFILIATE LINKS (GLOBAL)
  // =========================
  const LINKS = {
    main: "https://manychat.partnerlinks.io/nwkkk7vkps17",
    ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
    free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
    insta: "https://manychat.partnerlinks.io/8k59yhm0l32j-z7dk2i",
    pricing: "https://manychat.partnerlinks.io/98hj6b3pr28k-4znb59"
  };

  // =========================
  // 🧠 AUTO AFFILIATE BLOCK (inject everywhere)
  // =========================
  const affiliateBlock = `
<div style="margin:30px 0; padding:15px; border:1px solid #ddd;">
  <h3>Start Automating Your Growth</h3>
  <a href="${LINKS.ig}">👉 Instagram Automation Tool</a><br>
  <a href="${LINKS.free}">👉 Try Free Trial</a><br>
  <a href="${LINKS.main}">👉 Main System</a>
</div>
`;

  // =========================
  // 🌐 FULL SEO META TAGS
  // =========================
  const meta = `
<!DOCTYPE html>
<html lang="en">

<head>

<title>${title}</title>

<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">

<!-- Open Graph -->
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="article">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">

<!-- Structured Data (Google SEO Boost) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "url": "${url}"
}
</script>

</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>${title}</h1>

<p>${description}</p>

`;

  // =========================
  // 🔗 CONTENT + AFFILIATE INSERTION
  // =========================
  const body = `
${content}

${affiliateBlock}

<hr>

<p>
Built with automation systems using ManyChat-style workflows.
</p>

</body>
</html>
`;

  return meta + body;
}
