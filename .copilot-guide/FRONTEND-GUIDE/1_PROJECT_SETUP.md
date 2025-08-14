# 1) Khởi tạo dự án & cấu hình

## 1.1-package.json
- next, react, react-dom, swr, zod, clsx, tailwindcss, postcss, autoprefixer
- dev: eslint, @types/node, @types/react, typescript

## 1.2-tailwind.config.ts
- Bật content trỏ vào app/**/*.{ts,tsx}, components/**/*.{ts,tsx}
- Extend theme: spacing, radius, shadow nhẹ

## 1.3-postcss.config.js & 1.4-styles/globals.css
- Import @tailwind base; @tailwind components; @tailwind utilities;
- Đặt CSS biến cho light theme (font-size, card shadow)

## 1.5-env.mjs
- Xuất biến public cần dùng (nếu có), ví dụ NEXT_PUBLIC_API_BASE

## 1.6-.eslintrc.json & 1.7-tsconfig.json
- Cấu hình strict TS, path alias @/components, @/lib, @/hooks
