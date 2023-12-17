import ElasticDocCssOptions from "src/models/ElasticDocCssOptions";

const defaultCssOptions = {
    indexLink: "link",
    indexLinkActive: "active"
} as ElasticDocCssOptions;

export default function getCssOptions(userCssOptions: ElasticDocCssOptions): ElasticDocCssOptions {
    var options = {} as ElasticDocCssOptions;
    Object.assign(options, defaultCssOptions);
    Object.assign(options, userCssOptions);
    return options;
}