const fetch = require('node-fetch');

async function test() {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.log("Aucune variable d'environnement WEB3FORMS_ACCESS_KEY définie.");
    return;
  }
  const web3formsPayload = {
    access_key: accessKey,
    name: "Test TTL",
    email: "test@teranga-trade-logistics.com",
    subject: "[TTL] Test Web3Forms",
    message: "Ceci est un message de test technique TTL.",
    replyto: "test@teranga-trade-logistics.com"
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3formsPayload),
    });

    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Response:", text);
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
