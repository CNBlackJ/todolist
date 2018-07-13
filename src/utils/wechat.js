import wx from './wx'

export class wechat {
  static login () {
    return new Promise((resolve, reject) => {
      wx.login({ success: resolve, fail: reject })
    })
  }

  static getUserInfo () {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({ success: resolve, fail: reject })
    })
  }

  static setStorage () {
    return new Promise((resolve, reject) => {
      wx.setStorage({ success: resolve, fail: reject })
    })
  }

  static getStorage () {
    return new Promise((resolve, reject) => {
      wx.getStorage({ success: resolve, fail: reject })
    })
  }

  static getLocation () {
    return new Promise((resolve, reject) => {
      wx.getLocation({ success: resolve, fail: reject })
    })
  }

  static getSetting () {
    return new Promise((resolve, reject) => {
      wx.getSetting({ success: resolve, fail: reject })
    })
  }
}
