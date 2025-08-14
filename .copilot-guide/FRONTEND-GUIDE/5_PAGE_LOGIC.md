# 5) Page logic chi tiết (từng file)

## 5.1-app/files/page.tsx (All Files)
- Đọc query type, q, page
- SWR keys: ['files', {type,q,page}] → GET /api/files
- Render FilterBar, UploadDropzone, grid FileCard
- Optimistic update: sau confirm, mutate list

## 5.2-app/file/[id]/page.tsx
- SWR ['file', id] → GET /api/files/:id
- Preview: Image, PDF, Video
- Actions: Rename, Download, Move, Delete, Share

## 5.3-app/folders/page.tsx
- SWR ['folders-tree'] → GET /api/folders/tree
- Khi chọn folder: GET /api/files?folderId=...
- Breadcrumb nhận mảng {id,name}

## 5.4-app/shared/page.tsx
- GET /api/files?shared=true
- Grid tương tự Files

## 5.5-app/trash/page.tsx
- GET /api/files?deleted=true
- Actions: Restore, Hard delete
