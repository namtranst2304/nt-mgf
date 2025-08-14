# 3) Components (atom → compound)

## 3.1-Sidebar.tsx

## 3.2-Topbar.tsx

## 3.3-FilterBar.tsx

## 3.4-UploadDropzone.tsx

## 3.5-FileCard.tsx

## 3.6-Breadcrumb.tsx

## 3.7-ConfirmDialog.tsx

## 3.8-EmptyState.tsx

## 3.9-Pagination.tsx

---

## Quy ước đặt tên & props

* Tên component PascalCase: FileCard.tsx, UploadPanel.tsx.
* Tên hook camelCase: useUpload.ts.
* Event handlers: onChange, onSubmit, onSelect, onDelete.
* Data props: nhận model đủ tối thiểu (id, name, type, size, …).
* Không truyền nguyên response API vào UI; map thành model FE trước (adapter trong lib/api-adapter.ts nếu cần).
* Controlled vs Uncontrolled: ưu tiên controlled cho input; uncontrolled cho dialog chỉ hiển thị (có open, onOpenChange).

---

## Pattern tái sử dụng

### Compound Components
* API tự mô tả, dễ mở rộng.

### Headless + Presentational
* useUpload() (headless) + UploadDropzone (UI).
* Dễ test logic, thay “skin” UI mà không sửa business.

### Polymorphic component (tuỳ chọn)
* Button cho phép asChild để bọc Link/a mà giữ style.

### Variants (Tailwind + cva)
* Dùng class-variance-authority tạo biến thể.

---

## Checklist review trước khi merge

* Component không tự fetch nếu không phải feature/page.
* Hook headless không render, không phụ thuộc UI.
* Props rõ ràng, có JSDoc mô tả.
* State lỗi/loading/empty đầy đủ.
* Storybook có 3 trạng thái chính.
* Test cơ bản cho hook logic.
