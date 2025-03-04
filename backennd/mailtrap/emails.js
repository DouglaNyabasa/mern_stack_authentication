import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE(verificationToken),
            category: "Email Verification",
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "af8e5e15-dfa2-433f-8bad-c84268bb2e0b",
			template_variables: {
				"company_info_name": "Modest Geeks Auth Company",
                "name":name,
			},
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};
