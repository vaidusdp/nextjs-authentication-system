import nodemailer from "nodemailer";
import User from "@/models/userModels";
import bcrypt from "bcryptjs";

export const sendEmail = async ({email, emailType, userId}:any) => {
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10);

        if(emailType == "VERIFY"){
            await User.findByIdAndUpdate(userId, 
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 360000
                }
            )
        } else if(emailType == "RESET-PASSWORD"){
            await User.findByIdAndUpdate(userId, 
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 360000
                }
            )
        }

        var transport = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT),
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        const mailOptions = {
            from: "vaidusbhanwala@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password",
            html: `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser: <br> ${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}
            </p>`
        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } catch (error:any) {
        throw new Error(error.message)
    }
}