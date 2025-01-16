import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Safely initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Log the entire request body for debugging
    const body = await request.json();
    console.log('Received body:', body);

    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>', // Replace with your verified domain
      to: 'ossamaoutmani@gmail.com', // Your email where you want to receive contact form submissions
      subject: `New Contact Form Portfolio from ${name}`,
      html: `
        <h1>New Message from Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Log Resend response for debugging
    console.log('Resend response:', { data, error });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Email sent successfully', 
      data 
    });

  } catch (error) {
    // Log the full error for debugging
    console.error('Unexpected error:', error);

    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }, { status: 500 });
  }
}