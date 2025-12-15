import AirXEmail from "@/app/emails/airx";
import { Resend } from "resend";

export async function POST() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["bishu.hover@gmail.com"],
      subject: "Hello world",
      react: AirXEmail(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
