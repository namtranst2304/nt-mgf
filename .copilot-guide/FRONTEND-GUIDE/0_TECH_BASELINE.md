# 0) Tech baseline & conventions

* Next.js 14 (App Router) + TypeScript + TailwindCSS.
* State/data fetching: SWR (hoặc React Query, tuỳ chọn 1).
* Auth lưu HttpOnly cookie (set bởi backend), FE chỉ gọi API.
* Mọi request đi qua module lib/api.ts (fetch wrapper, handle 401).
* UI clean/light, ưu tiên keyboard accessible (Tab/Enter/Escape).

---

## Mục tiêu kiến trúc

* Tái sử dụng cao (design system + headless logic).
* Tách biệt trách nhiệm: UI thuần vs. logic (hooks).
* Dễ thay thế (component không khóa chặt vào dữ liệu).
* Dễ test (unit + story).
* Khả năng mở rộng (thêm feature không phá vỡ API).

---

## Phân tầng component

```
/web
	/app/…                       # App Router pages
	/components/
		/ui/                       # Primitives (Button, Input, Badge…)
		/layout/                   # Layout (Sidebar, Topbar, Grid…)
		/composite/                # Composite (FileCard, FilterBar…)
		/feature/                  # Feature-scoped (UploadPanel, TagEditor…)
		/headless/                 # Headless logic (hooks: useUpload, useSearch)
	/lib/                        # API client, utils, constants
	/types/                      # Shared types/interfaces
	/stories/                    # Storybook stories
```
