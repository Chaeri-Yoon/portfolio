export interface IResponse {
    ok: boolean,
    [key: string]: any
}
export interface ISkill {
    _id: string,
    name: string,
    image: string
}
export type ICategory = 'XR' | 'WEB';
export interface IProject {
    _id: string,
    name: string,
    category: ICategory,
    main_image: string
    page_introduction?: string,
    page_descriptions: string[],
    page_visuals: string[],
    skills: ISkill[],
    link?: string
    video?: string
}