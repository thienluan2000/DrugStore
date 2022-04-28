export interface INavItemModel {
    id: string;
    icon: string;
    description: string;
    url: string;
    children: INavItemModel[]
}