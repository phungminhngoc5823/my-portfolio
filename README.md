# Phùng Minh Ngọc — Marketing Portfolio (Editorial × v15 Merge)

Bản merge hoàn chỉnh sau vòng standalone preview.

## Điểm chính
- 5 main cases: editorial long-scroll.
- More Work: inline accordion, mỗi lần mở 1 case, không dùng pop-up.
- TikTok: giữ đủ 6 link video thật.
- Marketing Lab: giữ nội dung interactive của bản Editorial; shell/visual được làm lại theo Growth Lab/v15.
- Reframing portfolio theo breadth của Marketing thay vì đóng khung vào Growth / Automation / AI / B2B.
- Visual hierarchy của image/artifact được xử lý theo từng case để tránh grid lộn xộn.

## Chạy local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## v19.12 — visual hierarchy fixes
- Type scale: mọi H2 section = 48px (30px mobile); tên case = 42px (28px mobile); case 05 trong rail hẹp = 36px.
- Selected Work / Experience / About: nhãn làm H2, câu diễn giải xuống thành lede 18px.
- TikTok: crop viền đen trong thumbnail, 5 video phụ thành một hàng (scroll-snap trên mobile), số views hero 52px.
- Body font: `--font-sans` khai báo trong `@theme` để Be Vietnam Pro thật sự áp cho body.
- Standalone build: `standalone-build.py` (icon lucide thật, ảnh inline base64, Lab inline bằng srcdoc).

## v19.12 — content sync với bản standalone v19_11
Nguồn chuẩn: `phung-minh-ngoc-portfolio-v19_11-sticky-image-responsive-standalone.html`.
- Đã đồng bộ copy (~70 đoạn): V-Creator (3 workstream, bullet đóng góp, scope note), B2B (nhãn case, 4 bullet đóng góp, đoạn Landing Page đầy đủ, bỏ các caption nhóm ảnh thừa), Dream Christmas (đoạn rollout + nút "Xem evidence"), Marketing Automation (3 workflow card), 4 case More work (AI Readiness, ICP, Seasonal, AREA), Experience (nhãn "Các hạng mục thực hiện chính:", bỏ 3 bullet thừa, mô tả Almond), Capability, About (bio, sub, nhãn Background & Credentials), Contact.
- Giữ nguyên các thay đổi thị giác của v19.12 (thang chữ, TikTok, H2 "Selected Work"/"Experience"/"About"), chỉ chỉnh nhãn TikTok cho khớp wording của standalone.
- CHƯA port: các lớp CSS/DOM patch riêng của standalone (≈116 class như `v195-*`, `v197-*`, `v1911-*`, `hero-profile-*`, `mlab-*`) và các script hậu kỳ (link chip Capability, phân loại evidence). Lớp này sẽ được thay bằng hệ thị giác v20 thay vì port lại.
- Khác biệt còn lại có chủ ý: mobile-only hint "Chạm để phóng to", ký tự "↗" (source dùng icon), modal ẩn cũ của standalone, nhãn "Experience"/"About" không lặp hai lần.

## v20 — dựng theo mock-up (hero, chapter, nhóm case compact)
- **Hero:** chân dung 4:5 (`public/images/hero-portrait.jpg`, crop chặt từ avatar 600px — nên thay bằng ảnh gốc ≥1200px), 2 ảnh proof chồng mép (ad Facebook, video TikTok), 4 ô KPI cũ chuyển thành dải ngang bên dưới. Toàn bộ copy hero giữ nguyên.
- **Thứ tự case:** B2B (01) → V-Creator (02) → Dream Christmas (03). Đổi thứ tự: sửa `WorkSection.tsx` + `WorkJumpNav.tsx` + số "Case chính 0N" và `ProjectMeta index` trong `FlagshipCases.tsx`.
- **Chapter:** khoảng cách giữa case ~224px, phần mở đầu mỗi case nằm trong khung nền tint; B2B có collage mở đầu (landing page + ad). Evidence phụ của B2B (LinkedIn, landing page còn lại) gói trong "Xem thêm evidence" (mặc định đóng), không xóa ảnh nào.
- **More selected work → `components/work/CompactCases.tsx`:** 6 card (TikTok, Automation lớn; AI Readiness, ICP, Seasonal, AREA nhỏ, số 04–09). Bấm card mở nguyên case bên dưới nhóm. Mọi panel luôn nằm trong DOM (ẩn), deep link `#project-…` (chip Capability, jump nav) tự mở đúng card.
- **Cỡ chữ:** body trong case 15px → 16px.
- Chưa làm so với mock: dải ảnh "nghỉ" giữa các chapter; V-Creator/Dream chưa có collage mở đầu riêng.

## v20.1 — chỉnh sau review
- **Ảnh landing page B2B (`public/images/b2b-ldp-hero.jpg`):** thay bằng screenshot mới (đủ form + CTA), crop 248–1652px chiều ngang để bỏ nút chat/scroll-top nổi, giữ nguyên toàn bộ nội dung chính, làm nét nhẹ (unsharp), giữ độ phân giải gốc 1404×851.
- **B2B Acquisition:** đoạn intro chia 2 cột trải hết chiều ngang (không còn trống bên phải); đoạn Conversion bỏ giới hạn `max-w`.
- **Marketing Lab:** bỏ hero lặp bên trong iframe khi nhúng (`html.embedded .hero{display:none}` trong `marketing-lab/index.html`), bỏ 4 card module + dòng "Interactive modules below" ở phần dẫn (trùng với tab strip), iframe tự co theo nội dung thật (đo `.wrap`, min 560px thay vì 1100px).
- **Dream Christmas:** bỏ ảnh Operating Flow (trùng bản đồ 3.1 ở mục 02); hai card ở mục 03 chỉ còn text, evidence còn lại (Training Script, tài liệu triển khai) gom thành một hàng "Xem evidence".
- **More selected work:** case mở ngay dưới hàng card của nó; thanh chuyển case (chip) ghim khi cuộn; nút "← trước / Case tiếp theo →" cuối mỗi case; "Thu gọn" tự cuộn về đúng card.

## v20.2
- **Ảnh landing page B2B:** xóa con trỏ nhấp nháy sau chữ "vận hành" (chỉ xóa phần thừa phía trên/dưới, giữ nguyên chữ "h"), crop + làm nét như v20.1.
- **Hero vừa một màn hình:** cỡ H1, đoạn dẫn và khoảng cách theo `vh` (`clamp`), padding trên/dưới nhỏ hơn, chân dung giới hạn theo chiều cao màn hình (`100svh`). Đã kiểm tra ở 1534×696 (Windows 125%), 1440×780, 1366×650, 1920×969, 1280×600, 1024×700: nút CTA và ảnh chân dung nằm trọn trong màn hình đầu.
- **Dream Christmas:** ảnh `dream-christmas-operating-flow.jpg` thay bằng trang 3.3 của PDF (luồng đặt hàng trên app Xanh SM), không còn trùng trang 3.1. Caption cập nhật theo. Hàng evidence có 3 ảnh: Operating Flow (tr.3.3), Training Script (tr.3.2), Tài liệu hướng dẫn (bìa); bản đồ hành trình (tr.3.1) ở mục 02.
- **Chưa làm:** ảnh SEO capture từ 1office.vn (môi trường build không truy cập được domain này).

## v20.3
- **Dream Christmas:** "Operating Flow" đổi thành trang 11–12 của PDF (mục 3.4 Hướng dẫn BQL triển khai công việc, 2 ảnh). Trang 12 gốc có ID/mật khẩu tài khoản XanhSM Business ở Bước 1: đã xóa trắng; tên, số điện thoại, mã thẻ trong 2 ảnh chụp app đã làm mờ. Hàng evidence dạng lưới 2×2.
- **Organic SEO (B2B):** thay ảnh bài "Top 7 phần mềm gửi SMS" bằng 2 bài: "10 Mẫu biên bản bàn giao hồ sơ, tài liệu file Word (Cập nhật 2026)" và "Quản lý hồ sơ nhân sự bằng Excel: 10 file mẫu miễn phí và hướng dẫn sử dụng". Crop bỏ thanh admin WordPress và nút Zalo/gọi nổi, xóa con trỏ chuột trong ảnh 1, phóng 2× + làm nét nhẹ. Hai ảnh xếp cạnh nhau dưới đoạn mô tả.

## v20.4
- **2 ảnh bài SEO:** đã xóa dòng byline tác giả (icon + tên) khỏi thanh thông tin bài; giữ ngày đăng, lượt xem và chuyên mục.

## v20.5 — việc 1: mốc ngày, placeholder, tên project
- **Placeholder:** card/case Marketing Automation không còn "Mốc thời gian cần xác nhận" → `07/2025 – Hiện tại`. Dòng "Triển khai thực tế" nói rõ: xây từ 07/2025, vận hành trên 91 fanpage từ 09/2025, vẫn được khai thác đến nay (tránh đọc "Hiện tại" thành đang đi làm ở Vincom).
- **Mốc 1Office:** Experience và case B2B thống nhất `05/2026 – Hiện tại`; đoạn context B2B đổi thành "Từ 05/2026 đến nay". ICP Scoring `05/2026 – 06/2026`, thêm dòng "hoàn thiện & thử nghiệm 05–06/2026, chính thức từ 07/2026".
- **Mốc Vincom:** V-Creator và Seasonal `01/2025 – 01/2026`; TikTok `02/2025 – 03/2025` (khớp ngày đăng 6 video); AREA `05/2025 – 06/2025`. Seasonal ghi rõ công việc trải cả 4 mùa, proof chọn từ mùa cuối năm 2025.
- **Định dạng:** toàn bộ `MM/YYYY – MM/YYYY`; ngày lẻ zero-pad (08/12/2025, 03/01/2026); khoảng ngày `06/12–23/12`.
- **Tên project:** tiêu đề B2B = "B2B Content System — Ebook Lead Generation"; nav + chip Capability = "B2B Ebook Funnel"; nhãn B2B = "Content Funnel · Lead Generation"; bỏ "Case chính 04/05" ở TikTok và Automation (chỉ giữ cho 3 flagship).
- **AREA:** ghi rõ Vincom Retail đạt giải Green Leadership tại AREA 2025 (06/2025) — giải của doanh nghiệp, không phải giải cá nhân; card, metric strip, overview và scope note đã cập nhật.
- **Chưa làm (chuyển sang các việc sau):** "91+" trong Marketing Lab lệch "91"; các tên project khác (TikTok Production / TikTok Short-form…) chưa chuẩn hóa.

## v20.5 — việc 2: dọn ghi chú nội bộ/QA và hướng dẫn UI
- **V-Creator:** 2 ảnh "Sanitized Proof" → "Báo cáo KPI theo tháng" và "Phân tích tuyến nội dung & kế hoạch hành động", caption giữ một vế "Đã ẩn số liệu nội bộ; giữ lại cấu trúc…". Hàm tìm ảnh trong `FlagshipCases.tsx` đổi theo tiêu đề mới (lưu ý: phải tìm theo `title`, không theo `url`, vì bản standalone inline ảnh thành base64). Caption ảnh đầu bỏ "chứng minh workstream…".
- **Bỏ chữ "Representative"** ở caption LinkedIn (B2B), Training Script (Dream) và 4 ảnh Seasonal; ghi chú xử lý ảnh ("chuẩn hóa canvas… trong portfolio") thay bằng mô tả thật, chỉ giữ "Đã ẩn thông tin cá nhân" ở ảnh Zalo.
- **Xóa câu hướng dẫn UI/giải thích thiết kế:** "Mỗi stage mở sẵn…" (B2B), lede của Capability × Evidence (section này sẽ viết lại ở việc 7). Câu ở V-Creator viết lại không còn chữ artifact/deliverable.
- **Marketing Lab:** viết lại các ghi chú minh bạch bằng tiếng Việt thường (giữ nguyên ý), badge "Based on Real…" → "Dựa trên … thật", bỏ "production/reference/evidence".
- **Từ vựng UI:** "Selected evidence / Artifacts & outputs / Xem evidence / Xem thêm evidence" → "Sản phẩm thực tế / Tài liệu & sản phẩm / Xem sản phẩm / Xem thêm"; "Selected Artifact 01/02" → "Sản phẩm 01/02".
- **ICP gallery (2E, hướng B):** `icp-process-overview.jpg` và `icp-tracking-overview.jpg` được cắt sát viền trắng và phóng 2× (Lanczos + unsharp); bỏ 4 ảnh "Chi tiết" khỏi gallery (file gốc `icp-*-detail-*.jpg` vẫn còn trong `public/images`, không còn được tham chiếu — có thể xóa). Thêm thuộc tính `wide` cho `galleryImages` (types.ts) để hai ảnh này chiếm cả hàng. Caption bảng tracking ghi rõ số liệu lead là của cả team, phần của tác giả là thiết lập/cập nhật file.
- **Chưa làm:** khối "Phạm vi & attribution" của B2B còn chữ "representative" (giọng ngôi thứ ba) → việc 8.

## v20.5 — việc 3: hero
- **Định vị:** nhãn trên hero "PRODUCT MARKETING · BRAND"; thẻ ảnh "Hanoi, Vietnam" + "Open to full-time roles · remote OK" (bỏ "Marketing Portfolio · Selected Work" và "Open for opportunities" ở hero; ở Contact vẫn còn — xử lý ở việc 7).
- **Đoạn giới thiệu:** 101 → ~50 từ, gọi tên "Minh Ngọc", không đếm tháng thực tập, không ghi "Intern" ở hero; bỏ đoạn xám "Portfolio này tập trung vào…".
- **Dải fact (3 ô thay 4 ô):** `91 fanpage` · `3 ebook · 2 landing page` · `8+ kỳ báo cáo` (V-Creator, hàng tháng, phụ trách chính từ 09/2025). Bỏ "2.4B+ Views" khỏi hero (vẫn còn trong case V-Creator, ghi rõ là quy mô chương trình). **"8+" là con số bảo thủ suy từ mốc 05/2025 → 01/2026 — cần tác giả xác nhận (9 hay 10?).**
- **Chip:** "Vincom Retail · 1Office" và "EN · TOEIC 905 · 中文 · HSK5".
- **Experience (đồng bộ):** 1Office = "Product Marketing & AI Intern" (trước là "…Growth Intern"; "growth" → "AI" trong mô tả); Vincom = "Marketing Intern" + type "Integrated Campaign · Owned Media · Operations"; bullet V-Creator đảo thứ tự thành tracking/báo cáo trước, training sau; câu dưới tiêu đề Experience "từ Brand đến Product Marketing & AI".
- **Chưa làm:** headline giữ nguyên (việc 4); case V-Creator vẫn đang đặt training lên đầu (việc 5); badge "225.1K" cạnh chân dung hero chưa xử lý (chờ làm rõ vai trò trên video THE LITTY).

## v20.5 — việc 5 (một phần): B2B, Dream Christmas, TikTok
- **B2B — A/B test 2 hook (mới):** thêm khối "Test thông điệp trên cùng một ebook" trong Acquisition stage, hiển thị cả bản 1 (pain-centric) và bản 2 (result-centric) của ebook "Kiểm soát tiến độ & chi phí dự án" cạnh nhau, kèm đoạn giải thích: cùng một nhóm đối tượng (CEO, Giám đốc dự án, Chỉ huy trưởng công trình, PM ngành Xây dựng – Thiết kế – Thi công, quy mô 50–300, đúng ICP), khung "phép so sánh nhỏ" — không claim ý nghĩa thống kê. `FlagshipCases.tsx` thêm biến `messagingTestAds`.
- **Dream Christmas — điểm bàn giao dễ vỡ (dựa trên tài liệu triển khai người dùng gửi):** challenge thêm câu về rủi ro tại bàn giao PG → BQL; section "02 — Operating Flow" (cả bản đầy đủ và featured) viết lại cụ thể: đối chiếu BM01 với BM04, kiểm tra hạn mức tài khoản đặt xe đầu/cuối ngày; card "Operational delivery" trong JSX đổi từ câu vòng vo ("đóng gói để rollout nhất quán giúp...") thành cơ chế phòng ngừa cụ thể (giới hạn 3 lần sửa thông tin, kịch bản xử lý khiếu nại); closing dẫn chứng cơ chế này thay vì mô tả chung chung.
- **TikTok — vai trò chính xác:** Idea, Script, Editing (dựng) là của tác giả; Quay hình do partner phối hợp thực hiện. Cập nhật categoryLine, contributionLine, overview (cả bản chính và featured), context, contributionBullets (cả 2 nơi), closing.
- **Chưa làm:** V-Creator (đang chờ xác nhận về báo cáo tham khảo — tên người báo cáo trong file khác với tác giả portfolio); badge "225.1K" ở hero chưa xử lý; TikTok chưa có giả thuyết vì sao THE LITTY vượt trội (người dùng chưa cung cấp).

## v20.5 — việc 5 (hoàn tất): V-Creator
- **Xác nhận từ tác giả:** báo cáo tham khảo (`20250708_VCR_MKT_BC_Vcreator_thang_9_2025_Trình.xlsx`) do tác giả viết nhưng để tên CMO khi trình cấp cao hơn (quy định công ty) — dùng để mình đọc hiểu quy trình, KHÔNG đưa file/số liệu thật vào portfolio. Hai ảnh "Báo cáo KPI theo tháng" và "Phân tích tuyến nội dung & kế hoạch hành động" đã có sẵn từ trước là mock-up/gen mô phỏng (không phải screenshot thật) — đối chiếu lại, cấu trúc mock-up này khớp với cấu trúc report thật (ví dụ 3 mục trong "Nhận xét & kế hoạch hành động" đúng dạng với KHHĐ thật), nên giữ nguyên, không tạo ảnh mới.
- **Đảo trọng tâm tracking/optimize lên trước training (theo yêu cầu tác giả):** cập nhật ở CẢ bản chính và bản featured của `projectContent.ts`, cộng `portfolioData.ts` (title card) và `FlagshipCases.tsx` (JSX):
  - `title` card: "Campaign Operations, Training & Tracking" → "Tracking, Content Review & Training Support".
  - `categoryLine`, `contributionLine`, `overview`, `contributionBullets`, `sections` (Workstream 01/02/03), `Operating Loop` flow, `closing`, `scopeSummary`/`scopeNote`: đổi thứ tự thành Tracking → Content Analysis & Reporting → Training.
  - **Bug đã sửa:** `workstreamVisuals` trong `VCreatorAnchor` map ảnh theo vị trí cố định — khi đảo thứ tự sections, mảng ảnh phải đảo theo (`[trackingArtifact, reportingArtifact, enablementArtifact]`) để ảnh không bị lệch khỏi đúng workstream.
  - Header section 03 và câu mô tả vòng lặp cũng viết lại theo thứ tự mới.
- **Thêm "cách bạn nghĩ" (không tiết lộ nội dung cụ thể):** mỗi TTTM/KPTM được xếp vào một mức theo tỷ lệ hoàn thành KPI; mức xếp loại là căn cứ để đề xuất kế hoạch hành động khác nhau cho từng nhóm ở kỳ tiếp theo. Đây là mô tả logic/cơ chế phân loại, không nêu số liệu, ngưỡng % cụ thể hay quyết định thật đã đưa ra — giữ đúng yêu cầu bảo mật của tác giả. Thêm vào challenge, section 02, và closing.
- **Chưa làm:** badge "225.1K" ở hero (chờ quyết định); TikTok chưa có giả thuyết vì sao THE LITTY vượt trội.

## v20.5 — việc 6: đưa chatbot 1AI ra khỏi "chỉ nằm trong Lab"
- **Xác nhận từ tác giả:** phần knowledge base là tổng hợp tài liệu sản phẩm có sẵn (không tự soạn từ đầu); 1AI là chatbot phục vụ khách hàng, hiện đã vận hành trên website chính thức của 1Office (không phải nội bộ, không phải demo nội bộ).
- **Quyết định:** không tạo case Work riêng cho 1AI (Lab vốn là bằng chứng mạnh hơn một case tĩnh — người đọc có thể tự tương tác; nội dung công việc thật cũng không đủ dày cho một case đầy đủ; portfolio đã có 9 case, không nên thêm). Thay vào đó, làm cho Experience và đầu Work section trỏ rõ tới nó.
- **Experience (1Office):** thêm achievement bullet "Thiết kế prompt và tổng hợp tài liệu sản phẩm có sẵn thành knowledge base cho 1AI — chatbot khách hàng của 1Office, hiện đang vận hành trên website chính thức."; thêm skill "AI Chatbot / Prompt Design" vào danh sách skills.
- **Work section (mới):** thêm một ô ghi chú + nút CTA ngay đầu Selected Work (`WorkSection.tsx`), trước khi vào case B2B: "Ngoài các case dưới đây, tôi thiết kế prompt và knowledge base cho 1AI — chatbot khách hàng đang chạy trên website chính thức của 1Office." + nút "Thử 1AI trong Marketing Lab" gọi thẳng `onOpenLab('chatbot')` (dùng lại `LabModuleId` đã có sẵn trong `types.ts`, trước đó chưa project nào trỏ tới module này).
- **Marketing Lab:** sửa dòng "Phần tôi tham gia" ở module chatbot — bỏ chữ "chuẩn bị knowledge base" (nghe như tự soạn), đổi thành "tổng hợp tài liệu sản phẩm có sẵn thành knowledge base"; thêm rõ "chatbot khách hàng hiện đang vận hành trên website chính thức của 1Office".
- **Đã kiểm tra:** click CTA → state Lab chuyển đúng sang tab chatbot (xác nhận qua DOM, class "hidden" được gỡ khỏi đúng stage). Hành vi cuộn mượt xuống Lab giống hệt nút "Lab" có sẵn ở header — hành vi nhất quán toàn site.

## v20.5 — việc 7: Capability × Evidence và About
- **Capability × Evidence: 6 → 4 mục**, theo đúng lựa chọn của tác giả (Strategy & Planning · Brand & Content Strategy · Automation/MarTech · Measurement & Optimization). Bỏ "Research & Audience Understanding" và "Campaign & Customer Experience"; evidence của 2 mục này được phân bổ lại:
  - Sửa lỗi mapping đã flag ở bản đánh giá đầu: "Measurement & Optimization" trước đó dẫn tới B2B Ebook Funnel — nhưng chính case B2B lại tự nói không dùng số liệu lead/conversion làm bằng chứng đo lường (mâu thuẫn). Đã thay bằng **ICP Scoring & Tracking** (đúng bản chất: xếp loại theo KPI, tracking, cấu trúc dữ liệu).
  - "Strategy & Planning" và "Brand & Content Strategy" giữ evidence cũ (Dream Christmas, B2B Ebook Funnel, TikTok) — đã rà lại và thấy hợp lý sau các chỉnh sửa ở việc 5 (B2B giờ có thêm A/B test thông điệp, càng khớp với cả 2 capability này).
  - "Automation / MarTech" giữ nguyên (Marketing Automation, Marketing Lab) — đây là bằng chứng chắc nhất, không đổi.
- **About:**
  - Quote cũ "Insight chỉ có giá trị khi..." mâu thuẫn với quyết định bỏ chữ "Insight" khỏi headline (việc 4) → thay bằng câu nối thẳng với headline mới: "Ý tưởng đẹp trên slide chỉ là điểm bắt đầu. Phần tôi quan tâm là làm cho nó chạy ngoài đời, rồi cải thiện ở vòng sau." — tạo sợi chỉ xuyên suốt Hero → About.
  - Bio: bỏ chữ "insight" ở đầu câu; thay "trải nghiệm thực tế" chung chung bằng nêu tên 2 công ty (Vincom Retail, 1Office) để cụ thể hơn mà không phải đếm số tháng.
  - HSK5: thêm mốc "09/2018 – 07/2021 · THPT Chuyên Thái Nguyên" ngay dưới điểm số, để minh bạch đây là chứng chỉ từ cấp 3, không phải mới thi — tránh hiểu lầm và tăng độ tin cậy thay vì che giấu.
  - Khối MOS: nén từ 1 card lớn (chiếm cả hàng, 3 cột) xuống 1 dòng gọn: "MOS 2019 — Excel 978 · Word 962 · PowerPoint 957".
- **Việc cần tác giả quyết định tiếp** (xem tin nhắn chính): AI Readiness hiện không khớp rõ với capability nào trong 4 mục mới; và hero eyebrow "PRODUCT MARKETING · BRAND" chưa có chữ "AI" dù vai trò đã chốt là "Product Marketing & AI".

## v20.5 — việc 7 (hoàn tất theo phản hồi)
- **Quote About viết lại theo hướng tác giả góp ý** (giọng trực tiếp hơn, bớt "làm màu"): "Tôi quan tâm đến việc hiện thực hóa ý tưởng, theo dõi nó chạy trong thực tế, và cải thiện ở vòng sau." (thay cho bản trước "Ý tưởng đẹp trên slide chỉ là điểm bắt đầu...").
- **AI Readiness thêm làm evidence phụ cho "Automation / MarTech"** (giữa Marketing Automation và Marketing Lab) — theo hướng (a) tác giả chọn.
- **Hero eyebrow:** "PRODUCT MARKETING · BRAND" → "PRODUCT MARKETING & AI · BRAND", khớp với chức danh "Product Marketing & AI Intern" ở Experience.

## v20.5 — việc 8, đợt 1: giọng văn cho 3 case chính (B2B, V-Creator, Dream)
Đã duyệt cùng tác giả, áp dụng 7 điểm:
1. **B2B:** bỏ chữ "representative" còn sót ở section 06 (Organic Content) → "chỉ là một vài ví dụ trong số đó".
2. **B2B scopeNote:** viết lại từ giọng ngôi thứ ba ("Portfolio sử dụng...", "Visual evidence được chọn theo dạng representative...") sang ngôi thứ nhất, bỏ luôn chữ "representative" và câu bị động.
3. **B2B context:** câu bị động "Mỗi ebook được triển khai như..." → chủ động "Tôi triển khai mỗi ebook như...".
4. **B2B closing:** bỏ câu mở công thức "Project này thể hiện...", rút còn 1 câu cụ thể.
5. **V-Creator closing:** bỏ câu đầu lặp overview ("V-Creator cho thấy kinh nghiệm..."), giữ/viết lại câu có ý riêng theo bản tác giả chỉnh: "Phần tôi quan tâm không chỉ là tổng hợp số liệu, mà là việc mỗi kỳ báo cáo phải định hướng cho một kế hoạch hành động khác nhau."
6. **V-Creator scopeNote:** viết lại theo bản tác giả chỉnh — "không phải kết quả cá nhân" (ngắn hơn), tách 2 câu rõ ràng.
7. **Dream closing:** bỏ câu mở công thức "Project này thể hiện...", giữ nguyên câu cụ thể về BM01/BM04.
Dream scopeNote không đổi (đã ổn, đã là ngôi thứ nhất, không danh từ hóa).

**Còn lại của việc 8:** 6 case phụ (Automation, AI Readiness, ICP Scoring, Seasonal, AREA Green, TikTok) — sẽ phân tích và hỏi ở đợt sau.

## v20.5 — việc 8, đợt 2: giọng văn cho 6 case phụ (TikTok, Automation, AI Readiness, ICP, Seasonal, AREA)
Đã duyệt cùng tác giả (7/9 theo đề xuất gốc, 2 chỗ theo bản tác giả tự viết lại — TikTok closing và Automation closing), áp dụng:
- **TikTok:** closing viết lại theo bản tác giả ("Tôi phụ trách ý tưởng, kịch bản và dựng video; phần quay hình có sự phối hợp của teammate."); bỏ hẳn câu "Portfolio hiển thị từng video..." khỏi section 01 theo yêu cầu tác giả (giữ lại câu về THE LITTY).
- **Automation:** closing và scopeNote viết lại theo bản tác giả — scopeNote không còn giọng ngôi thứ ba ("Portfolio phân biệt rõ...") và không còn câu bị động.
- **AI Readiness:** context đoạn 1 chủ động hóa; closing bỏ khung "Project này cho tôi..."; scopeNote bỏ hẳn cụm ngôi thứ ba "portfolio không claim cá nhân tôi sở hữu...".
- **ICP Scoring:** 1 câu thiếu chủ ngữ ở section 05 → thêm "Tôi" + bỏ "claim ownership" (jargon Anh xen giữa câu Việt) → "không sở hữu toàn bộ scoring model".
- **Seasonal:** closing viết lại theo bản tác giả, chủ động hóa hoàn toàn.
- **AREA:** closing bỏ khung công thức + bỏ chữ "trong portfolio" (nhắc portfolio ở ngôi thứ ba). Mục "challenge" để trống — tác giả quyết định giữ nguyên, không thêm.

**Kết quả rà soát toàn site:** cụm "Project này" (công thức closing) không còn xuất hiện ở bất kỳ case nào trong 9 case. Giọng ngôi thứ ba ("Portfolio phân biệt/sử dụng/hiển thị...") và chữ tiếng Anh lẫn "claim/representative/ownership" trong các khối Phạm vi & attribution đã được dọn sạch ở toàn bộ 9 case.

**Việc 8 hoàn tất — đây là việc cuối cùng trong 8 việc ban đầu.**



## v20.6 — chốt quote, teammate, dọn phần sót, bản đa ngôn ngữ
- **Quote About (chốt):** "Tôi quan tâm đến việc hiện thực hóa ý tưởng, theo dõi quá trình triển khai trong thực tế, và cải thiện ở giai đoạn tiếp theo." Các bản cũ ("Ý tưởng đẹp…", "Hiện thực hóa ý tưởng. Tôi theo dõi…" dạng quote) không còn dùng làm quote. Nếu cần rút gọn: "Tôi quan tâm đến việc hiện thực hóa ý tưởng, theo dõi nó chạy thực tế và cải thiện ở vòng sau."
- **teammate thay partner** (TikTok: categoryLine, contributionLine, overview, context, bullet, closing — cả bản chính và featured).
- **Đồng bộ source với bản PREVIEW:** headline/tagline mới ("Hiện thực hóa ý tưởng. Tôi theo dõi triển khai, và cải thiện ở từng giai đoạn."), categoryLine/contributionLine V-Creator theo thứ tự Tracking → Training.
- **Dọn phần sót:** bỏ "portfolio" ngôi thứ ba (TikTok, B2B, Automation, Contact); bỏ deliverable/claim/friction/"production workspace"/"My contribution"; "Capability × Evidence" → "Năng lực × Sản phẩm thực tế"; card Make.com "0 B" → "—", ngày "18 thg 9, 2025" → "18/09/2025"; tên project TikTok thống nhất "Vincom TikTok — Short-form Content"; "91+" trong Marketing Lab → "91"; xóa `birthDate` khỏi PERSONAL_INFO (không hiển thị nhưng lộ trong mã nguồn); footer/meta đổi sang định vị Product Marketing & AI.
- **Đa ngôn ngữ (VI/EN/中文):** source giữ tiếng Việt làm bản gốc. Thư mục `i18n/` chạy SAU bước standalone build: `npm i acorn acorn-walk && node i18n/build_i18n.js <standalone.html> <out.html>` → một file HTML duy nhất có nút VI/EN/中文 (hoặc `?lang=en|zh`). `fixes.json` = sửa chữ tiếng Việt áp lên bundle (không phụ thuộc source), `translations.json` = bản dịch EN/ZH (khóa là câu tiếng Việt sau khi sửa; khóa kết thúc bằng "…" là khớp theo tiền tố), `remaining-strings.json` = ~465 chuỗi tiếng Việt chưa dịch (case, caption ảnh, Marketing Lab). Tiêu đề ảnh và chuỗi dùng để tìm ảnh trong code (`includes('Báo cáo KPI')`, `'Bài SEO'`…) phải dịch đồng thời khi dịch phần case.
- **Chưa làm / chờ quyết định:** dịch phần case và Marketing Lab; "8+ kỳ báo cáo" chờ xác nhận; badge 225.1K ở hero; nhãn header "Marketing Portfolio".
- **Glossary (đã xác nhận):** PTSP = Phát triển sản phẩm (EN: product development team); KPTM = Khu phố thương mại (EN: commercial street); TTTM = trung tâm thương mại (EN: shopping mall).
- **Tiến độ dịch EN/ZH:** đã dịch nhãn UI, tiêu đề mục, tên chỉ số, bullet đóng góp ngắn của 9 case. Đã dịch thêm phần nội dung dài của case B2B (bản hiển thị trong trang). Còn ~348 chuỗi (đoạn văn dài của case, caption ảnh, Marketing Lab) — xem `i18n/remaining-strings.json`.
- **Chốt (v20.6):** giữ "8+ kỳ báo cáo"; giữ nhãn header "Marketing Portfolio"; bỏ badge "225.1K" ở hero — ảnh proof TikTok của hero dùng bản cắt bỏ phần badge (`public/images/hero-tiktok-proof.jpg`, `Hero.tsx` đã trỏ sang ảnh mới). Ảnh gốc `tiktok-the-litty.jpg` vẫn dùng trong case TikTok, nơi lượt xem được ghi rõ.

## v20.6.1 — sửa theo rà soát (góc nhìn người làm + người đọc)
- **Sửa lỗi logic:** case "Marketing Automation" (Vincom Retail) ghi `07/2025 – Hiện tại` dù kỳ thực tập Vincom đã kết thúc 01/2026 → sửa thành `07/2025 – 01/2026`.
- **Thống nhất định dạng số:** badge case ICP "~28.000 DN (ICP 50–300)" (kiểu VN, viết tắt DN) → "~28,000 Businesses (ICP 50–300)", khớp quy ước các badge chỉ số khác trên trang (số kiểu Anh, nhãn tiếng Anh).
- **Bỏ trường dung lượng file** trong dữ liệu `automationWorkflows` (91 fanpage): xóa field `size` ("193.7 MB", "0 B", "341.7 MB") khỏi cả 3 workflow. Field này thực ra không hiển thị ở đâu trên trang (dữ liệu chết), nhưng đã dọn theo yêu cầu.
- **Giải thích thuật ngữ lần đầu xuất hiện:**
  - V-Creator: "TTTM cơ sở" → "TTTM (trung tâm thương mại) cơ sở" (áp dụng cả bản overview ngắn và dài).
  - V-Creator: bullet đầu tiên có "TTTM/KPTM" → thêm "(trung tâm thương mại/khu phố thương mại)".
  - Dream Christmas: thêm "qua XanhSM (dịch vụ xe điện)" vào câu mở đầu, vì XanhSM trước đó chỉ xuất hiện trong caption ảnh mà không được giới thiệu.
  - PTSP, PG, BQL: đã có giải thích qua ngữ cảnh từ trước (PTSP ở case AI Readiness, PG/BQL ở case Dream Christmas) — không cần sửa thêm.
- Toàn bộ thay đổi trên đã áp dụng cho cả 3 bản ngôn ngữ (VI/EN/中文); các khóa dịch liên quan trong `i18n/translations.json` đã được cập nhật để khớp câu tiếng Việt mới, tránh bị rơi lại tiếng Việt trên bản EN/中文.

## v20.6.4 — sharpness cap, dedupe, layout gaps, line-wrap fixes
- **Ảnh không còn bị phóng to quá nét gốc:** `EvidenceImage` (WorkShared.tsx) giờ đo `naturalWidth` khi ảnh tải xong và đặt `max-width` = naturalWidth/DPR × 1.05 cho các biến thể không cố định khung (mọi variant trừ `thumbnail`/`video`). Ảnh nhỏ hơn khung chứa sẽ tự thu nhỏ lại thay vì bị CSS kéy giãn ra 100% chiều rộng cột — hết tình trạng mờ nhòe trên màn Retina (kiểm chứng bằng crop 2x ảnh Workforce ad).
- **Bỏ ảnh landing page B2B bị lặp:** Case 01 · Conversion trước đây render "Landing Page B2B — Trang chủ" 2 lần (hero mockup đầu case + lại trong fold "Xem thêm · Landing page"). Gộp landing page phụ (Workforce) + ROI calculator vào cùng hàng 3 cột với landing page chính; bỏ hẳn fold cũ → hết ảnh lặp, hết ô trống 1-trong-2-cột (ảnh 3 người dùng gửi).
- **Fold "Test thông điệp" chỉ hiện bản 2:** bản 1 đã hiện sẵn ở Acquisition nên không lặp lại; đoạn giải thích thêm 1 câu ghi rõ bản 1 đã hiện ở trên.
- **3 header case chính + TikTok:** đổi tỷ lệ cột meta/title:overview từ 7:5 → 6:6. Tiêu đề ngắn (vd "Vincom V-Creator") trước đây để lại một dải trắng rộng bên phải tiêu đề trước khi tới đoạn overview (ảnh 4 người dùng gửi) — 6:6 thu hẹp khoảng trắng đó và cho đoạn overview thêm chỗ để wrap tự nhiên hơn.
- **Đoạn mở Acquisition hết ngắt dòng mồ côi:** bỏ `max-w-3xl` tôi lỡ thêm ở bản trước (ảnh 1 người dùng gửi) — giờ paragraph chạy hết chiều rộng cột như các stage khác (Conversion, Lead Nurture), khớp mẫu ảnh 2.
- **CSS mới:** `.font-mono-code { text-wrap: balance }` — chặn các nhãn/kicker viết hoa nhỏ (uppercase tracking-wide) bị ngắt để lại 1 chữ mồ côi trên dòng cuối khi cột hẹp.
- **`SupportingProjectRow.tsx` (More selected work → "Xem case"):** "Phần tôi trực tiếp đóng góp" + khối "Thử thách & sections" giờ nằm chung một cột phải liền mạch (8/12, có border-l) thay vì 2 hàng lưới riêng — khi "Phần tôi trực tiếp đóng góp" chỉ có 2 bullet (vd AI Readiness, ICP Scoring) nội dung bên dưới (challenge + 4 thẻ) được đẩy lên liền kề, không còn để trống dưới bullet (ảnh 6 người dùng gửi). Áp dụng cho toàn bộ 4 project trong "More selected work" vì dùng chung component.
- **Bỏ Zalo khỏi Contact:** xoá link `zalo.me/...` và icon `MessageSquare`; nhãn đổi "Phone / Zalo" → "Phone".
- **Ảnh trùng thực sự kiểm tra lại:** dựng script so khớp `currentSrc` (base64 đã nén) toàn trang sau khi mở hết các fold — chỉ còn 1 cặp trùng cố ý (ảnh "Rà soát tuân thủ Luật Lao động" dùng làm accent nhỏ đè lên mockup landing page ở đầu case, và đầy đủ trong hàng Acquisition) — đây là hiệu ứng thiết kế (stacked mockup), không phải lỗi, nên giữ nguyên.
- **Chưa đổi / cần bạn xác nhận:** ảnh `area-green-leadership-1.jpg` và `-2.jpg` (More work → AREA Green Leadership) có nội dung khác nhau thật (không phải trùng) — không cần thay.

## v20.6.3 — review pass: độ dài, layout, độ nét ảnh
- **Case 01 (B2B) gọn hơn (~7,750px → ~5,900px desktop):** Acquisition hiện 3 ad trên 1 hàng (Workforce · Kiểm soát tiến độ bản 1 · Luật Lao động), bỏ câu lặp với mục Conversion; phần "Test thông điệp" (2 ad A/B) chuyển vào fold "Xem thêm · Test thông điệp".
- **Nhịp giữa các case:** 3 case chính dùng `pt-14/16/20 pb-0` (trước đây `py-20/24/28`) nên khoảng trống giữa case còn ~80px; header xanh của Case 01/02/03 căn `items-start` (hết khoảng trống phía trên tiêu đề).
- **V-Creator:** 3 thẻ workstream cùng chiều cao (`items-stretch`).
- **More selected work:** thẻ nhỏ xếp metric phía trên nút "Xem case" (không còn bị bẻ 3–4 dòng).
- **Marketing Lab:** khung demo dùng cùng lưới `max-w-7xl` với phần còn lại của trang.
- **About / Hero:** badge GPA `whitespace-nowrap`; thẻ TOEIC dùng cùng icon Languages; đường kẻ dưới Hero dài bằng dải số liệu.
- **Ảnh:** `dream-christmas-journey.jpg` xuất lại từ PDF gốc (trang 3.1) 2800×1575; `b2b-ad-workforce-ebook.jpg` thay bằng ảnh PNG chụp mới (không còn nhiễu JPEG). `i18n/compress_images.py` có `KEEP_SHARP` để giữ 2800px/q86 cho ảnh sơ đồ.
- **i18n:** thêm khóa "Xem thêm · Test thông điệp"; cập nhật câu mở Acquisition (VI/EN/中文). `i18n/package.json` (`type: commonjs`) để `build_i18n.js` chạy được khi package gốc là ESM.
- **Build:** dùng `npm install` (lockfile chưa có acorn/acorn-walk nên `npm ci` báo lệch).
- **Chưa đổi:** Case 01 vẫn dài hơn mục tiêu 4,500px vì 2 ảnh SEO và ABM; ảnh ad "Kiểm soát tiến độ bản 2" giữ bản 750×1097 (ảnh mới gửi nhỏ hơn: 581×737).

## v20.6.2 — giảm dung lượng file preview
- **File preview cũ ~20.7 MB → còn ~12.6 MB** (giảm ~39%), không đổi chất lượng nhìn thấy được — cả ảnh chụp màn hình (chữ vẫn nét) lẫn ảnh chân dung đều kiểm tra trực quan không thấy khác biệt.
- **Cách làm:** thêm bước tiền xử lý `i18n/compress_images.py`, chạy TRƯỚC `build_i18n.js`: resize ảnh nhúng base64 về tối đa 1600px cạnh dài, nén lại JPEG chất lượng 74 (optimize + progressive), chỉ giữ bản nén nếu nó thực sự nhỏ hơn bản gốc.
- **Quy trình build đầy đủ từ giờ:**
  ```
  npm i acorn acorn-walk
  python3 i18n/compress_images.py <standalone.html> <compressed.html>
  node i18n/build_i18n.js <compressed.html> <out.html>
  ```
- File nén giờ dưới ngưỡng 16 MB — đủ nhẹ để gửi email/upload hầu hết các nơi, và cũng lọt giới hạn publish Artifact nếu sau này muốn host online.
- Việc nén không đụng đến source TS (`portfolio_v20_6_changed/src/`), vì ảnh chỉ tồn tại dưới dạng base64 trong bundle đã build, không phải file rời trong source.

## v20.6.1 — bugfix pass (8 mục)
- **Header.tsx:** click nav → `scrollToAnchor` (scrollIntoView lặp 0/150/350/650/1000ms) để không lệch khi iframe Marketing Lab đổi chiều cao; email pill + CTA chỉ hiện từ `lg:`; đồng bộ `--header-height` bằng ResizeObserver.
- **WorkJumpNav.tsx:** `top` dùng `var(--header-height, 64px)` thay vì `top-[64px]`.
- **public/marketing-lab/index.html:** tab `.showroom` cuộn ngang có mask mờ mép phải, `.ownership` chuyển block ở ≤900px, `.readiness` bỏ `min-height:592px` + căn giữa `.rmain`.
- **SkillsSection.tsx:** H2 `leading-[1.15] pt-1` (không cắt dấu tiếng Việt).
- **WorkShared.tsx / portfolioData.ts:** stat-card `min-h-[76px]`; rút gọn value B2B.
- **FlagshipCases.tsx:** mũi tên pipeline chỉ hiện từ `lg:`; Dream Christmas dùng card border như V-Creator.
- **Hero.tsx:** bỏ underline headline; bỏ 1 polaroid overlay ở chân dung.

### v20.6.1 — đồng bộ source với bản build v20.6
Zip "changed files" v20.6 không chứa toàn bộ thay đổi của v20.5/v20.6. Các chỗ sau đã được đối chiếu ngược từ bản build và cập nhật vào source:
- `Footer.tsx` (tagline), `ExperienceTimeline.tsx` (câu dẫn "Product Marketing & AI"), `ContactSection.tsx` (đoạn mời trao đổi), `AboutSection.tsx` (trích dẫn, dòng HSK, dải MOS gọn).
- `WorkSection.tsx`: thêm khối "1AI" + nút "Thử 1AI trong Marketing Lab" trước thanh jump-nav.
- `WorkJumpNav.tsx`: nhãn "B2B Ebook Funnel"; `SupportingProjectRow.tsx`: tiêu đề "Sản phẩm thực tế / Tài liệu & sản phẩm", hỗ trợ ảnh `wide`; `WorkShared.tsx`: nhãn mặc định "Xem sản phẩm".
- `standalone-build.py`: `ROOT` tính theo vị trí file (không còn đường dẫn cứng).
- `package.json`: thêm devDependencies `acorn`, `acorn-walk` cho `i18n/build_i18n.js`.

## v20.6.5 — áp copy docx v5 (đợt 1)
- Đã thay: Hero (eyebrow, tiêu đề, mô tả, 3 tile), intro Selected Work, case Ebook B2B (Bối cảnh, Kết quả, Vai trò, các khâu, "Điều tôi rút ra", ảnh landing page Luật Lao động 2026), intro Marketing Lab, Experience (1Office, Vincom), About (bio), Contact.
- Thứ tự section: Hero → Selected Work → Marketing Lab → Experience → Capabilities → About → Contact.
- Chưa làm: Dream Christmas, case AI & dữ liệu gộp, V-Creator, Automation, More Work, Capabilities (5 hàng), bản dịch EN/中文 cho phần mới.

## v20.6.5 (cập nhật) — thay toàn bộ copy theo docx v5
- Thay copy theo docx cho: Hero, Selected Work (B2B, Dream Christmas, AI & dữ liệu gộp, V-Creator, Automation, More Work), Marketing Lab, Experience, Capabilities, About, Contact.
- Thứ tự case: Ebook B2B → Dream Christmas → AI & dữ liệu → V-Creator → Automation → More (TikTok, Seasonal, AREA).
- Giữ bản cũ ở phần docx không có: mô tả từng loại content trong case B2B (tiêu đề/tóm tắt từng khâu, đoạn SEO).
- Bản dịch EN/中文 cho phần copy mới chưa làm.


## v20.7 — đợt A (nền kỹ thuật) + hero
- Sửa lỗi sticky/anchor: `--header-height` đo theo border-box, thanh "Đi tới" xuất `--work-nav-height`, gộp offset anchor về một cơ chế `scroll-margin-top`; thay vòng cuộn lặp bằng `src/utils/scrollToAnchor.ts` (chờ cuộn dừng, chỉnh tối đa 3 lần, hủy khi người dùng thao tác, tôn trọng reduced-motion).
- Khai báo width/height cho ảnh qua `src/data/imageSizes.ts` (sinh bằng `python3 scripts/gen-image-sizes.py`; chạy lại khi thêm hoặc thay ảnh). Bản standalone đọc kích thước từ header của data URI.
- Accessibility: teal đậm #0F766E và xám #586980 cho chữ nhỏ, nhãn tối thiểu 12px, đoạn dài giới hạn 78ch, vùng chạm link nhỏ trên mobile.
- Hero: nút phụ đổi thành "Xem Marketing Lab", thêm dòng trạng thái tìm việc; bỏ dòng "Open to full-time roles" trên thẻ ảnh.
- Khác: favicon, theme-color đồng bộ nền app, đổi title Marketing Lab, xóa `CaseStudyModal.tsx` (code chết).
- Chưa làm: og:image/canonical/og:url (cần tên miền), lớp tóm tắt cho từng case (đợt B), bản dịch EN/中文 cho phần mới.

## v20.7 — đợt B (lớp tóm tắt, phần chi tiết gập)
- Mỗi case chính (Ebook B2B, Dream Christmas, AI & dữ liệu, V-Creator, Automation) có lớp tóm tắt một màn hình và nút mở phần chi tiết (`useCaseDetails` + `CaseToggle` trong `work/WorkShared.tsx`). Toàn bộ ảnh vẫn giữ trong phần chi tiết; thu gọn sẽ cuộn về đầu case.
- Tóm tắt gồm: tiêu đề, kết quả, số liệu, vai trò, phạm vi đóng góp. Riêng Automation giữ chữ ba workflow, ảnh nằm trong phần mở; AI & dữ liệu có ba thẻ tóm tắt.
- Chưa làm: bản dịch EN/中文 cho nút và chuỗi mới ("Xem chi tiết case", "Thu gọn chi tiết", "Xem ảnh workflow", "Xem vòng lặp hàng tháng", "Xem chi tiết ba workstream", dòng trạng thái ở hero).

## v20.7 — ảnh tiêu đề cho lớp tóm tắt + rà mobile
- Mỗi case chính có ảnh tiêu đề (`CaseCover` trong `work/WorkShared.tsx`): B2B dùng landing page dịch vụ, Dream Christmas dùng bìa tài liệu triển khai, AI & dữ liệu dùng trang đánh giá AI Readiness, V-Creator dùng bìa slide đào tạo, Automation dùng scenario tạo caption. Ảnh dùng làm bìa được bỏ khỏi phần chi tiết để không lặp (riêng B2B bỏ ảnh ghép landing page + quảng cáo).
- Thêm nút "Thu gọn chi tiết" ở cuối phần chi tiết của từng case (trừ Automation, nơi nút nằm ngay sau danh sách workflow).
- Mobile: rút ngắn nhãn số liệu của case B2B để không xuống 4 dòng.

## v20.7 — khóa bản tiếng Việt
- Thống nhất cách viết: "xây dựng prompt và luồng hội thoại" (hero và case AI & dữ liệu); số ebook ghi "4 ebook" (không còn "ba"/"04").
- Viết tắt có giải nghĩa trong ngoặc ở lần đầu xuất hiện theo thứ tự đọc: ABM, ICP, MOS (hero), TTTM, PG, BQL (Dream Christmas), HRM, CPL (B2B), CRM (AI & dữ liệu), Zalo OA (Automation). TTTM/KPTM giữ giải nghĩa gốc của docx. "L1/L2" chưa có giải nghĩa vì docx chưa định nghĩa.

## v20.7 — bản dịch EN/中文 (đợt 1: trang chính)
- Dịch toàn bộ chuỗi trang chính còn thiếu (khoảng 200 chuỗi mới: hero, các case, Experience, Capabilities, About, Contact, nút mở/gập) vào `i18n/translations.json`. Bản build báo 0 chuỗi tiếng Việt chưa dịch ở phần ứng dụng chính.
- aria-label "Phóng to …" đã chuyển sang dạng ghép chuỗi để dịch được.
- Chưa dịch: giao diện Marketing Lab (iframe `public/marketing-lab/index.html`, khoảng 330 chuỗi), cần cơ chế dịch riêng.
- Cần người bản ngữ đọc lại bản EN (và 中文 nếu có thể) trước khi gửi.

## v20.7 — bản dịch EN/中文 (đợt 2: Marketing Lab)
- Marketing Lab có từ điển riêng `i18n/lab-translations.json` (khoảng 325 cụm). `standalone-build.py` nhúng từ điển và dịch tài liệu Lab ngay trong trình duyệt khi cần (chỉ nhúng ảnh một lần); `build_i18n.js` cho gói EN/ZH dùng đúng tài liệu Lab đã dịch.
- Giữ nguyên tiếng Việt có chủ ý: nội dung mẫu FILA do workflow tạo ra (ví dụ sản phẩm thật), các từ khóa nhận diện ý định của chatbot demo. Chatbot demo nhận thêm từ khóa tiếng Anh và tiếng Trung (price, demo, guide, 价格, 演示, 使用指南...).
- Dấu nháy ' trong bản dịch được đổi thành ’ để không làm hỏng chuỗi JavaScript trong Lab.
- Khi thêm hoặc sửa chữ trong Lab tiếng Việt, cần thêm cụm tương ứng vào `lab-translations.json`; cụm chưa có sẽ hiển thị tiếng Việt.

## v20.7 — chia sẻ và đăng tải
- Ảnh chia sẻ đã tạo sẵn: `public/og-image.jpg` (1200×630). Chưa gắn thẻ og:image, canonical, og:url vì chưa có địa chỉ chính thức; thẻ chia sẻ cần địa chỉ tuyệt đối để các mạng xã hội đọc được.
- Khi có địa chỉ: chạy `python3 scripts/set-domain.py https://dia-chi-cua-ban` (thêm canonical, og:url, og:image, twitter:image, đổi twitter:card sang summary_large_image, tạo robots.txt và sitemap.xml). Chạy lại với địa chỉ mới nếu đổi.
- Hai cách đăng tải: (1) đăng file `phung-minh-ngoc-portfolio-v20_7-preview.html` thành `index.html` trên dịch vụ lưu trữ tĩnh để có đủ VI/EN/中文, nhưng file nặng khoảng 13 MB; (2) `npm run build` rồi đăng thư mục `dist/` (nhẹ hơn, ảnh tách riêng) nhưng bản này hiện chỉ có tiếng Việt vì bản dịch được ghép trong bước standalone.
- Sửa tách tiêu đề hero cho tiếng Trung (dấu "。"), bỏ regex lookbehind để Safari cũ không lỗi cú pháp.

## v20.7 — kiểm tra cuối
- Ma trận kiểm tra 3 ngôn ngữ × 3 kích thước (1440, 768, 390px): không lỗi JavaScript, không ảnh hỏng, không tràn ngang, mọi ảnh có alt và kích thước, một thẻ h1 mỗi trang. Lỗi console duy nhất là tải font Google khi chạy ngoại tuyến.
- Đối chiếu docx: 198 câu, mọi câu nội dung đều có trên trang (các dòng còn lại là ghi chú nội bộ của docx, nhãn ngày tháng ghép lại từ dữ liệu và chú thích ảnh tách thành tiêu đề + mô tả). Đã bổ sung chi tiết "lớp chuyên tiếng Trung" ở mục About.
- Bộ chọn ngôn ngữ trên mobile nằm trong header (không còn che nội dung), trên desktop vẫn nổi ở góc dưới bên phải.
- Link ngoài dùng rel="noopener noreferrer". Nhãn đọc màn hình của video TikTok đã dịch được.
- Chưa làm: thẻ chia sẻ theo tên miền (dùng scripts/set-domain.py khi có địa chỉ), bản đăng tải nhẹ tách ảnh (đã bỏ qua theo yêu cầu), nhờ người bản ngữ đọc bản EN.
