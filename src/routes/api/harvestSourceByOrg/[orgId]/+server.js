import { FLASK_API_URL } from '$env/static/private';

export function GET({ params }) {
    const { orgId } = params;
    return fetch(`${FLASK_API_URL}/harvest_source/?organization_id=${params.orgId}`);
}
