const { chromium } = require("playwright");

const baseUrl = process.env.APP_URL || "http://127.0.0.1:5173";

const questions = [
  { q: "Quelle destination choisir pour un amateur d'art ?", expected: "Florence 1504" },
  { q: "Le Cretace est-il dangereux ?", expected: "capsule securisee" },
  { q: "Quel voyage est le plus romantique ?", expected: "Paris 1889" },
  { q: "Quels sont les prix ?", expected: "12 400" },
  { q: "Peut-on voyager avec des enfants ?", expected: "famille" },
  { q: "Comment reserver ?", expected: "formulaire" },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  const logs = [];

  page.on("console", (msg) => logs.push(`${msg.type()}: ${msg.text()}`));
  page.on("pageerror", (err) => logs.push(`pageerror: ${err.message}`));

  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const title = await page.locator("h1").innerText();
  await page.getByRole("button", { name: /Ouvrir le chatbot/ }).click();

  const chatResults = [];
  for (const item of questions) {
    await page.getByLabel("Message pour le chatbot").fill(item.q);
    await page.getByRole("button", { name: "Envoyer" }).click();
    await page.waitForTimeout(700);

    const chatText = await page.locator(".chat-messages").innerText();
    chatResults.push({
      question: item.q,
      ok: chatText.includes(item.expected),
      expected: item.expected,
    });
  }

  await page.getByRole("button", { name: "Quiz", exact: true }).click();
  await page.getByRole("button", { name: "Culturelle et artistique" }).click();
  await page.getByRole("button", { name: "Renaissance et classicisme" }).click();
  await page.getByRole("button", { name: "L'art et l'architecture" }).click();
  await page.getByRole("button", { name: "Explorer des musees" }).click();
  await page.waitForTimeout(300);

  const quizText = await page.locator(".quiz-result").innerText();
  const brokenImages = await page.locator("img").evaluateAll((imgs) =>
    imgs
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.getAttribute("src")),
  );

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "networkidle" });
  const mobileMenuVisible = await page.getByRole("button", { name: "Menu" }).isVisible();

  await browser.close();

  const report = {
    title,
    chatResults,
    quizRecommendsFlorence: quizText.includes("Florence 1504"),
    brokenImages,
    mobileMenuVisible,
    consoleIssues: logs.filter((entry) => /error|pageerror/i.test(entry)),
  };

  console.log(JSON.stringify(report, null, 2));

  const failedChat = chatResults.filter((result) => !result.ok);
  if (
    failedChat.length > 0 ||
    !report.quizRecommendsFlorence ||
    brokenImages.length > 0 ||
    !mobileMenuVisible ||
    report.consoleIssues.length > 0
  ) {
    process.exit(1);
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
