import { FLASK_API_URL } from '$env/static/private';

export function GET({ params }) {
    const { sourceId } = params;

    return fetch(`${FLASK_API_URL}/harvest_job/?harvest_source_id=${sourceId}`);
}
