const sendEmail = async ({ to, subject, text }) => {
  if (!to || !subject || !text) {
    return null;
  }

  // Configure Nodemailer here when email notifications are needed.
  return null;
};

export default sendEmail;
