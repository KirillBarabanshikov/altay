// import puppeteer from "puppeteer";
// import fs from "fs-extra";
// import fetch from "node-fetch";
// import path from "path";
// import { URL } from "url";
//
// const URL_SITE = "http://altay.local/sanatoriums"; // Сайт со слайдерами
// const TRIGGER_SELECTOR = ".item"; // Селектор кнопок
// const IMAGE_SELECTOR = ".item img"; // Селектор изображений
// const OUTPUT_FOLDER = "./images"; // Папка для сохранения
//
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
//
// async function scrapeImages() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(URL_SITE, { waitUntil: "networkidle2" });
//
//   // await delay(5000);
//   //
//   // const seasons = await page.$$(".event");
//   // await seasons[0].click();
//
//   await delay(5000);
//
//   // Нажимаем на третий триггер (индекс 2)
//   // const buttons = await page.$$(TRIGGER_SELECTOR);
//   // if (buttons.length >= 3) {
//   //   await buttons[9].click();
//   //   console.log("✅ Нажатие на третий триггер...");
//   //   await page.waitForSelector(IMAGE_SELECTOR, { visible: true });
//   //   console.log("✅ Модальное окно открылось, загружаем изображения...");
//   // } else {
//   //   console.error("❌ Ошибка: на странице меньше трёх триггеров.");
//   //   await browser.close();
//   //   return;
//   // }
//
//   // Получаем ссылки на изображения
//   const baseUrl = new URL(URL_SITE).origin; // Домен страницы
//   const imageUrls = await page.$$eval(
//     IMAGE_SELECTOR,
//     (images, base) =>
//       images.map((img) =>
//         img.src.startsWith("http") ? img.src : `${base}${img.src}`
//       ),
//     baseUrl
//   );
//
//   console.log(`✅ Найдено ${imageUrls.length} изображений`);
//   console.log("🔍 Список изображений:", imageUrls);
//
//   await browser.close();
//
//   // Создаём папку
//   await fs.ensureDir(OUTPUT_FOLDER);
//
//   // Загружаем изображения
//   for (const url of imageUrls) {
//     console.log("⬇ Попытка скачать:", url);
//     await downloadImage(url);
//   }
// }
//
// async function downloadImage(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Ошибка загрузки ${url}`);
//
//     const buffer = Buffer.from(await response.arrayBuffer()); // Используем arrayBuffer()
//
//     const originalFilename = path.basename(new URL(url).pathname); // Получаем имя файла
//     const ext = path.extname(originalFilename); // Получаем расширение файла
//     const cleanFilename = originalFilename.split(".")[0] + ext; // Удаляем хеш (оставляем только первую часть)
//
//     const filePath = path.join(OUTPUT_FOLDER, cleanFilename);
//
//     await fs.writeFile(filePath, buffer);
//     console.log(`✅ Сохранено: ${filePath}`);
//   } catch (error) {
//     console.error(`❌ Ошибка загрузки ${url}:`, error.message);
//   }
// }
//
// scrapeImages();
