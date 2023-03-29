import moment from "moment-timezone";

export const formatDate = (date: string) => {
    const timezone = moment.tz.guess();
    const utcDate = new Date(date);
    const localDate = moment.utc(utcDate).tz(timezone).format('YYYY-MM-D H:mm z');
    return localDate;
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const showTextLength = (text: string = '', length: number = 0) => {
    const result = text.length < length ? text : text.slice(0, length) + '...';
    return result;
};

export const capitalizeText = (text: string) => {
    const result = text.charAt(0).toUpperCase() + text.slice(1);
    return result;
};

export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || "";