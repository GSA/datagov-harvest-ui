import { FLASK_API_URL } from '$env/static/private';

export function GET({ params }) {
    const { sourceId } = params;

    return fetch(`${FLASK_API_URL}/harvest_source/${sourceId}`);
}
