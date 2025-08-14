# Gợi ý sinh code tự động cho Copilot

- Tạo tất cả file như trên, implement đầy đủ UI, SWR, Upload flow
- Tuân thủ strict TS, tách components nhỏ, ưu tiên ARIA & keyboard
- Sinh boilerplate code cho mỗi file với comment TODO rõ ràng

# FRONTEND REQUIREMENTS — Structure & Reusable Components (Next.js + TS + Tailwind)

## 1) Mục tiêu kiến trúc

* Tái sử dụng cao (design system + headless logic).
* Tách biệt trách nhiệm: UI thuần vs. logic (hooks).
* Dễ thay thế (component không khóa chặt vào dữ liệu).
* Dễ test (unit + story).
* Khả năng mở rộng (thêm feature không phá vỡ API).

---

## 2) Phân tầng thư mục & loại component

```
/web
  /app/…                       # App Router pages
  /components/
    /ui/                       # 2.1 Primitives (Button, Input, Badge…)
    /layout/                   # 2.2 Layout (Sidebar, Topbar, Grid…)
    /composite/                # 2.3 Composite (FileCard, FilterBar…)
    /feature/                  # 2.4 Feature-scoped (UploadPanel, TagEditor…)
    /headless/                 # 2.5 Headless logic (hooks: useUpload, useSearch)
  /lib/                        # 2.6 API client, utils, constants
  /types/                      # 2.7 Shared types/interfaces
  /stories/                    # 2.8 Storybook stories
```

### 2.1—Primitives (`/components/ui/*`)
* Không chứa business logic.
* API ổn định, props nhỏ gọn.
* Ví dụ: Button, Icon, Input, Textarea, Select, Dialog, Dropdown, Tooltip, Progress.

### 2.2—Layout (`/components/layout/*`)
* Chỉ dàn trang: Sidebar, Topbar, Container, PageHeader, Grid, Breadcrumb.

### 2.3—Composite (`/components/composite/*`)
* Tổ hợp primitives + một chút state UI cục bộ.
* Không gọi API trực tiếp. Nhận data qua props.
* Ví dụ: FileCard, FileGrid, EmptyState, ConfirmDialog.

### 2.4—Feature-scoped (`/components/feature/*`)
* Gắn với nghiệp vụ: có thể gọi hooks headless.
* Ví dụ: UploadPanel, SearchBar, TagsManager, FolderTree.
* Nếu logic phình to → đẩy logic vào /headless.

### 2.5—Headless hooks (`/components/headless/*`)
* Chỉ logic, không render UI. Trả về state + handlers.
* Ví dụ: useUpload(), useFiles(query), usePagination(), useDebounce().

### 2.6—Lib (`/lib/*`)
* api.ts (fetch wrapper), utils.ts (format, cn), constants.ts (mime map), validators.ts (zod).

### 2.7—Types (`/types/*`)
* file.ts (FileItem), folder.ts, api.ts (Paginated<T>, ApiError).

### 2.8—Stories (`/stories/*`)
* 1 story cho mỗi component ui và composite quan trọng.

---

## 3) Quy ước đặt tên & props
* Tên component PascalCase: FileCard.tsx, UploadPanel.tsx.
* Tên hook camelCase: useUpload.ts.
* Event handlers: onChange, onSubmit, onSelect, onDelete.
* Data props: nhận model đủ tối thiểu (id, name, type, size, …).
* Không truyền nguyên response API vào UI; map thành model FE trước (adapter trong lib/api-adapter.ts nếu cần).
* Controlled vs Uncontrolled: ưu tiên controlled cho input; uncontrolled cho dialog chỉ hiển thị (có open, onOpenChange).

---

## 4) Pattern tái sử dụng
### 4.1—Compound Components
* Ví dụ Dropdown:

  ```tsx
  <Dropdown>
    <Dropdown.Trigger>Actions</Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item onSelect={download}>Download</Dropdown.Item>
      <Dropdown.Item onSelect={rename}>Rename</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  ```
* Ưu: API tự mô tả, dễ mở rộng.

### 4.2—Headless + Presentational
* useUpload() (headless) + UploadDropzone (UI).
* Dễ test logic, thay “skin” UI mà không sửa business.

### 4.3—Polymorphic component (tuỳ chọn)
* Button cho phép asChild để bọc Link/a mà giữ style.

### 4.4—Variants (Tailwind + cva)
* Dùng class-variance-authority tạo biến thể:

  ```ts
  const button = cva("inline-flex items-center", {
    variants: { intent: { primary: "...", ghost: "..." }, size: { sm:"...", md:"..." } },
    defaultVariants: { intent: "primary", size: "md" }
  });
  ```

---

## 5) Khi nào tách nhỏ?
* >150 dòng hoặc có >1 trách nhiệm → tách.
* Có state UI + gọi API trong cùng component → tách ra hook headless.
* UI lặp lại ≥3 nơi → biến thành composite hoặc ui primitive.
* Props bắt đầu có >10 fields → xem lại abstraction (group props, tạo model).

---

## 6) Giao tiếp dữ liệu & fetch
* Không fetch trong primitives/composite.
* Fetch tại page hoặc feature via hooks headless.
* SWR/React Query: key chuẩn hóa, select để map response → model.
* Optimistic update: thực hiện trong hook headless (useFilesMutation).

---

## 7) Xử lý lỗi, loading, empty
* Mọi hook headless trả về { data, isLoading, error }.
* Composite hiển thị:
  * Skeleton khi isLoading.
  * ErrorState khi error.
  * EmptyState khi !data?.length.

---

## 8) Accessibility (A11y) & Keyboard
* TabIndex, aria-* đầy đủ cho dialog, dropdown, tooltip.
* Esc đóng modal/menu; Enter xác nhận; Arrow điều hướng menu.
* Focus trap trong Dialog, focus return khi đóng.
* Tương phản màu >= 4.5:1, hit area ≥ 40px.

---

## 9) Styling & theming
* Chỉ Tailwind + CSS variables (light/dark).
* Không nhúng style inline phức tạp; dùng class.
* Spacing: 8pt scale (2,4,8,12,16…).
* Border radius thống nhất (e.g., rounded-xl), shadow nhẹ.

---

## 10) Performance
* Use client chỉ khi thật cần.
* memo/useCallback cho list lớn (FileGrid).
* virtualize (react-virtual) nếu >200 items.
* Lazy preview (ảnh/PDF/video), chỉ fetch signed URL khi mở preview.
* Avoid prop drilling sâu → context cục bộ hoặc headless hook riêng.

---

## 11) API surface ổn định
* Không đặt props khó test như “nhận thẳng fetcher”.
* Ưu tiên callback thay vì truyền nguyên service.
* Đặt default props rõ ràng; tránh optional props rỗng.

---

## 12) Test & Storybook
* Unit: hooks headless (logic upload/search), adapter map API → model.
* Component test: composite (FileCard, FilterBar).
* Storybook: mỗi component có default/empty/error/loading stories.
* Mock handlers (MSW) cho story.

---

## 13) Ví dụ mini: Headless Upload + UI tách rời

**13.1—/components/headless/useUpload.ts**

```ts
import { useState } from "react";
import { presignUpload, confirmFile } from "@/lib/api";

export function useUpload(folderId?: string | null) {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [error, setError] = useState<string | null>(null);
  async function upload(files: FileList | File[]) {
    setError(null);
    for (const file of Array.from(files)) {
      const { uploadUrl, storageKey } = await presignUpload({
        name: file.name, contentType: file.type, size: file.size, folderId: folderId ?? null,
      });
      await fetch(uploadUrl, { method: "PUT", headers: { "Content-Type": file.type }, body: file });
      await confirmFile({ name: file.name, contentType: file.type, size: file.size, storageKey, tags: [], folderId: folderId ?? null });
      // TODO: setProgress per file if using XHR for granular progress
    }
  }
  return { upload, progress, error };
}
```

**13.2—/components/feature/UploadPanel.tsx**

```tsx
"use client";
import { useUpload } from "@/components/headless/useUpload";

export default function UploadPanel({ folderId = null }: { folderId?: string | null }) {
  const { upload } = useUpload(folderId);
  return (
    <div
      className="border-2 border-dashed rounded-xl p-6 text-center"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); upload(e.dataTransfer.files); }}
    >
      <input id="fileInput" type="file" multiple className="hidden"
        onChange={(e) => e.target.files && upload(e.target.files)} />
      <label htmlFor="fileInput" className="cursor-pointer">Click or drag files to upload</label>
    </div>
  );
}
```

---

## 14) Checklist review trước khi merge
* [ ] Component không tự fetch nếu không phải feature/page.
* [ ] Hook headless không render, không phụ thuộc UI.
* [ ] Props rõ ràng, có JSDoc mô tả.
* [ ] State lỗi/loading/empty đầy đủ.
* [ ] Storybook có 3 trạng thái chính.
* [ ] Test cơ bản cho hook logic.

---

## 15) Quy tắc mở rộng an toàn
* Thêm tính năng mới → tạo feature component + headless hook riêng.
* Không “nhồi” thêm props vào primitives; tách thành composite mới nếu cần.
* Giữ lib/api là adapter duy nhất với backend; UI không biết chi tiết API.

---

Nếu bạn muốn, mình có thể tạo sẵn skeleton thư mục + file trống theo chuẩn này (đặt đúng tên) để bạn chỉ cần “fill in” code. Bạn muốn mình xuất danh sách file rỗng kèm nội dung mẫu không?
