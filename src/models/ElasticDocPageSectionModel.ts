import { ElasticDocContentModel } from "./content-type";

export default interface ElasticDocPageSectionModel {
    title: string;
    headerSize: number;
    content: Array<ElasticDocContentModel> | ElasticDocContentModel;
}