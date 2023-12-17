import Image from "./Image";
import Text from "./Text";
import YouTubeVideo from "./YouTubeVideo";
import Markdown from './Markdown';
import Code from './Code';
import RouterLink from "./RouterLink";
import ExternalLink from "./ExternalLink";

export type ElasticDocContentModel =
    ExternalLink |
    RouterLink |
    Text |
    Image |
    YouTubeVideo |
    Code |
    Markdown