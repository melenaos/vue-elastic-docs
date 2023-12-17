import ElasticDocPageModel from "src/models/ElasticDocPageModel";
import getPath from './getBasePath'

export default function getHandle(page: ElasticDocPageModel) {
    if (!page) return "[unknown]";

    if (!page.handle)
        page.handle = page.title.replace(' ', '-').replace('#', '-').toLowerCase();

    return page.handle;
}