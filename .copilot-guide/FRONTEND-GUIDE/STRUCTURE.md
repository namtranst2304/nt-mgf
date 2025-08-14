# Cấu trúc thư mục chuẩn cho dự án FE (Next.js + TS + Tailwind)

/src
  /app
    layout.tsx                      # Khung layout gốc (inject Sidebar + Topbar)
    globals.css                     # Tailwind base, token màu, utility custom
    page.tsx                        # Dashboard: recent files, quick stats

    /files
      page.tsx                      # Danh sách file (grid + filter + upload zone)
    /folders
      page.tsx                      # Tree + breadcrumb + file theo folder
    /shared
      page.tsx                      # Tài nguyên đã share
    /trash
      page.tsx                      # Thùng rác (soft-delete, restore/hard)
    /file
      /[id]
        page.tsx                    # Chi tiết file: preview, meta, action

    /api                             # (tuỳ chọn) proxy bridge đến backend Go
      /bridge
        presign/route.ts             # POST → gọi BE /api/presign (nếu cần)
        confirm/route.ts             # POST → gọi BE /api/files/confirm
        files/route.ts               # GET → gọi BE /api/files
        file/[id]/download/route.ts  # GET → trả presigned GET từ BE

  /components
    /ui                              # 2.1 Primitives (stateless, không call API)
      Button.tsx
      Input.tsx
      Select.tsx
      Checkbox.tsx
      Badge.tsx
      Dialog.tsx
      Dropdown.tsx
      Tooltip.tsx
      Progress.tsx
      Skeleton.tsx
      Icon.tsx
      index.ts                       # barrel export

    /layout                          # 2.2 Layout (dàn trang, nav, header)
      Sidebar.tsx
      Topbar.tsx
      Container.tsx                  # bọc nội dung, padding chuẩn
      Grid.tsx                       # tiện ích grid responsive cho FileCard
      PageHeader.tsx                 # title + actions cho mỗi page
      Breadcrumb.tsx
      index.ts

    /composite                       # 2.3 Tổ hợp primitives (ít state UI)
      FileCard.tsx                   # thumbnail + name + menu
      FileGrid.tsx                   # nhận items[] → render grid
      FilterBar.tsx                  # chip All/Images/Docs/Videos
      ConfirmDialog.tsx              # xác nhận xoá/restore
      EmptyState.tsx
      Pagination.tsx
      SearchInput.tsx                # input + debounce (không call API trực tiếp)
      index.ts

    /feature                         # 2.4 Gắn nghiệp vụ (dùng hooks headless)
      UploadPanel.tsx                # drag & drop + file input → dùng useUpload
      TagsManager.tsx                # thêm/xoá/tag suggestion
      FolderTree.tsx                 # tree thư mục (dùng dữ liệu từ hooks)
      FileActionsMenu.tsx            # 3-chấm: download/rename/move/share/delete
      ShareLinkPanel.tsx             # tạo/huỷ link share
      index.ts

    /headless                        # 2.5 Business logic (KHÔNG render UI)
      useUpload.ts                   # presign → PUT S3 → confirm → mutate
      useFiles.ts                    # list + filter + pagination
      useFileById.ts                 # chi tiết file
      useFolders.ts                  # tree, breadcrumb
      useSearch.ts                   # quản lý q, debounce
      usePagination.ts               # page, pageSize, total → helpers
      useDialog.ts                   # open/close state cho Dialog headless
      index.ts

  /lib                               # 2.6 API client, adapter, utils
    api.ts                           # fetch wrapper (credentials include)
    api-adapter.ts                   # map DTO → FE model (FileItem,…)
    constants.ts                     # MIME map, page size, route constants
    utils.ts                         # formatBytes, cn (clsx), type guards
    validators.ts                    # zod schema validate input
    auth.ts                          # tiện ích đọc cookie phía client (nếu cần)
ok
  /types                             # 2.7 Shared types/interfaces
    api.ts                           # ApiError, Paginated<T>, DTO types
    file.ts                          # FileItem, FileType (image/pdf/video)
    folder.ts                        # Folder, BreadcrumbSegment
    index.ts

  /stories                           # 2.8 Storybook stories (mock UI)
    ui/
      Button.stories.tsx
      Input.stories.tsx
      Dialog.stories.tsx
    composite/
      FileCard.stories.tsx
      FilterBar.stories.tsx
      EmptyState.stories.tsx
    feature/
      UploadPanel.stories.tsx


# Mô tả ngắn từng thư mục
- /app: Chứa các page, route chính của App Router.
- /components/ui: Các component nhỏ, không chứa logic nghiệp vụ.
- /components/layout: Component dàn trang, bố cục.
- /components/composite: Tổ hợp primitives, nhận data qua props.
- /components/feature: Component gắn với nghiệp vụ, có thể gọi hooks headless.
- /components/headless: Chỉ chứa logic, không render UI.
- /lib: Hàm fetch, utils, constants, adapter.
- /types: Định nghĩa type/model chung.
- /stories: Storybook cho từng component.
