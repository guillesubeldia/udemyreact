export interface GiphyResponse {
    data:       GiphyGif[];
    meta:       Meta;
    pagination: Pagination;
}

export interface GiphyGif {
    type:                       Type;
    id:                         string;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   Username;
    source:                     string;
    title:                      string;
    rating:                     Rating;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    is_sticker:                 number;
    import_datetime:            Date;
    trending_datetime:          Date | TrendingDatetimeEnum;
    images:                     Images;
    analytics_response_payload: string;
    analytics:                  Analytics;
    alt_text:                   string;
    is_low_contrast:            boolean;
    source_caption?:            string;
    user?:                      User;
}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original:                 FixedHeight;
    fixed_height:             FixedHeight;
    fixed_height_downsampled: FixedHeight;
    fixed_height_small:       FixedHeight;
    fixed_width:              FixedHeight;
    fixed_width_downsampled:  FixedHeight;
    fixed_width_small:        FixedHeight;
}

export interface FixedHeight {
    height:    string;
    width:     string;
    size:      string;
    url:       string;
    mp4_size?: string;
    mp4?:      string;
    webp_size: string;
    webp:      string;
    frames?:   string;
    hash?:     string;
}

export enum Rating {
    G = "g",
    PG = "pg",
}

export enum TrendingDatetimeEnum {
    The00000000000000 = "0000-00-00 00:00:00",
}

export enum Type {
    GIF = "gif",
}

export interface User {
    avatar_url:    string;
    banner_image:  string;
    banner_url:    string;
    profile_url:   string;
    username:      Username;
    display_name:  DisplayName;
    description:   Description;
    instagram_url: string;
    website_url:   string;
    is_verified:   boolean;
}

export enum Description {
    AnimeGaming = "Anime & Gaming",
    Empty = "",
    MakingCosplayingAndAllAroundNerdinessAwesome = "Making Cosplaying and all around Nerdiness awesome",
}

export enum DisplayName {
    Empty = "",
    Mannyjammy = "mannyjammy",
    Mobius = "Mobius",
}

export enum Username {
    Empty = "",
    Mannyjammy = "mannyjammy",
    Mbss = "Mbss",
    Netflixlat = "netflixlat",
}

export interface Meta {
    status:      number;
    msg:         string;
    response_id: string;
}

export interface Pagination {
    total_count: number;
    count:       number;
    offset:      number;
}
