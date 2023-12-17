import ElasticDocsModel from '../models/ElasticDocsModel'
import getBasePath from './getBasePath'
import getPath from './getPath';

export function getElasticDocRoutes(data: ElasticDocsModel, componenet: any) {


    const basePath = getBasePath(data.baseUrl);
    let mainPageHandler = basePath;
    if (data.pages && data.pages.length >= 1) {
        mainPageHandler = getPath(basePath, data.pages[0]);
    } else if (data.groups && data.groups[0] && data.groups[0].pages[0]) {
        mainPageHandler = getPath(basePath, data.groups[0].pages[0]);
    }



    return [{
        path: basePath,
        redirect: mainPageHandler
    }, {
        path: basePath + ':id',
        component: componenet
    }
    ];

}