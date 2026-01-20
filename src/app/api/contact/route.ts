import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message, type } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Email configuration
        const CONTACT_EMAIL = "thrivehealthlink@gmail.com";

        // In a production environment, you would use a service like:
        // - Resend (recommended)
        // - SendGrid
        // - AWS SES
        // - Nodemailer with SMTP

        // For now, we'll log the submission and return success
        // You'll need to set up one of the above services to actually send emails

        console.log("Contact form submission:", {
            to: CONTACT_EMAIL,
            from: email,
            name,
            type,
            message,
            timestamp: new Date().toISOString(),
        });

        // Example with Resend (uncomment and configure when ready):
        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
            from: 'Thrive Health Link <noreply@yourdomain.com>',
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: `New ${type} from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });
        */

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been received. We'll get back to you soon!"
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
