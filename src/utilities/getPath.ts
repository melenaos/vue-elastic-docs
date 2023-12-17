import ElasticDocPageModel from "src/models/ElasticDocPageModel";
import getPath from './getBasePath'
import getHandle from './getHandle'

export default function getUrlPath(baseUrl: string, page: ElasticDocPageModel) {
    return getPath(baseUrl) + getHandle(page);
}