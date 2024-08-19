import axios from "axios";

const WA_ACCESS_TOKEN = process.env["WA_ACCESS_TOKEN"];
const WA_URL = process.env["WA_URL"];
const GOOGLE_SECRET_KEY = process.env["GOOGLE_SECRET_KEY"];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { recaptchaValue, accessToken, whatsappUrl } = req.body;

    // Validate the reCAPTCHA token
    const secretKey = GOOGLE_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaValue}`;

    try {
      const response = await axios.post(verificationUrl);
      const { success } = response.data;

      if (success) {
        try {
          const response = await fetch(WA_URL, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${WA_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: formData.phone,
              type: "template",
              template: {
                name: "contact",
                language: {
                  code: "en-US",
                },
                components: [
                  {
                    type: "body",
                    parameters: [
                      {
                        type: "text",
                        text: formData.name,
                      },
                      {
                        type: "text",
                        text: formData.phone,
                      },
                      {
                        type: "text",
                        text: formData.message,
                      },
                    ],
                  },
                ],
              },
            }),
          });
        } catch (error) {
          res.status(500).json({ message: "Server error" });
        }
      } else {
        res.status(400).json({ message: "reCAPTCHA validation failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
}
