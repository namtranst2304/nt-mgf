# 2) Cấu trúc thư mục App Router

## 2.1-app/layout.tsx
- Wrap html/body, import globals.css, render Sidebar + Topbar persistent
- Slot layout: Sidebar (trái), content (phải), Topbar (trên content)

## 2.2-app/page.tsx (Dashboard)
- Hiển thị quick stats (số file, dung lượng), recent files (grid 8 item)
- Link tới /files

## 2.3-app/files/page.tsx
- Trang chính “All Files” + FilterBar (All / Images / Docs / Videos)
- Grid FileCard (thumbnail, tên, size, menu)
- UploadDropzone (drag & drop) nằm trên cùng (sticky) hoặc floating button

## 2.4-app/folders/page.tsx
- List + Tree view mini (bên trái) + breadcrumb trên cùng

## 2.5-app/shared/page.tsx
- Danh sách file/folder đã share (biểu tượng “link”)

## 2.6-app/trash/page.tsx
- Danh sách file bị soft-delete, nút Restore/Hard delete

## 2.7-app/file/[id]/page.tsx
- File detail: preview (image/pdf/video), meta, tags, action (download/rename/move/delete/share)

> Tất cả page dùng SWR gọi lib/api.ts. Route không chứa logic auth — 401 sẽ redirect login (ở backend hoặc middleware FE nếu có)
