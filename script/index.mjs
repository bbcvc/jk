// @ts-check
import fs from 'node:fs'
import puppeteer from 'puppeteer'

(async () => {
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: true, // 默认是无头模式，这里为了示范所以使用正常模式
  })

  // 控制浏览器打开新标签页面
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  
  await page.setViewport({
    width: 2560,
    height: 3000,
  });
  // 在新标签中打开要爬取的网页
  await page.goto('https://jk.rs')
  await page.waitForSelector('#masonry')

  // 使用evaluate方法在浏览器中执行传入函数（完全的浏览器环境，所以函数内可以直接使用window、document等所有对象和方法）
  let res = await page.evaluate(() => {
    let elements = [...document.querySelectorAll('img')]

    let data = []
    for (let i = 0; i < elements.length - 1; i++) {
      //获取新闻的标签
      let title = elements[i].alt;
      //获取新闻的链接地址
      let url = elements[i]?.getAttribute('src');
      //将获取到的标题和链接地址添加到数组中
      data.push({
        title,
        url
      })
    }
    return data.filter(img => !img.url?.endsWith('lazy.svg') && img.title !== '官码')
  })
  fs.writeFileSync('../doc/res.json', JSON.stringify(res, null, 2))
  await browser.close()
})()
