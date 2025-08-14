# 4) Lib, hooks, types

## 4.1-lib/api.ts

## 4.2-lib/utils.ts

## 4.3-lib/constants.ts

## 4.4-hooks/useDebounce.ts, 4.5-hooks/useToast.ts, 4.6-hooks/usePresignUpload.ts

## 4.7-types/index.ts

---

## Quy tắc fetch & giao tiếp dữ liệu
* Không fetch trong primitives/composite.
* Fetch tại page hoặc feature via hooks headless.
* SWR/React Query: key chuẩn hóa, select để map response → model.
* Optimistic update: thực hiện trong hook headless (useFilesMutation).

---

## Xử lý lỗi, loading, empty
* Mọi hook headless trả về { data, isLoading, error }.
* Composite hiển thị:
	* Skeleton khi isLoading.
	* ErrorState khi error.
	* EmptyState khi !data?.length.

---

## Accessibility (A11y) & Keyboard
* TabIndex, aria-* đầy đủ cho dialog, dropdown, tooltip.
* Esc đóng modal/menu; Enter xác nhận; Arrow điều hướng menu.
* Focus trap trong Dialog, focus return khi đóng.
* Tương phản màu >= 4.5:1, hit area ≥ 40px.

---

## Styling & theming
* Chỉ Tailwind + CSS variables (light/dark).
* Không nhúng style inline phức tạp; dùng class.
* Spacing: 8pt scale (2,4,8,12,16…).
* Border radius thống nhất (e.g., rounded-xl), shadow nhẹ.

---

## Performance
* Use client chỉ khi thật cần.
* memo/useCallback cho list lớn (FileGrid).
* virtualize (react-virtual) nếu >200 items.
* Lazy preview (ảnh/PDF/video), chỉ fetch signed URL khi mở preview.
* Avoid prop drilling sâu → context cục bộ hoặc headless hook riêng.

---

## API surface ổn định
* Không đặt props khó test như “nhận thẳng fetcher”.
* Ưu tiên callback thay vì truyền nguyên service.
* Đặt default props rõ ràng; tránh optional props rỗng.

---

## Test & Storybook
* Unit: hooks headless (logic upload/search), adapter map API → model.
* Component test: composite (FileCard, FilterBar).
* Storybook: mỗi component có default/empty/error/loading stories.
* Mock handlers (MSW) cho story.

---

## Quy tắc mở rộng an toàn
* Thêm tính năng mới → tạo feature component + headless hook riêng.
* Không “nhồi” thêm props vào primitives; tách thành composite mới nếu cần.
* Giữ lib/api là adapter duy nhất với backend; UI không biết chi tiết API.
