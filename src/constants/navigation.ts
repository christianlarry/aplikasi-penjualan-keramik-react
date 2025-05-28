export interface NavigationItem{
  name:string,
  path:string
}

export const MAIN_NAVIGATION:NavigationItem[] = [
  {
    name: "Beranda",
    path: "/"
  },
  {
    name: "Katalog",
    path: "/catalog"
  }
]