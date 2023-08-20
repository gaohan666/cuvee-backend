/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  // 因此，当使用这个正则表达式进行测试时，如果路径以 “http:"、"https:"、"mailto:” 或 “tel:” 开头，返回值将为 true；
  // 否则，返回值将为 false。
  return /^(https?:|mailto:|tel:)/.test(path)
}
