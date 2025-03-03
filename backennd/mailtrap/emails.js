import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async(email, verificationToken)=>{

    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE("{verificationCode}",verificationToken),
            category: "Email Verification",

        })
        console.log("Email sent successfuly", response)
    } catch (error) {
        console.error(`Error sending verrification`, error);
        throw new error(`Error sending verification email: ${error}`)
    }
}