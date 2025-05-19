type Query = {
  key:string
  value:string|number
}

export const httpQuery = (...queries:(Query|null|undefined|false)[]):string=>{
  return queries
    .filter((q): q is Query => !!q && typeof q === "object" && "key" in q && "value" in q)
    .map(q => encodeURIComponent(q.key) + "=" + encodeURIComponent(q.value))
    .join("&")
}