import { Author, Homepage } from "@shared/consts"

export function Footer() {
  return (
    <>
      {/* <a href={`${Homepage}/LICENCE`} target="_blank">MIT LICENCE</a> */}
      <span>
        <span>鲸闻 © 2024 By </span>
        <a href="https://coijing.com" target="_blank">
          河南可爱鲸信息技术有限公司
        </a>
      </span>
    </>
  )
}
