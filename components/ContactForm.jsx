import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Perform form validation here (optional)

    // Send data to your backend or email service
    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        alert('Message sent successfully!')
      } else {
        alert('Failed to send message.')
      }
    } catch (error) {
      console.error(
        'Error sending message:',
        error
      )
      alert(
        'An error occurred. Please try again later.'
      )
    }
  }

  return (
    <form
      className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
      onSubmit={handleSubmit}
    >
      <h3 className='text-4xl text-accent'>
        Lets work together
      </h3>
      <p className='text-white/60'>
        Feel free to reach out and discuss your
        project.
      </p>
      {/*  input fields */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          type='text'
          name='firstname'
          placeholder='First Name'
          value={formData.firstname}
          onChange={handleChange}
        />
        <Input
          type='text'
          name='lastname'
          placeholder='Last Name'
          value={formData.lastname}
          onChange={handleChange}
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type='tel'
          name='phone'
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      {/*  select */}
      <select
        name='service'
        className='w-full p-2 rounded bg-gray-800 text-white'
        value={formData.service}
        onChange={handleChange}
      >
        <option
          value=''
          disabled
        >
          Select a service
        </option>
        <option value='web'>
          Web Development
        </option>
        <option value='ux'>UX/UI Design</option>
        <option value='fullstack'>
          Full-Stack Development
        </option>
        <option value='branding'>Branding</option>
      </select>
      {/*  textarea */}
      <Textarea
        name='message'
        className='h-[200px]'
        placeholder='Type your message here'
        value={formData.message}
        onChange={handleChange}
      />
      {/*  submit button */}
      <Button
        size='md'
        type='submit'
        className='max-w-50'
      >
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
