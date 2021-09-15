import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { emailConfig } from './email.config';
import express from 'express';
import HttpResponse from '../http/HttpResponse';

const mailTransport = async () => {
    const OAuth2 = google.auth.OAuth2;

    const oauthClient = new OAuth2(
        emailConfig.clientId,
        emailConfig.clientSecret,
        emailConfig.uri
    );

    oauthClient.setCredentials({
        refresh_token: emailConfig.refreshToken
    });

    const accessToken = await oauthClient.getAccessToken();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: 'contact.opencts@gmail.com',
            accessToken,
            clientId: emailConfig.clientId,
            clientSecret: emailConfig.clientSecret,
            refreshToken: emailConfig.refreshToken
        }
    });
    return transporter;
};

const sendMail = async (subject, to, content) => {
    const transporter = await mailTransport();
    transporter.sendMail({
        from: 'OpenCTS <contact.opencts@gmail.com',
        to,
        subject,
        html: content
    });
};

function createEmailRouter(app) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        const { subject, to, content } = req.body;
        console.log(req.body)
        const httpResponse = new HttpResponse(res, 'send-email');
        try {
            await sendMail(subject, to, content);
            httpResponse.json(200, null, 'Email sent successfully!');
        } catch (e) {
            httpResponse.json(500, null, e.message);
        }
    });

    app.use('/api/send-mail', router);
}

export default createEmailRouter;