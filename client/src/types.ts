export interface IResponse {
    ok: boolean,
    [key: string]: any
}
export interface ISkill {
    _id: string,
    name: string,
    image: string
}
export interface IProject {
    _id: string,
    name: string,
    category: "XR" | "WEB",
    main_image: string
    page_introduction?: string,
    page_descriptions: string[],
    page_visuals: string[],
    skills: string[],
    link?: string
    video?: string
}