/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') content = JSON.stringify(content)
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target
  if (attr === 'scrollTop') target = element.scrollTop
  else if (element.currentStyle) target = element.currentStyle[attr]
  else target = document.defaultView.getComputedStyle(element, null)[attr]
  return NumberMode == 'float' ? parseFloat(target) : parseInt(target)
}

/**
 * 页面到达底部，加载更多
 */
export const loadMore = (element, callback) => {
  // TODOS
}

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否到达目标点
 */
export const showBack = callback => {
  // TODOS
}

/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export const animate = (
  element,
  target,
  duration = 400,
  mode = 'ease-out',
  callback
) => {
  // TODOS
}
