import ElasticDocPageModel from "src/models/ElasticDocPageModel";

export default function getHandle(baseUrl:string, page: ElasticDocPageModel) {
    if(!page) return "[unknown page]";

    if (!page.handle)
        page.handle = page.title.replace(' ', '-').replace('#','-').toLowerCase();

    return page.handle;
}