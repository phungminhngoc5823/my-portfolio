# Portfolio v20.7 — nhật ký thay đổi so với v20.6.4

## Nội dung (theo docx v5)
- Thay toàn bộ copy: hero, Selected Work, Marketing Lab, Experience, Capabilities, About, Contact.
- Selected Work còn 5 case chính theo thứ tự: Ebook B2B → Dream Christmas → AI & dữ liệu (gộp 1AI, AI Readiness, ICP) → V-Creator → Automation; phần "More Selected Work" gồm TikTok, Seasonal, AREA.
- Giữ chữ cũ ở chỗ docx không có: tiêu đề/tóm tắt từng khâu trong case B2B và đoạn SEO.
- Thống nhất: phạm vi ebook là 3 ebook do tôi phụ trách toàn bộ (ebook 02–04, trong đó ebook 04 đang chạy), 1Office có tổng cộng 4 ebook và ebook 05 đang chuẩn bị; "xây dựng prompt và luồng hội thoại"; viết tắt có giải nghĩa ở lần đầu xuất hiện (ABM, ICP, MOS, TTTM, PG, BQL, HRM, CPL, CRM, Zalo OA); L1 được giải nghĩa trong phần Kết quả của case B2B.
- Bỏ: dòng "Open to full-time roles" trên thẻ ảnh, banner 1AI đầu Work, 4 thẻ touchpoint lặp, đoạn trích About, dòng "Tools used".
- Thêm: dòng trạng thái tìm việc ở hero, nút "Xem Marketing Lab" thay nút "Liên hệ" ở hero, chi tiết "lớp chuyên tiếng Trung" ở About.

## Bố cục
- Mỗi case chính có lớp tóm tắt một màn hình, ảnh tiêu đề và phần chi tiết gập (ảnh vẫn giữ nguyên trong phần chi tiết); nút "Thu gọn" ở cuối.
- Case B2B sắp lại: bối cảnh, hai phương án, ví dụ Luật Lao động, ảnh quảng cáo/landing page/email đủ bộ (gồm các ảnh trước đây không hiển thị).
- Chiều cao trang desktop: khoảng 23.000px → 13.200px khi gập.

## Kỹ thuật
- Sửa sticky/anchor/cuộn, khai báo kích thước ảnh (không còn giãn trang khi ảnh tải), tương phản màu và cỡ chữ tối thiểu, giới hạn độ dài dòng, vùng chạm trên mobile.
- Favicon, theme-color, đổi title Lab, xóa code chết, link ngoài `noopener noreferrer`.
- Script hỗ trợ: `scripts/gen-image-sizes.py` (kích thước ảnh), `scripts/set-domain.py` (thẻ chia sẻ khi có tên miền).

## Đa ngôn ngữ
- EN và 中文 cho toàn bộ trang chính (`i18n/translations.json`) và Marketing Lab (`i18n/lab-translations.json`); chính tả EN theo kiểu Mỹ, thuật ngữ thống nhất (mall management, store staff, tenant; ZH: 商场, 租户, 粉丝页).
- Bộ chọn ngôn ngữ nằm trong header trên mobile, nổi góc dưới bên phải trên desktop.

## Chưa làm / cần người kiểm tra
- Người bản ngữ đọc lại bản EN (và 中文 nếu có thể).
- Thẻ chia sẻ (og:image, canonical, og:url) khi có tên miền; ảnh `public/og-image.jpg` đã tạo sẵn.
- Chữ L1/L2 có hai nghĩa: cấp lead trong funnel (case B2B, L2 giải nghĩa là từ "Đang tư vấn" đến "Ký HĐ") và cấp chấm điểm ICP (Marketing Lab, đã ghi rõ "ICP L1/ICP L2"). Thứ tự bốn ebook trong lưới chủ đề đang theo docx (xây dựng trước, nhà máy sau); cần đối chiếu với số thứ tự ebook thật.
- Bản đăng tải nhẹ (tách ảnh, nạp ngôn ngữ theo nhu cầu) chưa làm theo yêu cầu bỏ qua phần đăng tải.

## v20.8 — brief sửa portfolio (đã làm toàn bộ các mục trong brief, chưa build/chạy thử)
- Hero, Selected Work: xem mục trước (copy mới, bỏ ảnh The Litty, thu gọn vừa 1 màn hình, bỏ "Đi tới").
- B2B (đổi tên "B2B Content Funnel: từ quảng cáo đến lead", chip nav "B2B Funnel"): bối cảnh gộp lên overview, ảnh cover hiển thị đủ + bấm phóng to, bỏ khối "Hai phương án" riêng, Acquisition/Conversion/Nurture/SEO luôn mở với 1 nút thu gọn ở cuối mỗi tab, ảnh landing page đều tỉ lệ.
- Dream Christmas, AI & dữ liệu (cover crop mới, zigzag, bullet), V-Creator (role vào khung xanh, loop 2x2), Automation (ảnh luôn hiện, nav active đúng), More Work (3 card đều nhau, cover TikTok 2 ảnh, thumb Seasonal mới), Vincom TikTok (bố cục mới), Marketing Lab (bỏ phần trùng, bỏ "Giao diện 1AI thực tế", AI Readiness hết khoảng trống), Experience (2 cột + bullet), Contact (email draft card), Footer mỏng, nút về đầu trang cố định bên trái.
- i18n/*.json chưa đồng bộ với copy mới (bản EN/ZH sẽ còn chữ cũ cho các chỗ đã sửa).

## v20.8 — vòng rà soát thị giác (QA)
- B2B: overview chia lại (tiêu đề + ảnh trên, 4 ebook thành 1 hàng ngang); ảnh quảng cáo/LinkedIn/landing page dùng khung cố định (FixedShot), không bị cắt ngang, caption thẳng hàng.
- V-Creator: "Phạm vi & đóng góp" gộp vào khung xanh; loop 2x2 cân nhau (Collaboration Proposal chuyển sang card "Hành động").
- Seasonal/AREA: gallery 3 cột đều nhau, bỏ khoảng trống bên phải "Bối cảnh"; ContentClosing/ContentParagraphs không còn giới hạn 68ch, ẩn khi rỗng.
- Skills: mục lẻ cuối chiếm 2 cột; Lab: bớt padding đáy; Hero: đoạn giới thiệu rộng hơn; Contact: nhãn "Nội dung" không rớt dòng.

## v20.8 — vòng chỉnh theo phương án 1A · 2A · 3A · 4A · 5
- 1A: Marketing Automation chuyển sang khung xanh tổng quan như các case khác; workflow zigzag full-width.
- 2A: tab Conversion — landing page Luật Lao động làm ảnh lớn (8/12), 2 ebook còn lại xếp dọc bên phải.
- 3A: 4 giai đoạn B2B thành tab ngang (Acquisition / Conversion / Lead Nurture / Organic SEO) + nút "Tiếp theo" (thay cho các nút Thu gọn từng phần).
- 4A: Marketing Lab bỏ khung ngoài, nền iframe trong suốt, bỏ lớp dot/glow của .shell.
- 5: dòng "Phạm vi & đóng góp" gộp thành ScopeNote nhỏ (TikTok, Automation, panel Seasonal/AREA); i18n: thêm 54 khóa EN/ZH vào translations.json + 3 khóa vào lab-translations.json (kiểm tra bằng bản mô phỏng: không còn chữ Việt lọt vào bản EN/ZH). Experience tách bullet giữ nguyên dấu câu gốc (. hoặc 。). Ảnh landing page chính chọn theo vị trí, không phụ thuộc chữ (tránh vỡ khi dịch).
- Lưu ý: chưa chạy được `node i18n/build_i18n.js` (sandbox thiếu acorn/acorn-walk); cần chạy lại ở máy theo README để ra bản 3 ngôn ngữ chính thức.

## v20.8 — Acquisition relayout + rà soát bản dịch EN/ZH
- Acquisition: cột chữ (ví dụ + QC #1/#2) bên trái, 2 ảnh to bên phải; "Các ebook khác" và "LinkedIn & Zalo" chữ trái – ảnh phải; khung ảnh thấp hơn trên mobile. Lab: ẩn .shell:before/:after nên không còn viền lệch nền.
- Lỗi chức năng i18n (đã sửa): code chọn ảnh theo chữ trong tiêu đề nên bản EN/ZH mất 3–4 ảnh (B2B, Dream). Giờ chọn theo trường `key` ổn định (thêm `key?` vào types.ts + 19 ảnh B2B/Dream trong portfolioData.ts). Số ảnh VI/EN/ZH khớp nhau ở cả 8 case.
- EN: thống nhất "2026 Labor Law", "Đồng Tâm Group", "Bà Triệu", "Expand". ZH: thống nhất "2026 年劳动法"/"合规审查", "评论", "简报", "约 2.8 万家企业", Đồng Tâm Group.
- Preview EN/ZH là bản mô phỏng build_i18n (chưa chạy được build_i18n.js vì thiếu acorn).

## v20.8 — Gói 1 (kỹ thuật/truy cập) + Gói 2 (người đọc)
- Gói 1: tab B2B và tab More Work có id/aria-controls/aria-labelledby + điều hướng ←/→/Home/End (onTabKeyDown); màu nhãn phụ #64748B → #526179 (đạt 4.5:1 trên nền xanh nhạt); vùng bấm ≥ 40–44px (kể cả quy tắc CSS #skills/footer/contact 32px → 40px); tên ở ảnh chân dung h3 → p; dọn 10 import thừa; thêm `npm run i18n:check` (i18n/check_i18n.cjs).
- Gói 2: thẻ hero theo kết quả (237 lead L1 · FB Ads / Chatbot 1AI đã vận hành / Nửa ngày → 15–30 phút/bài); hàng credentials có mốc thời gian; nhãn "Nên xem trước" ở case 01 và 03; dòng "Số liệu tính đến 10/2026"; public/og-image.jpg + meta (og:image/canonical để sẵn dạng comment — cần thay YOUR-DOMAIN).
- Lưu ý: i18n:check chỉ bắt chuỗi có dấu tiếng Việt; chuỗi không dấu (ví dụ "04/2026–nay") phải tự thêm khóa dịch.

## v20.8 — Gói 3 (không gồm R2) + thanh chuyển module Lab
- R4: nav Work tự ẩn khi cuộn xuống trong khu vực Work, hiện lại khi cuộn lên (CSS var --compact-top giữ vị trí thanh chuyển case trong More Work); màu số bước chip #94A3B8 → #526179.
- R7: khối "Thuật ngữ thường gặp trong các case" (ICP, L1/L2, ABM, CPL, RAG, TTTM/KPTM, BQL, PG, PTSP, Owned media) dưới tiêu đề Selected Work — cần xác nhận định nghĩa L1/L2.
- R8: dòng ghi chú "Ảnh minh chứng là bản gốc đã triển khai, giữ nguyên tiếng Việt".
- Lab: thanh chuyển module ở cuối mỗi module (chip 01–04 + "Tiếp theo: …", module cuối quay về 01); iframe gửi message `marketing-lab-scroll` để trang cha cuộn về đầu module mới. Giảm đổ bóng .stage để không bị cắt cứng ở mép iframe.
- Chưa làm: R2 (CV/LinkedIn — theo yêu cầu bỏ qua); ảnh 1AI thật đang chờ người dùng gửi (đã xử lý ở mục dưới).


## v20.8 — Ảnh 1AI thật
- Thay `public/images/marketing-lab/chatbot-reference.png` bằng ảnh chụp 1AI đang chạy trên website 1Office (đã crop bớt khoảng trắng đầu khung chat, phóng 2x + làm nét nhẹ → 934×1160); cập nhật `imageSizes.ts`.
- Caption ở case 03 đổi từ "Hội thoại demo trong Marketing Lab." thành "Giao diện 1AI đang chạy trên website 1Office." (kèm bản dịch EN/ZH trong `translations.json`).
- Marketing Automation (case 05): cột chữ/ảnh workflow chia 6/6 thay vì 5/7, giảm padding dọc → ảnh workflow nhỏ lại, case ngắn hơn.

## v20.9 — Lab (L2) + Contact (C2)
- Marketing Lab: bỏ nền gần đen và các lớp blob/lưới; section nền xanh xám nhạt (#EDF2F8), tiêu đề/đoạn dẫn chữ tối. Trong iframe: thanh tab dạng pill trắng (tab active navy), chữ phụ 11px đậm hơn, chỉ khung stage giữ navy chứa app trắng (override ở cuối khối `<style>` embedded trong `public/marketing-lab/index.html`).
- Contact: dải navy toàn chiều ngang, tiêu đề giữa trang "Cùng trao đổi về bài toán Marketing bạn đang giải", 2 nút (Gửi email / Sao chép email) + dòng email, điện thoại, địa điểm. Bỏ card email giả lập (kèm lỗi "Chủ đề`"). Footer chuyển nền navy để nối liền với dải Contact. Thêm 2 khóa EN/ZH vào `translations.json`.
- Không có nút Zalo (theo yêu cầu trước đó), không có LinkedIn/CV.

## v20.9.1 — LDP B2B evidence
- Tab Conversion: các ebook cùng template nên chỉ giữ 1 landing page ebook (Luật Lao động 2026) kèm đoạn mô tả; bỏ 2 ảnh LDP ebook trùng (Xây dựng, Workforce) khỏi galleryImages (file ảnh vẫn nằm trong `public/images`, `b2b-ebook2-ldp-hero.jpg` còn dùng làm cardImage).
- Thêm 3 ảnh chụp từ landing page B2B (1office.vn/dich-vu-b2b): Toàn cảnh vận hành, Trợ lý AI, Giải pháp theo ngành (`b2b-ldp-flow|ai|solution.jpg`, 1440×720) dưới ROI Calculator, hiển thị dạng chip chuyển ảnh + khung lớn để đọc được chữ. Đã thêm bản dịch EN/ZH.

## v20.10 — Polish sau rà soát
- Hero: tăng khoảng cách phía trên pill; rút gọn đoạn giới thiệu (còn 3 dòng desktop), dịch EN/ZH.
- Selected Work: gộp hai dòng ghi chú nhỏ thành một dòng (gợi ý case 01 và 03 + số liệu + ảnh minh chứng gốc).
- More Selected Work: ảnh bìa Vincom TikTok làm lại dạng tràn khung 2 panel (The Litty + MOSS), đồng đều với hai thẻ còn lại.
- Năng lực × Sản phẩm thực tế: mô tả 14–15px, màu đậm hơn, số thứ tự 11px, link 12px.
- Công tắc VI/EN/中文: cao ~37px (desktop) / ~33px (trong header mobile).
- Back-to-top: mobile đặt phía trên công tắc ngôn ngữ (bên phải), desktop giữ bên trái.
- Chưa đổi: các case chính vẫn thu gọn mặc định (nhóm 8, giữ nguyên cách trình bày).

## v20.11 — Rà soát bản dịch + code
- Đồng bộ vai trò landing page: phụ trách cả 3 landing page ebook và xây dựng landing page B2B (trước đó có chỗ ghi 2/3 ebook và "tham gia xây dựng"). Cập nhật VI + EN + ZH; xóa 7 mục dịch cũ không còn dùng nhưng vẫn ghi "2 landing page".
- ZH: "越南太原省重点高中" (tránh nhầm Thái Nguyên với Sơn Tây), "爆款视频标准", đổi mọi ngày dạng MM/YYYY sang YYYY/MM, bỏ viết tắt PTSP.
- EN: chuyển các gạch đầu dòng của vai trò đã kết thúc (V-Creator, Owned Media, ICP) sang thì quá khứ; sửa "put some of them into real use"; bỏ viết tắt PTSP.
- Code: thêm `@types/react`, `@types/react-dom`, `src/vite-env.d.ts`; `automationWorkflows.size` tùy chọn, `galleryImages.wide` được khai báo → `tsc --noEmit` còn 0 lỗi (trước đó 18). `WorkJumpNav.tsx` đang được dùng (thanh chuyển case) nên giữ nguyên.
