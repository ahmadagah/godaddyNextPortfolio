// app/api/contact.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    } = req.body

    // Handle form submission, e.g., send an email, save to a database, etc.
    console.log('Form Data:', {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    })

    res
      .status(200)
      .json({
        message: 'Message sent successfully!',
      })
  } else {
    res
      .status(405)
      .json({ message: 'Method Not Allowed' })
  }
}
