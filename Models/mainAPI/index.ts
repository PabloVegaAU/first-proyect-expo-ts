export type MetaDataResponseAPI = {
  type: string
  code: "-1" | "00" | "01"
  data: string
}

export type PaginationAPI = {
  totalPages: number
  totalElements: number
  size: number
  number: number
  numberOfElements: number
}
