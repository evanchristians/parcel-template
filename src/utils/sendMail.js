export const sendMail = async (props) => {
    try {
        const response = await fetch(
            `https://formsubmit.co/ajax/${ADMIN_EMAIL}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(props),
            }
        );

        const data = await response.json();

        return { success: data.success };
    } catch (error) {
        return { error };
    }
};
