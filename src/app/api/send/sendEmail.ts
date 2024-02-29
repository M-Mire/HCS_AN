"use server";
import { Resend } from "resend";

const resend = new Resend("re_M31PpGXN_HDoRGMEyNNweutWpsnZtnyaV");

export const sendEmail = async (
  password: String,
  timeTaken: number,
  attempts: number,
  isCategorised: boolean
) => {
  const subject = new Date().toString();
  const html = `<div>
      <h1>Password: ${password}</h1>
      <h1>Time Taken: ${timeTaken}</h1>
      <h1>Attempts: ${attempts}</h1>
      <h1>isCategorised: ${isCategorised}</h1>
    </div>
  `;
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hcsan85@gmail.com",
      subject: subject,
      html: html,
    });
    return data;
  } catch (e) {
    throw e;
  }
};
