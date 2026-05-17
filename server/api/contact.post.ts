import PocketBase from 'pocketbase';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const { name, email, message, company, budget, timeframe, turnstileToken, website } = body;

    if (website) {
        return {
            status: 400,
            message: 'Bad request.',
        };
    }
    const isValidToken = await verifyTurnstileToken(turnstileToken);

    if (!isValidToken) {
        return {
            status: 422,
            message: 'Invalid Turnstile token.',
        };
    }

    if (!name || !email || !message) {
        return {
            status: 400,
            message: 'All fields are required.',
        };
    }

    
    const pb = new PocketBase(config.pbUrl);
    const pbAuthData = await pb.collection('users').authWithPassword(config.pbUsername, config.pbPassword);

    try {
        await pb.collection('business_contacts').create({
            name,
            email,
            message,
            company,
            budget,
            timeframe,
            status: 'lead',
        });
        pb.authStore.clear();
        fetch(config.pipedreamNotificationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.pipedreamToken}`

            },
            body: JSON.stringify({
                name,
                email,
                message,
                fromSite: "CGB Tech Solutions",
            }),
        });
    } catch (error) {
        console.error('Error saving contact message:', error);
        return {
            status: 500,
            message: 'An error occurred while saving your message. Please try again later.',
        };
    }   

    return {
        status: 200,
        message: 'Message received. We will get back to you shortly.',
    };
});