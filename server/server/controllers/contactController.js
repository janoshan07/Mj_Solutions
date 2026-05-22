import Contact from '../models/Contact.js';

export const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, subject, and message are required.'
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message
    });

    return res.status(201).json({
      success: true,
      message: 'Contact message submitted successfully.',
      data: contact
    });
  } catch (error) {
    return next(error);
  }
};
