import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "info@thrivehealthlink.org";

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

        // Initialize Resend client
        const resend = new Resend(process.env.RESEND_API_KEY || "re_ehsuiHD2_EcH7jNBVYtwGiNWb1XVsoANV");

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "Thrive Health Link <info@thrivehealthlink.org>", // TODO: Change to info@thrivehealthlink.org after domain verification
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: `New ${type} from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(to right, #0073E6, #16A34A); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                        .field { margin-bottom: 20px; }
                        .label { font-weight: bold; color: #0073E6; margin-bottom: 5px; }
                        .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #16A34A; }
                        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2 style="margin: 0;">New Contact Form Submission</h2>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Type:</div>
                                <div class="value">${type}</div>
                            </div>
                            <div class="field">
                                <div class="label">Name:</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="label">Email:</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            <div class="field">
                                <div class="label">Message:</div>
                                <div class="value">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                            <div class="footer">
                                <p>Received: ${new Date().toLocaleString()}</p>
                                <p>Reply directly to ${email} to respond to this inquiry.</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error("Resend API error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again later." },
                { status: 500 }
            );
        }

        console.log("Email sent successfully:", data);

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully! We'll get back to you soon."
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
