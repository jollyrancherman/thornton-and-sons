import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const body = await request.json<ContactFormData>();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resend = new Resend(env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Contact Form <noreply@thorntonandsons.com>",
    to: env.CONTACT_EMAIL,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({ success: true });
};
