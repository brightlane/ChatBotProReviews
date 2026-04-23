import fs from "fs";

// =========================
// 🔗 AFFILIATE LINK
// =========================
const LINK = "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo";

// =========================
// 📄 LOAD ARTICLE (blog.html)
// =========================
function loadArticle() {
  return fs.readFileSync("blog.html", "utf-8");
}

// =========================
// 🧠 EXTRACT TITLE
// =========================
function getTitle(html) {
  const match = html.match(/<h1>(.*?)<\/h1>/);
  return match ? match[1] : "ManyChat Automation Guide";
}

// =========================
// ✍️ SOCIAL POST GENERATOR
// =========================
function generatePosts(title) {

  const posts = {

    twitter: `
🚀 ${title}

Most people are still doing Instagram marketing manually.

Automation changes everything.

DM funnels = faster leads + higher conversions.

👉 Start here: ${LINK}

#marketing #automation #instagramgrowth
`,

    instagram: `
🔥 ${title}

Instagram growth is no longer about posting more content.

It’s about automating conversations.

With DM automation, you can:
• Capture leads instantly
• Convert followers into customers
• Scale without extra effort

👉 Start here: ${LINK}
`,

    facebook: `
${title}

Businesses are shifting from manual marketing to automation systems.

Instead of replying to every message, tools like ManyChat handle conversations automatically.

This improves speed, consistency, and conversions.

👉 Get started: ${LINK}
`
  };

  return posts;
}

// =========================
// 💾 SAVE OUTPUT
// =========================
function savePosts(posts, title) {

  if (!fs.existsSync("social")) {
    fs.mkdirSync("social");
  }

  fs.writeFileSync(
    `social/twitter-post.txt`,
    posts.twitter
  );

  fs.writeFileSync(
    `social/instagram-post.txt`,
    posts.instagram
  );

  fs.writeFileSync(
    `social/facebook-post.txt`,
    posts.facebook
  );

  console.log("✅ Social posts created for:", title);
}

// =========================
// ⚙️ RUN SYSTEM
// =========================
function run() {

  const article = loadArticle();
  const title = getTitle(article);

  const posts = generatePosts(title);

  savePosts(posts, title);

  console.log("\nTWITTER POST:\n", posts.twitter);
  console.log("\nINSTAGRAM POST:\n", posts.instagram);
  console.log("\nFACEBOOK POST:\n", posts.facebook);
}

run();
