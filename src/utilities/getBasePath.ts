export default function getBasePath(baseUrl: string) {
    baseUrl = baseUrl.trim();

    if (!baseUrl.startsWith('/'))
        baseUrl = '/' + baseUrl;

    if (!baseUrl.endsWith('/'))
        baseUrl = baseUrl + '/';

    return baseUrl;
}