import { FLASK_API_URL } from '$env/static/private';

export function GET() {
    return fetch(`${FLASK_API_URL}/organization`);
}
