import type { Project, ExperienceItem, Certification } from '../types';

// Personal/profile data shared across hero, about, contact and footer.
export const PERSONAL_INFO = {
  "name": "Phùng Minh Ngọc",
  "title": "Marketing Portfolio",
  "subTitle": "Marketing Portfolio · Selected Work",
  "tagline": "Đưa ý tưởng vào thực tế. Đo lường để cải thiện.",
  "heroEyebrow": "MARKETING STRATEGY · PRODUCT · BRAND",
  "heroTitle": "Đưa ý tưởng vào thực tế. Đo lường để cải thiện.",
  "heroDescription": "Tôi là Minh Ngọc, cử nhân Quản trị Thương hiệu (ĐHQGHN). Tại 1Office, tôi chuyển hóa tính năng sản phẩm thành thông điệp để khách hàng B2B thấy rõ giá trị sản phẩm mang lại; trước đó tại Vincom Retail, tôi vận hành campaign và owned media ở quy mô nhiều trung tâm thương mại.",
  "avatarUrl": "./images/avatar.jpg",
  "bio": "Với nền tảng Quản trị Thương hiệu, tôi luôn nhìn Marketing từ phía người dùng: họ đang ở đâu, cần gì và đang gặp trở ngại nào. Qua ba kỳ thực tập, tôi nhận ra phần mình muốn làm sâu hơn nằm ở khâu biến một ý tưởng thành cách triển khai có thể vận hành thực tế, rồi dùng dữ liệu để tiếp tục điều chỉnh. Tôi có cơ hội rèn cách làm này qua những bài toán ngày càng khác nhau, từ B2C đến B2B.\n\nỞ Vincom Retail, tôi áp dụng cách làm này với creator program, hành trình khách hàng dịp Giáng Sinh và automation. Tại 1Office, phạm vi mở rộng sang ebook B2B, chatbot và dữ liệu khách hàng.",
  "email": "phungminhngoc5823@gmail.com",
  "phone": "0969085803",
  "location": "Hà Nội, Việt Nam",
  "education": [
    {
      "school": "Đại học Quốc gia Hà Nội — Trường Khoa học Liên ngành và Nghệ thuật",
      "major": "Quản trị Thương hiệu (Brand Management)",
      "period": "09/2021 – 07/2025",
      "gpa": "GPA: 3.6 / 4.0",
      "details": "Chương trình đào tạo chính quy về hoạch định chiến lược thương hiệu, nghiên cứu hành vi người tiêu dùng, truyền thông tích hợp (IMC) và thiết kế trải nghiệm khách hàng."
    },
    {
      "school": "THPT Chuyên Thái Nguyên",
      "major": "Lớp Chuyên Tiếng Trung",
      "period": "09/2018 – 07/2021",
      "gpa": "HSK5: 259/300 điểm",
      "details": "Nền tảng ngoại ngữ vững chắc, tư duy phân tích ngôn ngữ linh hoạt và khả năng giao tiếp đa văn hóa."
    }
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    "name": "Tiếng Trung — HSK5",
    "score": "259 / 300",
    "issuer": "Hanban / CTI",
    "type": "language"
  },
  {
    "name": "Tiếng Anh — TOEIC",
    "score": "905 / 990",
    "issuer": "ETS",
    "type": "language"
  },
  {
    "name": "Tin học văn phòng MOS Excel 2019",
    "score": "978 / 1000",
    "issuer": "Microsoft",
    "type": "office"
  },
  {
    "name": "Tin học văn phòng MOS Word 2019",
    "score": "962 / 1000",
    "issuer": "Microsoft",
    "type": "office"
  },
  {
    "name": "Tin học văn phòng MOS PowerPoint 2019",
    "score": "957 / 1000",
    "issuer": "Microsoft",
    "type": "office"
  }
];

// Project metadata + evidence/assets only. Narrative copy lives exclusively in projectContent.ts.
export type ExtendedProject = Project;
export const PROJECTS: ExtendedProject[] = [
  {
    "id": "v-creator",
    "title": "Vincom V-Creator — Tracking, Content Review & Training Support",
    "company": "Vincom Retail",
    "category": "brand",
    "featured": true,
    "dateRange": "01/2025 – 01/2026",
    "cardImage": "./images/v-creator-training-cover.jpg",
    "galleryImages": [
      {
        "title": "Monthly Training Deck",
        "subtitle": "05/2025, ví dụ ở giai đoạn hỗ trợ — tài liệu training cho đội ngũ TTTM và gian hàng.",
        "url": "./images/v-creator-training-cover.jpg"
      },
      {
        "title": "Viral Video Standards",
        "subtitle": "Framework tham chiếu một số tiêu chí content dùng trong training.",
        "url": "./images/v-creator-viral-tips.jpg"
      },
      {
        "title": "Collaboration Proposal",
        "subtitle": "Ví dụ tài liệu hỗ trợ creator và collaboration trong phạm vi vận hành chương trình.",
        "url": "./images/v-creator-proposal.jpg"
      },
      {
        "title": "Monthly KPI Report",
        "subtitle": "Ẩn số liệu nội bộ, giữ cấu trúc xu hướng → KPI → insight.",
        "url": "./images/vcreator-proof-kpi-tracking.png"
      },
      {
        "title": "Content-Line Analysis & Action Plan",
        "subtitle": "Ẩn số liệu nội bộ, giữ cấu trúc phân tích tuyến nội dung và nhóm hành động.",
        "url": "./images/vcreator-proof-content-analysis.png"
      }
    ],
    "evidence": {
      "metrics": [
          {
                "label": "Quy Mô Lượt Xem",
                "value": "2.4B+ Views"
          },
          {
                "label": "Video Trên Nền Tảng",
                "value": "40,000+ Videos"
          }
    ],
      "toolsUsed": [
        "Training Decks",
        "Monthly Tracking",
        "Content Analysis",
        "Performance Reporting"
      ],
      "trainingEnablementSection": {
        "title": "ĐÀO TẠO & HỖ TRỢ TRIỂN KHAI (TRAINING & CAMPAIGN ENABLEMENT)",
        "cards": [
          {
            "step": "MONTHLY TRAINING DECK",
            "title": "Training Materials",
            "subtitle": "Tài liệu đào tạo hàng tháng",
            "description": "Hỗ trợ xây dựng slide deck đào tạo hàng tháng, tổng hợp hướng dẫn và các nội dung cần lưu ý phục vụ đội ngũ triển khai tại TTTM và gian hàng."
          },
          {
            "step": "CONTENT & VIDEO GUIDELINES",
            "title": "Content Guidelines",
            "subtitle": "Hệ thống hóa tiêu chí nội dung",
            "description": "Hệ thống hóa các tiêu chí liên quan đến nội dung, thông tin địa điểm, hashtag, chất lượng video và yêu cầu đăng tải để hỗ trợ quá trình triển khai."
          },
          {
            "step": "DEPLOYMENT & REPORTING",
            "title": "Deployment Support",
            "subtitle": "Hỗ trợ triển khai & Báo cáo",
            "description": "Hỗ trợ truyền đạt quy trình gửi video, theo dõi tiến độ và sử dụng dữ liệu báo cáo phục vụ review định kỳ."
          }
        ]
      }
    }
  },
  {
    "id": "make-automation",
    "title": "Marketing Automation — Vincom Owned Media",
    "company": "Vincom Retail",
    "category": "automation",
    "featured": true,
    "marketingLabModule": "automation",
    "dateRange": "07/2025 – 01/2026",
    "cardImage": "./images/make-automation-scenarios.jpg",
    "galleryImages": [
      {
        "title": "Make.com Workspace",
        "subtitle": "Tổng quan các scenario vận hành.",
        "url": "./images/make-automation-scenarios.jpg"
      },
      {
        "title": "Multi-channel Content Workflow",
        "subtitle": "Google Sheets → Router → AI generation → Parse JSON → Facebook / TikTok / Zalo OA.",
        "url": "./images/marketing-lab/workflow-content-generation.jpg"
      },
      {
        "title": "Đăng bài theo order",
        "subtitle": "Scenario nhiều route theo TTTM, tenant và điểm đến.",
        "url": "./images/marketing-lab/workflow-publish.jpg"
      },
      {
        "title": "Editing & Top Comment",
        "subtitle": "Tìm bản ghi → chọn hành động → sửa hoặc thêm top comment → cập nhật trạng thái.",
        "url": "./images/marketing-lab/workflow-edit-top-comment.jpg"
      }
    ],
    "automationWorkflows": [
      {
        "name": "HO_ Order đăng bài tự động",
        "category": "Marketing Digital",
        "date": "18/09/2025"
      },
      {
        "name": "Vincom Retail_Luồng tạo nội dung",
        "category": "Marketing Digital",
        "date": "06/09/2025"
      },
      {
        "name": "Vincom Retail_Luồng đăng bài",
        "category": "Marketing Digital",
        "date": "18/09/2025"
      }
    ],
    "evidence": {
      "metrics": [
          {
                "label": "Phạm Vi Triển Khai",
                "value": "91 Fanpages"
          },
          {
                "label": "Thời Gian Xử Lý Mỗi Bài",
                "value": "Nửa ngày → 15–30 phút"
          }
    ],
      "toolsUsed": [
        "Make.com",
        "AI Content Tools",
        "Facebook",
        "Zalo OA",
        "TikTok"
      ]
    }
  },
  {
    "id": "seo-content-ads",
    "title": "B2B Content System — Ebook Lead Generation",
    "company": "1Office",
    "category": "seo",
    "featured": true,
    "dateRange": "05/2026 – Hiện tại",
    "externalUrl": "https://1office.vn/dich-vu-b2b",
    "linkText": "Xem Landing Page B2B",
    "cardImage": "./images/b2b-ebook2-ldp-hero.jpg",
    "galleryImages": [
      {
        "title": "Landing Page B2B — Trang chủ",
        "subtitle": "Trang chủ: Kiểm soát tiến độ, hiệu suất và lợi nhuận dự án.",
        "url": "./images/b2b-ldp-hero.jpg",
        "key": "b2b-ldp-hero"
      },
      {
        "title": "ROI Calculator tương tác",
        "subtitle": "So sánh chi phí công cụ rời rạc với gói 1Office toàn diện.",
        "url": "./images/b2b-ldp-roi-calculator.jpg",
        "key": "b2b-ldp-roi-calculator"
      },
      {
        "title": "Landing Page B2B — Toàn cảnh vận hành",
        "subtitle": "Một nền tảng, hai tầng vận hành liên thông.",
        "url": "./images/b2b-ldp-flow.jpg",
        "key": "b2b-ldp-flow"
      },
      {
        "title": "Landing Page B2B — Trợ lý AI",
        "subtitle": "8 trợ lý AI hỗ trợ ra quyết định trên dữ liệu vận hành.",
        "url": "./images/b2b-ldp-ai.jpg",
        "key": "b2b-ldp-ai"
      },
      {
        "title": "Landing Page B2B — Giải pháp theo ngành",
        "subtitle": "Thích ứng với từng mô hình doanh nghiệp dịch vụ.",
        "url": "./images/b2b-ldp-solution.jpg",
        "key": "b2b-ldp-solution"
      },
      {
        "title": "Landing Page Ebook — Rà soát tuân thủ Luật Lao động 2026",
        "subtitle": "Rà soát tuân thủ Luật Lao động 2026.",
        "url": "./images/b2b-ebook4-ldp.jpg",
        "key": "b2b-ebook4-ldp"
      },
      {
        "title": "Bài SEO đã đăng — 10 Mẫu biên bản bàn giao hồ sơ, tài liệu file Word (Cập nhật 2026)",
        "subtitle": "Đăng trên chuyên mục Ebook - Biểu mẫu, 1office.vn",
        "url": "./images/b2b-seo-article-bien-ban-ban-giao.jpg",
        "key": "b2b-seo-article-bien-ban-ban-giao"
      },
      {
        "title": "Bài SEO đã đăng — Quản lý hồ sơ nhân sự bằng Excel: 10 file mẫu miễn phí và hướng dẫn sử dụng",
        "subtitle": "Đăng trên chuyên mục Ebook - Biểu mẫu, 1office.vn",
        "url": "./images/b2b-seo-article-excel-nhan-su.jpg",
        "key": "b2b-seo-article-excel-nhan-su"
      },
      {
        "title": "LinkedIn — Ebook Rà soát tuân thủ Luật Lao động 2026",
        "subtitle": "Labor Law 2026, viết theo góc nhìn người ra quyết định B2B.",
        "url": "./images/b2b-linkedin-ebook4.jpg",
        "key": "b2b-linkedin-ebook4"
      },
      {
        "title": "LinkedIn — Ebook Kiểm soát tiến độ & chi phí dự án",
        "subtitle": "Project Progress & Cost Control, cho ngành Xây dựng – Thiết kế – Thi công.",
        "url": "./images/b2b-linkedin-project-cost.jpg",
        "key": "b2b-linkedin-project-cost"
      }
    ],
    "adsCarousel": [
      {
        "title": "FB Ads — Ebook Kiểm soát tiến độ & chi phí dự án (bản 1)",
        "subtitle": "“Biên lợi nhuận biến mất khi quyết toán” — phương án 1 (ảnh đơn)",
        "url": "./images/b2b-ad-ebook2-1.jpg",
        "key": "b2b-ad-ebook2-1"
      },
      {
        "title": "FB Ads — Ebook Kiểm soát tiến độ & chi phí dự án (bản 2)",
        "subtitle": "“7 ngày → 4 giờ phê duyệt”, framework Kiểm soát P&L 6 lớp — phương án 2 (carousel)",
        "url": "./images/b2b-ad-ebook2-2.jpg",
        "key": "b2b-ad-ebook2-2"
      },
      {
        "title": "FB Ads — Ebook Workforce Management Playbook",
        "subtitle": "Bài toán vận hành nhân sự nhà máy phụ thuộc Excel.",
        "url": "./images/b2b-ad-workforce-ebook.jpg",
        "key": "b2b-ad-workforce-ebook"
      },
      {
        "title": "FB Ads — Ebook Rà soát tuân thủ Luật Lao động 2026 (bản 1)",
        "subtitle": "Phương án 1 (ảnh đơn): rủi ro tuân thủ nằm ở cách thực thi dù đã “cập nhật quy định”.",
        "url": "./images/b2b-ebook4-ad-01.jpg",
        "key": "b2b-ebook4-ad-01"
      },
      {
        "title": "FB Ads — Ebook Rà soát tuân thủ Luật Lao động 2026 (bản 2)",
        "subtitle": "Phương án 2 (carousel): checklist 27 điểm, ma trận rủi ro và lộ trình 30–60–90 ngày.",
        "url": "./images/b2b-ebook4-ad-02.jpg",
        "key": "b2b-ebook4-ad-02"
      }
    ],
    "abmSequence": [
      {
        "title": "Email 1 — Nhận diện 5 chi phí ẩn đang bào mòn lợi nhuận nhà máy",
        "subtitle": "Nhận ra vấn đề: 5 chi phí ẩn đang bào mòn lợi nhuận nhà máy.",
        "url": "./images/abm-email-1.jpg"
      },
      {
        "title": "Email 2 — Loại bỏ 3 rào cản vô hình đang làm giảm hiệu suất nhà máy",
        "subtitle": "Đào sâu pain point: 3 rào cản vô hình làm giảm hiệu suất nhà máy.",
        "url": "./images/abm-email-2.jpg"
      },
      {
        "title": "Email 3 — Doanh nghiệp >50 nhân sự: Khi Zalo & Excel bắt đầu \"quá tải\"",
        "subtitle": "Hệ quả với doanh nghiệp: khi Zalo & Excel bắt đầu “quá tải” (→50 nhân sự).",
        "url": "./images/abm-email-3.jpg"
      },
      {
        "title": "Email 4 — Đồng Tâm Group quản trị nhân sự \"không khoảng cách\"",
        "subtitle": "Case thực tế: Đồng Tâm Group quản trị nhân sự “không khoảng cách”.",
        "url": "./images/abm-email-4.jpg"
      },
      {
        "title": "Email 5 — Doanh nghiệp đang ở đâu trên hành trình tự động hóa quản trị nhân sự?",
        "subtitle": "Tự đánh giá: doanh nghiệp đang ở đâu trên hành trình tự động hóa quản trị nhân sự?",
        "url": "./images/abm-email-5.jpg"
      },
      {
        "title": "Email 6 — Loại bỏ \"điểm mù\" quản trị",
        "subtitle": "Giới thiệu giải pháp: loại bỏ “điểm mù” quản trị.",
        "url": "./images/abm-email-6.jpg"
      }
    ],
    "evidence": {
      "metrics": [
        {
          "label": "Ebook Campaigns",
          "value": "3 Ebooks"
        },
        {
          "label": "Funnel Content / Ebook",
          "value": "FB Ads · Zalo · LinkedIn · 3–6 ABM"
        },
        {
          "label": "Published SEO",
          "value": "2–3 Bài/Ngày"
        },
        {
          "label": "Landing Pages",
          "value": "3 ebook + 1 B2B"
        },
        {
          "label": "Ebook Luật Lao động 2026 · Facebook Ads",
          "value": "237 leads"
        },
        {
          "label": "Ebook Luật Lao động 2026 · Landing page",
          "value": "82 leads"
        }
      ],
      "toolsUsed": [
        "Canva",
        "1Office CMS"
      ]
    }
  },
  {
    "id": "dream-christmas-delivery",
    "title": "Dream Christmas Delivery — Campaign Experience & Operations",
    "company": "Vincom Retail × XanhSM",
    "category": "brand",
    "featured": false,
    "dateRange": "12/2025",
    "galleryImages": [
      {
        "title": "Rollout Guide",
        "subtitle": "Dream Christmas Delivery · VMM/VCC toàn quốc · 14 địa điểm · 06/12–23/12.",
        "url": "./images/dream-christmas-cover.jpg",
        "key": "dream-christmas-cover"
      },
      {
        "title": "Customer Experience Journey",
        "subtitle": "Hành trình trước, trong và sau khi khách đến quầy.",
        "url": "./images/dream-christmas-journey.jpg",
        "key": "dream-christmas-journey"
      },
      {
        "title": "Operating Flow — BQL (1/2)",
        "subtitle": "BQL (1/2): 5 bước từ training gian hàng, tracking đơn hàng và hậu kiểm đến bàn giao quà cho tài xế XanhSM.",
        "url": "./images/dream-christmas-operating-flow.jpg",
        "key": "dream-christmas-operating-flow"
      },
      {
        "title": "Operating Flow — BQL (2/2)",
        "subtitle": "BQL (2/2): kiểm tra tài khoản PG, đơn hàng XanhSM Business và đối chiếu biểu mẫu BM01–BM04.",
        "url": "./images/dream-christmas-operating-flow-2.jpg",
        "key": "dream-christmas-operating-flow-2"
      },
      {
        "title": "Training Script — nhân viên gian hàng",
        "subtitle": "Nhân viên gian hàng: nhiệm vụ và kịch bản giao tiếp mẫu.",
        "url": "./images/dream-christmas-training-script.jpg",
        "key": "dream-christmas-training-script"
      }
    ],
    "evidence": {
      "metrics": [
          {
                "label": "Quy Mô Điểm Rollout",
                "value": "14 Locations"
          },
          {
                "label": "Thời Gian Triển Khai",
                "value": "18 Days"
          }
    ],
      "toolsUsed": [
        "Customer Journey Mapping",
        "Operations Flowchart",
        "Training Script",
        "Implementation Deck"
      ],
      "structureSection": {
        "title": "TỪ TRẢI NGHIỆM ĐẾN QUY TRÌNH",
        "subtitle": "FROM EXPERIENCE TO OPERATIONS",
        "cards": [
          {
            "step": "01 — CUSTOMER JOURNEY",
            "title": "Map trải nghiệm khách hàng",
            "subtitle": "Customer Flow",
            "description": "Cấu trúc các bước chính từ mua sắm, kiểm tra điều kiện, tiếp nhận nhu cầu gói quà đến bàn giao/giao quà."
          },
          {
            "step": "02 — OPERATING FLOW",
            "title": "Chuyển journey thành quy trình",
            "subtitle": "Operational Steps",
            "description": "Làm rõ các bước vận hành, điểm chuyển giao và vai trò của các nhóm tham gia trong quá trình thực hiện."
          },
          {
            "step": "03 — TRAINING SCRIPT",
            "title": "Chuẩn hóa cách hướng dẫn và giao tiếp",
            "subtitle": "Training Script",
            "description": "Viết training script cho nhân viên gian hàng và PG nhằm giúp quá trình giới thiệu, xác nhận điều kiện và hướng dẫn khách diễn ra nhất quán hơn."
          },
          {
            "step": "04 — IMPLEMENTATION DECK",
            "title": "Đóng gói thành tài liệu triển khai",
            "subtitle": "Implementation Playbook",
            "description": "Thiết kế và format tài liệu để các bước, vai trò và hướng dẫn vận hành dễ theo dõi khi đưa vào triển khai."
          }
        ]
      }
    }
  },
  {
    "id": "vincom-tiktok-production",
    "title": "Vincom TikTok — Short-form Content",
    "company": "Vincom Retail",
    "category": "brand",
    "featured": false,
    "dateRange": "02/2025 – 03/2025",
    "tiktokVideos": [
      {
        "title": "THE LITTY — Tổ hợp giải trí mới toanh",
        "url": "https://www.tiktok.com/@vincom.com.vn/video/7472392976883322113",
        "views": "225.1K",
        "tag": "225.1K Views",
        "thumbnail": "./images/tiktok-the-litty.jpg"
      },
      {
        "title": "Tổ hợp đồ nội địa Trung lần đầu tại Việt Nam",
        "url": "https://www.tiktok.com/@vincom.com.vn/video/7471270042697501953",
        "views": "4,287",
        "tag": "Shopping Mall",
        "thumbnail": "./images/tiktok-kkv.jpg"
      },
      {
        "title": "Đi đi em — Vinpearl Aquarium Times City",
        "url": "https://www.tiktok.com/@vincom.com.vn/video/7486112381676817665",
        "views": "4,141",
        "tag": "Thủy cung Vinpearl",
        "thumbnail": "./images/tiktok-aquarium-1.jpg"
      },
      {
        "title": "MOSS — Thế giới màu hồng & Loopy phụ kiện",
        "url": "https://www.tiktok.com/@vincom.com.vn/video/7470530635786931473",
        "views": "3,639",
        "tag": "Xu hướng Gen Z",
        "thumbnail": "./images/tiktok-moss.jpg"
      },
      {
        "title": "Triển lãm Như những lớp phủ sa",
        "url": "https://www.tiktok.com/@vincom.com.vn/video/7476457879076228369",
        "views": "2,376",
        "tag": "Nghệ thuật & Văn hóa",
        "thumbnail": "./images/tiktok-vcca.jpg"
      },
      {
        "title": "Khám phá Đại dương nhỏ giữa lòng thành phố",
        "url": "https://www.tiktok.com/@vincom.com.vn/video/7474155373839027472",
        "views": "1,742",
        "tag": "Trải nghiệm TTTM",
        "thumbnail": "./images/tiktok-aquarium-2.jpg"
      }
    ],
    "evidence": {
      "metrics": [
        {
          "label": "Video Sản Xuất",
          "value": "6 Videos"
        },
        {
          "label": "Tổng Lượt Xem",
          "value": "241K+ Views"
        },
        {
          "label": "Video Cao Nhất",
          "value": "225.1K Views (THE LITTY)"
        }
      ],
      "toolsUsed": [
        "Short-form Content",
        "Scriptwriting",
        "Content Production",
        "TikTok Analytics"
      ]
    }
  },
  {
    "id": "ai-readiness",
    "title": "AI Readiness Survey & Report Experience — 1Office",
    "company": "1Office",
    "category": "growth",
    "featured": false,
    "marketingLabModule": "ai-readiness",
    "dateRange": "05/2026 – 06/2026",
    "externalUrl": "https://khaosatai.1office.vn/",
    "galleryImages": [
      {
        "title": "AI Readiness Assessment — Trang chủ",
        "subtitle": "Giao diện khảo sát trực tiếp tại khaosatai.1office.vn",
        "url": "./images/ai-readiness-assessment-landing.jpg"
      },
      {
        "title": "Form khảo sát 4 bước",
        "subtitle": "Thông tin doanh nghiệp → Nền tảng & năng lực số → Đặc thù theo quy mô → Rào cản & ưu tiên",
        "url": "./images/ai-readiness-assessment-form.jpg"
      },
      {
        "title": "Report — Bức tranh tổng quan",
        "subtitle": "Điểm số 6 nhóm năng lực, điểm mạnh/yếu và biểu đồ radar",
        "url": "./images/ai-readiness-report-overview.jpg"
      },
      {
        "title": "Report — Kế hoạch hành động ưu tiên",
        "subtitle": "Khuyến nghị cụ thể theo từng nhóm năng lực",
        "url": "./images/ai-readiness-report-actionplan.jpg"
      }
    ],
    "evidence": {
      "metrics": [
        {
          "label": "Survey Flow",
          "value": "4-Step Form"
        },
        {
          "label": "Report Structure",
          "value": "6 Nhóm Năng Lực · Radar Chart"
        },
        {
          "label": "Campaign Objective",
          "value": "Lead Generation"
        }
      ],
      "toolsUsed": [
        "UX Visualization",
        "Facebook",
        "LinkedIn",
        "Zalo"
      ]
    }
  },
  {
    "id": "icp-lead-scoring",
    "title": "ICP Scoring & Tracking Support — 1Office",
    "company": "1Office",
    "category": "research",
    "featured": false,
    "marketingLabModule": "icp-scoring",
    "dateRange": "05/2026 – 06/2026",
    "galleryImages": [
      {
        "title": "ICP Research: Ngành mục tiêu",
        "subtitle": "Tổng quan ngành, quy mô thị trường và sub-industries trong phạm vi ICP 50–300",
        "url": "./images/icp-guideline-overview.jpg"
      },
      {
        "title": "Solution Mapping & Messaging Brief",
        "subtitle": "Ánh xạ pain point sang giải pháp sản phẩm và messaging brief theo phân khúc",
        "url": "./images/icp-guideline-solution-mapping.jpg"
      },
      {
        "title": "Sơ đồ quy trình Campaign 4 bước",
        "subtitle": "Mục đích & Chuẩn bị → Truyền thông & Đào tạo → Triển khai & A/B Testing → Đo lường & Tối ưu.",
        "url": "./images/icp-process-overview.jpg",
        "wide": true
      },
      {
        "title": "Bảng tracking lead theo lĩnh vực",
        "subtitle": "Phân bổ lead theo lĩnh vực và các cấp L1 → L2 → L3. Số liệu lead là của cả team; phần của tôi là thiết lập và cập nhật file tracking này.",
        "url": "./images/icp-tracking-overview.jpg",
        "wide": true
      },
    ],
    "evidence": {
      "metrics": [
        {
          "label": "Phạm Vi Nghiên Cứu",
          "value": "8 Sub-industries"
        },
        {
          "label": "Quy Mô ICP",
          "value": "~28,000 Businesses (ICP 50–300)"
        },
        {
          "label": "Lead Form",
          "value": "Demo Form"
        }
      ],
      "toolsUsed": [
        "Google Sheets",
        "Data Tracking",
        "Guideline Documentation"
      ]
    }
  },
  {
    "id": "area-green-leadership",
    "title": "AREA Green Leadership 2025 — Vincom Retail",
    "company": "Vincom Retail",
    "category": "brand",
    "featured": false,
    "dateRange": "05/2025 – 06/2025",
    "galleryImages": [
      {
        "title": "Trang bìa hồ sơ AREA Green Leadership 2025",
        "subtitle": "Vincom Retail — The Nationwide Leader in Sustainable Shopping Experiences",
        "url": "./images/area-green-leadership-1.jpg"
      },
      {
        "title": "Slide \"Sustainable Growth & Continuity\"",
        "subtitle": "Một trong các slide nội dung của bộ hồ sơ",
        "url": "./images/area-green-leadership-2.jpg"
      }
    ],
    "evidence": {
      "metrics": [
        {
          "label": "Hạng mục",
          "value": "Green Leadership"
        },
        {
          "label": "Kết quả",
          "value": "Vincom Retail đạt giải · 06/2025"
        },
        {
          "label": "Sản phẩm của tôi",
          "value": "Presentation Deck"
        }
      ],
      "toolsUsed": [
        "PowerPoint",
        "Canva"
      ]
    }
  },
  {
    "id": "seasonal-campaign-operations",
    "title": "Seasonal Campaign & Owned Media Operations — Vincom Retail",
    "company": "Vincom Retail",
    "category": "brand",
    "featured": false,
    "dateRange": "01/2025 – 01/2026",
    "galleryImages": [
      {
        "title": "Iconic Runway of Hanoi — Vincom Center Bà Triệu",
        "subtitle": "08/12/2025 — Owned Media Facebook",
        "url": "./images/seasonal-social-2.jpg"
      },
      {
        "title": "Chuyển phát \"Thư Deal\" mùa lễ hội",
        "subtitle": "15/12/2025 — Owned Media Facebook",
        "url": "./images/seasonal-social-5.jpg"
      },
      {
        "title": "Năm mới đi mall — Vui hết cỡ cùng Vincom",
        "subtitle": "03/01/2026 — Owned Media Facebook",
        "url": "./images/seasonal-social-4.jpg"
      },
      {
        "title": "Website / Promotion Listing — Mango End of Season Sale",
        "subtitle": "Thẻ ưu đãi trên website Vincom.",
        "url": "./images/seasonal-website-mango.jpg"
      },
      {
        "title": "Website / Promotion Listing — Parfois Sale",
        "subtitle": "Thẻ ưu đãi trên website Vincom.",
        "url": "./images/seasonal-website-parfois.jpg"
      },
      {
        "title": "Zalo OA — Black Friday Member Offer",
        "subtitle": "Tin ưu đãi thành viên trên Zalo OA. Đã ẩn thông tin cá nhân.",
        "url": "./images/seasonal-zalo-oa-vinclub.jpg"
      },
      {
        "title": "MyVincom / App Content — New Year 2026",
        "subtitle": "Nội dung và thông báo đẩy trên app MyVincom.",
        "url": "./images/seasonal-myvincom-newyear.jpg"
      },
      {
        "title": "Hướng dẫn Gian hàng trang trí Giáng Sinh Vincom 2025",
        "subtitle": "Trang bìa tài liệu seasonal guideline cho tenant",
        "url": "./images/seasonal-xmas-guideline-cover.jpg"
      },
      {
        "title": "Hướng dẫn trang trí theo ngành hàng — Mỹ phẩm",
        "subtitle": "Một trang trong tài liệu seasonal guideline",
        "url": "./images/seasonal-xmas-guideline-category.jpg"
      }
    ],
    "evidence": {
      "metrics": [
        {
          "label": "Kênh Vận Hành",
          "value": "Facebook · Zalo OA · Website · App"
        },
        {
          "label": "Quy Trình",
          "value": "Content Calendar · Contractor Briefing"
        },
        {
          "label": "Tenant Enablement",
          "value": "Seasonal Decoration Guidelines"
        }
      ],
      "toolsUsed": [
        "Excel Calendar",
        "Vincom CMS",
        "App Push Notification",
        "Meta Business Suite",
        "Tenant Guidelines"
      ],
      "tenantEnablementSection": {
        "title": "HỖ TRỢ GIAN HÀNG (TENANT ENABLEMENT)",
        "intro": "Bên cạnh vận hành nội dung trên các kênh Owned Media, tôi cũng tham gia xây dựng tài liệu hướng dẫn dành cho gian hàng trong mùa Giáng Sinh 2025, nhằm giúp các tenant có một khung tham chiếu chung khi triển khai trang trí nhưng vẫn giữ được đặc trưng thương hiệu riêng.",
        "cards": [
          {
            "step": "COMMON PRINCIPLES",
            "title": "Nguyên tắc chung",
            "subtitle": "Đồng bộ không khí TTTM",
            "description": "Hướng dẫn về vị trí, chủ đề, màu sắc, chất liệu, mật độ và hình ảnh để tạo không khí mùa lễ hội đồng bộ trong TTTM."
          },
          {
            "step": "CATEGORY GUIDANCE",
            "title": "Hướng dẫn theo ngành hàng",
            "subtitle": "Phân nhóm đặc thù",
            "description": "Phân nhóm gợi ý triển khai theo các ngành hàng như thời trang/phụ kiện, mỹ phẩm, F&B, vui chơi giải trí và siêu thị/nhà sách/lưu niệm."
          },
          {
            "step": "TENANT FLEXIBILITY",
            "title": "Linh hoạt theo thương hiệu",
            "subtitle": "Khung tham chiếu mở",
            "description": "Tạo khung tham chiếu chung nhưng vẫn cho phép gian hàng điều chỉnh cách triển khai theo nhận diện và đặc thù không gian của từng thương hiệu."
          }
        ]
      }
    }
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    "period": "04/2026 – Hiện tại",
    "role": "Product Marketing & AI Intern",
    "company": "1Office",
    "type": "Product Marketing · Content · Research · Operations",
    "description": "Tại 1Office, công việc của tôi mở rộng từ content sang các bài toán B2B gắn với product và AI, gồm funnel, landing page, nurture, chatbot và ICP. Tôi đề xuất, so sánh hai phương án quảng cáo cho 3 ebook B2B, đồng thời phụ trách nội dung funnel và triển khai các landing page liên quan.\n\nTôi cũng xây dựng prompt và luồng hội thoại cho chatbot 1AI trên website, tham gia AI Readiness từ survey đến report và bàn giao, đồng thời hỗ trợ ICP Scoring đưa vào sử dụng từ 07/2026. Qua đó, tôi có nhiều kinh nghiệm hơn trong việc kết nối content với product, dữ liệu khách hàng và các bài toán tăng trưởng B2B.",
    "achievements": [],
    "skills": [
      "B2B Content",
      "SEO",
      "ICP Scoring",
      "AI Readiness",
      "AI Chatbot / Prompt Design",
      "Multichannel Marketing",
      "ABM Email"
    ]
  },
  {
    "period": "01/2025 – 01/2026",
    "role": "Marketing Intern",
    "company": "Vincom Retail",
    "type": "Integrated Campaign · Owned Media · Operations",
    "description": "Tại Vincom Retail, tôi phụ trách xuyên suốt nhiều phần việc của một chiến dịch, từ xây dựng kế hoạch, phát triển nội dung đến theo dõi hiệu quả và đề xuất điều chỉnh cho các hoạt động tiếp theo. Tôi trực tiếp phối hợp với nhiều TTTM, gian hàng và nhà thầu để đảm bảo kế hoạch được triển khai đúng tiến độ và các bên nắm rõ phần việc của mình.\n\nBên cạnh khâu triển khai, tôi theo dõi các chỉ số của owned media sau mỗi chiến dịch, tổng hợp và báo cáo kết quả, từ đó xác định những nội dung và cách triển khai cần tiếp tục hoặc thay đổi. Điều tôi học được rõ nhất ở giai đoạn này là vận hành owned media dựa trên dữ liệu thực tế: theo dõi số liệu rồi điều chỉnh nội dung cho kỳ sau.",
    "achievements": [],
    "skills": [
      "Brand Storytelling",
      "Make.com Automation",
      "Campaign Tracking",
      "Presentation Deck",
      "Content Operations"
    ]
  },
  {
    "period": "05/2024 – 07/2024",
    "role": "Content & Digital Marketing Intern",
    "company": "Almond Việt Nam",
    "type": "Digital Marketing & Market Research",
    "description": "Market research và digital content testing trong ngành hàng FMCG.",
    "achievements": [
      "Nghiên cứu nhu cầu thị trường và đối thủ cạnh tranh FMCG.",
      "Sáng tạo nội dung thử nghiệm cho Facebook Ads."
    ],
    "skills": [
      "Market Research",
      "Facebook Copywriting",
      "Content Testing",
      "Visual Briefing"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    "title": "Brand / Marketing Strategy",
    "skills": [
      {
        "name": "Brand Storytelling & Positioning",
        "level": "Brand Strategy"
      },
      {
        "name": "Integrated Campaign Planning",
        "level": "Campaign Design"
      },
      {
        "name": "Content Roadmap & Editorial Calendar",
        "level": "Content Strategy"
      },
      {
        "name": "ESG Communication Support",
        "level": "Corporate Comms"
      },
      {
        "name": "Proposal Writing & Deck Design",
        "level": "Presentation"
      }
    ]
  },
  {
    "title": "Growth / Product Marketing",
    "skills": [
      {
        "name": "B2B Content & Multichannel Campaigns",
        "level": "Content Marketing"
      },
      {
        "name": "On-page SEO & Content Audit",
        "level": "SEO Content"
      },
      {
        "name": "ICP Guideline & Data Tracking",
        "level": "Growth Research"
      },
      {
        "name": "ABM Email Copywriting",
        "level": "Outbound Comms"
      },
      {
        "name": "Landing Page Implementation Support",
        "level": "Web Operations"
      }
    ]
  },
  {
    "title": "Data / AI / Automation",
    "skills": [
      {
        "name": "Make.com Workflow Automation",
        "level": "Workflow Automation"
      },
      {
        "name": "Campaign Performance Tracking",
        "level": "Performance Tracking"
      },
      {
        "name": "UX & Report Visualization",
        "level": "Design Handoff"
      },
      {
        "name": "AI Prompting & Structured Copy",
        "level": "AI Prompting"
      },
      {
        "name": "Google Sheets & Data Organization",
        "level": "Data Management"
      }
    ]
  }
];
