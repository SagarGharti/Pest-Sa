export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, phone, message } = req.body;
    
    // Validate input
    if (!name || !phone || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Format the message
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    
    // Replace this with the admin's WhatsApp number (include country code)
    const adminWhatsAppNumber = '9779868338755';

    // Create the WhatsApp click to chat link
    const whatsappLink = `https://wa.me/${adminWhatsAppNumber}?text=${whatsappMessage}`;

    res.status(200).json({ whatsappLink });
}