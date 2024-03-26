import { FLASK_API_URL } from '$env/static/private';

export function GET({ params }) {
    const { jobId } = params;

    return fetch(`${FLASK_API_URL}/harvest_error/?harvest_job_id=${jobId}`);
}
