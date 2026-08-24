# 💌 FLIRT WEBSITE V2

Website tán gái dạng 5 màn hình, tối ưu cho iPhone và laptop.

## 1. Chạy bằng CMD

```cmd
cd /d D:\FLIRT-WEBSITE
python -m http.server 8000
```

Mở:

http://localhost:8000

Hoặc:

```cmd
py -m http.server 8000
```

## 2. Thay ảnh cô gái

Đặt ảnh của cô gái vào:

`images/co-gai.jpg`

Không cần sửa HTML.

## 3. Cá nhân hóa

Mở `index.html` và sửa:
- lời tán
- câu nói riêng
- lời mời
- chữ ký

## 4. Thiết kế màn hình

CSS dùng `100svh`, `viewport-fit=cover`, card tự co theo chiều cao màn hình và media query để vừa iPhone/laptop.

## 5. GitHub Pages

Upload toàn bộ project lên repository → Settings → Pages → Deploy from branch → main → root.
