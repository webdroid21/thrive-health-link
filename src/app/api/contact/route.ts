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
            from: "Thrive Health Link <info@thrivehealthlink.org>",
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: `New ${type} from ${name}`,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #1a202c;
                            background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
                            padding: 20px 0;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            border-radius: 16px;
                            overflow: hidden;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05);
                        }
                        .header {
                            position: relative;
                            background: linear-gradient(135deg, #E67335 0%, #F08A5D 100%);
                            padding: 48px 40px;
                            text-align: center;
                            overflow: hidden;
                        }
                        .header::before {
                            content: '';
                            position: absolute;
                            top: -50%;
                            right: -10%;
                            width: 300px;
                            height: 300px;
                            background: rgba(255, 255, 255, 0.1);
                            border-radius: 50%;
                        }
                        .header::after {
                            content: '';
                            position: absolute;
                            bottom: -30%;
                            left: -5%;
                            width: 200px;
                            height: 200px;
                            background: rgba(255, 255, 255, 0.08);
                            border-radius: 50%;
                        }
                        .logo-circle {
                            position: relative;
                            width: 80px;
                            height: 80px;
                            background: rgba(255, 255, 255, 0.25);
                            backdrop-filter: blur(10px);
                            border: 3px solid rgba(255, 255, 255, 0.4);
                            border-radius: 50%;
                            margin: 0 auto 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 28px;
                            font-weight: 800;
                            color: white;
                            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                            z-index: 1;
                        }
                        .header-title {
                            position: relative;
                            color: #ffffff;
                            font-size: 28px;
                            font-weight: 800;
                            margin: 0 0 8px 0;
                            letter-spacing: -0.5px;
                            z-index: 1;
                        }
                        .header-subtitle {
                            position: relative;
                            color: rgba(255, 255, 255, 0.95);
                            font-size: 15px;
                            font-weight: 500;
                            z-index: 1;
                        }
                        .content-wrapper {
                            padding: 48px 40px;
                            background: #ffffff;
                        }
                        .badge-container {
                            text-align: center;
                            margin-bottom: 32px;
                        }
                        .type-badge {
                            display: inline-block;
                            background: linear-gradient(135deg, #3AAED8 0%, #2E9BB8 100%);
                            color: white;
                            padding: 8px 20px;
                            border-radius: 24px;
                            font-size: 13px;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            box-shadow: 0 4px 12px rgba(58, 174, 216, 0.3);
                        }
                        .info-card {
                            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                            border: 1px solid #e2e8f0;
                            border-radius: 12px;
                            padding: 24px;
                            margin-bottom: 20px;
                            position: relative;
                            overflow: hidden;
                        }
                        .info-card::before {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            width: 4px;
                            background: linear-gradient(180deg, #3AAED8 0%, #2E9BB8 100%);
                        }
                        .info-label {
                            font-weight: 700;
                            color: #E67335;
                            font-size: 11px;
                            text-transform: uppercase;
                            letter-spacing: 1.2px;
                            margin-bottom: 10px;
                            display: flex;
                            align-items: center;
                        }
                        .info-label::before {
                            content: '●';
                            margin-right: 8px;
                            font-size: 8px;
                        }
                        .sender-info {
                            display: flex;
                            align-items: center;
                            gap: 16px;
                        }
                        .sender-avatar {
                            width: 48px;
                            height: 48px;
                            background: linear-gradient(135deg, #E67335 0%, #F08A5D 100%);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                            font-weight: 700;
                            color: white;
                            flex-shrink: 0;
                            box-shadow: 0 4px 12px rgba(230, 115, 53, 0.3);
                        }
                        .sender-details {
                            flex: 1;
                        }
                        .sender-name {
                            font-weight: 700;
                            font-size: 17px;
                            color: #1a202c;
                            margin-bottom: 4px;
                        }
                        .sender-email {
                            color: #3AAED8;
                            text-decoration: none;
                            font-size: 14px;
                            font-weight: 500;
                        }
                        .sender-email:hover {
                            text-decoration: underline;
                        }
                        .message-card {
                            background: #ffffff;
                            border: 2px solid #E67335;
                            border-radius: 12px;
                            padding: 24px;
                            position: relative;
                            box-shadow: 0 2px 8px rgba(230, 115, 53, 0.08);
                        }
                        .message-card::before {
                            content: '"';
                            position: absolute;
                            top: -10px;
                            left: 20px;
                            font-size: 60px;
                            color: #E67335;
                            opacity: 0.2;
                            font-family: Georgia, serif;
                            line-height: 1;
                        }
                        .message-text {
                            color: #2d3748;
                            font-size: 15px;
                            line-height: 1.8;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                            position: relative;
                            z-index: 1;
                        }
                        .divider {
                            height: 2px;
                            background: linear-gradient(90deg, #E67335 0%, #3AAED8 100%);
                            margin: 40px 0;
                            border-radius: 2px;
                            box-shadow: 0 2px 8px rgba(230, 115, 53, 0.2);
                        }
                        .cta-section {
                            text-align: center;
                            padding: 24px;
                            background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
                            border-radius: 12px;
                            margin-top: 32px;
                        }
                        .cta-label {
                            color: #64748b;
                            font-size: 13px;
                            font-weight: 600;
                            margin-bottom: 16px;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                        }
                        .reply-button {
                            display: inline-block;
                            background: linear-gradient(135deg, #E67335 0%, #F08A5D 100%);
                            color: white;
                            padding: 16px 36px;
                            border-radius: 8px;
                            text-decoration: none;
                            font-weight: 700;
                            font-size: 15px;
                            box-shadow: 0 6px 20px rgba(230, 115, 53, 0.35);
                            transition: all 0.3s ease;
                        }
                        .footer {
                            background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
                            padding: 40px;
                            text-align: center;
                        }
                        .timestamp {
                            color: #cbd5e0;
                            font-size: 14px;
                            margin-bottom: 20px;
                            font-weight: 500;
                        }
                        .timestamp strong {
                            color: #e2e8f0;
                        }
                        .footer-text {
                            color: #94a3b8;
                            font-size: 13px;
                            line-height: 1.6;
                        }
                        .footer-link {
                            color: #3AAED8;
                            text-decoration: none;
                            font-weight: 600;
                        }
                        .footer-link:hover {
                            text-decoration: underline;
                        }
                        @media only screen and (max-width: 640px) {
                            body {
                                padding: 10px;
                            }
                            .email-container {
                                border-radius: 12px;
                            }
                            .header {
                                padding: 36px 24px;
                            }
                            .content-wrapper {
                                padding: 32px 24px;
                            }
                            .footer {
                                padding: 32px 24px;
                            }
                            .info-card {
                                padding: 20px;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <!-- Header with decorative circles -->
                        <div class="header">
                            <div class="logo-circle">THL</div>
                            <h1 class="header-title">Thrive Health Link</h1>
                            <p class="header-subtitle">New Message Received</p>
                        </div>

                        <!-- Main Content -->
                        <div class="content-wrapper">
                            <!-- Type Badge -->
                            <div class="badge-container">
                                <span class="type-badge">${type || 'General Inquiry'}</span>
                            </div>
                            
                            <!-- Sender Information Card -->
                            <div class="info-card">
                                <div class="info-label">Contact Details</div>
                                <div class="sender-info">
                                    <div class="sender-avatar">${name.charAt(0).toUpperCase()}</div>
                                    <div class="sender-details">
                                        <div class="sender-name">${name}</div>
                                        <a href="mailto:${email}" class="sender-email">${email}</a>
                                    </div>
                                </div>
                            </div>

                            <!-- Message Card -->
                            <div class="info-card" style="background: white; border: none; padding: 0;">
                                <div style="padding: 0 0 12px 0;">
                                    <div class="info-label">Message</div>
                                </div>
                                <div class="message-card">
                                    <div class="message-text">${message.replace(/\n/g, '<br>')}</div>
                                </div>
                            </div>

                            <!-- Decorative Divider -->
                            <div class="divider"></div>

                            <!-- Call to Action -->
                            <div class="cta-section">
                                <div class="cta-label">Quick Actions</div>
                                <a href="mailto:${email}?subject=Re: ${type || 'Your inquiry'}" class="reply-button">
                                    Reply to ${name.split(' ')[0]}
                                </a>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="footer">
                            <div class="timestamp">
                                <strong>Received:</strong> ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            })}
                            </div>
                            <div class="footer-text">
                                This message was sent via the Thrive Health Link contact form.<br>
                                <a href="https://thrivehealthlink.org" class="footer-link">Visit our website</a> · 
                                <a href="mailto:${CONTACT_EMAIL}" class="footer-link">Contact Support</a>
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
