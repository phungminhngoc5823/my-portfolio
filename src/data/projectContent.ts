export interface ProjectContentSection {
  kicker?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  flow?: string[];
}

export interface ProjectContent {
  displayTitle: string;
  categoryLine: string;
  cardSummary: string;
  contributionLine: string;
  evidenceLabel: string;
  evidenceValue: string;
  overview: string;
  context: string[];
  contributionBullets: string[];
  challengeTitle: string;
  challenge: string[];
  sections: ProjectContentSection[];
  closingTitle: string;
  closing: string[];
  scopeNote?: string;
}

export const PROJECT_ORDER = [
  'make-automation',
  'v-creator',
  'seo-content-ads',
  'dream-christmas-delivery',
  'ai-readiness',
  'seasonal-campaign-operations',
  'vincom-tiktok-production',
  'icp-lead-scoring',
  'area-green-leadership',
] as const;

export type ProjectId = typeof PROJECT_ORDER[number];

export const PROJECT_CONTENT: Record<ProjectId, ProjectContent> = {
  'make-automation': {
      "displayTitle": "Marketing Automation cho Vincom Owned Media",
      "categoryLine": "MarTech · Workflow Design · Execution Efficiency",
      "cardSummary": "Thời gian xử lý mỗi bài giảm từ khoảng nửa ngày xuống 15–30 phút.",
      "contributionLine": "Caption adaptation · Publish/Edit workflow · Comment workflow",
      "evidenceLabel": "DIRECT DEPLOYMENT",
      "evidenceValue": "91 Fanpages · 15–30 phút/bài",
      "overview": "Kết quả: thời gian xử lý mỗi bài giảm từ khoảng nửa ngày xuống 15–30 phút.",
      "context": [
          "Vấn đề: cùng một thông tin cần đăng tải / chỉnh sửa lặp lại trên 91 fanpage của Vincom."
      ],
      "contributionBullets": [
          "Luồng tạo 3 phiên bản caption cho Facebook, Zalo OA và TikTok từ nội dung có sẵn.",
          "Luồng tự động đăng và sửa bài, bao gồm đăng theo order.",
          "Luồng tự động bình luận đồng bộ."
      ],
      "challengeTitle": "",
      "challenge": [],
      "sections": [
          {
              "kicker": "Đã đưa vào sử dụng",
              "title": "Multi-channel Content Workflow",
              "paragraphs": [
                  "Luồng tạo 3 phiên bản caption cho Facebook, Zalo OA (Official Account) và TikTok từ nội dung có sẵn."
              ]
          },
          {
              "kicker": "Đã đưa vào sử dụng",
              "title": "Đăng bài theo order",
              "paragraphs": [
                  "Luồng tự động đăng và sửa bài, bao gồm đăng theo order."
              ]
          },
          {
              "kicker": "Đã đưa vào sử dụng",
              "title": "Editing & Top Comment",
              "paragraphs": [
                  "Luồng tự động bình luận đồng bộ."
              ]
          },
          {
              "kicker": "Đang thử nghiệm",
              "title": "Ban quản lý và khách thuê",
              "bullets": [
                  "Luồng tự động đăng, sửa bài và bình luận cho Ban quản lý và khách thuê trên Facebook và TikTok."
              ]
          }
      ],
      "closingTitle": "Phạm vi & đóng góp",
      "closing": [
          "Các workflow bao phủ tác vụ tạo caption, đăng, sửa bài và bình luận; không phải toàn bộ hoạt động Social Media của Vincom được tự động hóa."
      ]
  },

  'v-creator': {
      "displayTitle": "Vincom V-Creator: vòng lặp báo cáo hàng tháng",
      "categoryLine": "Creator Program · Tracking & Optimization · Content Review · Training Support",
      "cardSummary": "Vincom V-Creator là chương trình thúc đẩy các TTTM và các gian hàng sáng tạo, lan tỏa nội dung video trên Facebook/TikTok.",
      "contributionLine": "Performance tracking · Content analysis · Reporting · Training support",
      "evidenceLabel": "PROGRAM SCALE",
      "evidenceValue": "2.4B+ Views · 40,000+ Videos",
      "overview": "Vincom V-Creator là chương trình thúc đẩy các TTTM và các gian hàng sáng tạo, lan tỏa nội dung video trên Facebook/TikTok, xoay quanh sản phẩm / dịch vụ, chương trình khuyến mãi và trải nghiệm tại hệ thống Vincom. Tiến độ và hiệu quả triển khai cần được theo dõi và hỗ trợ đúng chỗ.",
      "context": [],
      "contributionBullets": [
          "Vai trò chính: theo dõi hiệu suất, phân tích nội dung và báo cáo hàng tháng. Tôi phụ trách chính phần báo cáo từ 09/2025, trước đó ở vai trò hỗ trợ.",
          "Thử nghiệm một số công cụ tracking trên Apify để theo dõi số lượng video và lượt xem.",
          "Phần việc phụ: hỗ trợ training hàng tháng cho TTTM và gian hàng bằng guideline, ví dụ và các nội dung cần lưu ý."
      ],
      "challengeTitle": "",
      "challenge": [],
      "sections": [
          {
              "kicker": "Vòng lặp",
              "title": "Theo dõi",
              "paragraphs": [
                  "Số lượng video, lượt xem và tiến độ KPI của từng TTTM."
              ]
          },
          {
              "kicker": "Vòng lặp",
              "title": "Nhận định",
              "paragraphs": [
                  "Báo cáo tháng tổng hợp view theo tháng và lũy kế, mức hoàn thành KPI của TTTM/KPTM (khu phố thương mại), clip triệu view, video nổi bật, phân bổ tuyến nội dung, nhận xét và kế hoạch hành động."
              ]
          },
          {
              "kicker": "Vòng lặp",
              "title": "Hành động",
              "paragraphs": [
                  "Xếp từng TTTM/KPTM theo tỷ lệ hoàn thành KPI để biết nhóm nào cần ưu tiên hỗ trợ hoặc đào tạo lại, thay vì đưa cùng một khuyến nghị cho tất cả."
              ]
          },
          {
              "kicker": "Vòng lặp",
              "title": "Đưa vào training",
              "paragraphs": [
                  "Mỗi kỳ, nội dung training thay đổi để xử lý các vấn đề của kỳ trước và bóc tách kinh nghiệm từ những video thành công, nhờ đó báo cáo và training vận hành cùng một nhịp."
              ]
          }
      ],
      "closingTitle": "Phạm vi & đóng góp",
      "closing": [
          "2.4B+ lượt xem và 40.000+ video là kết quả của cả chương trình V-Creator. Phần tôi đảm nhận là theo dõi, báo cáo hàng tháng và hỗ trợ training."
      ]
  },

  'seo-content-ads': {
    displayTitle: 'B2B Content Funnel: từ quảng cáo đến lead',
    categoryLine: 'Content Funnel · Landing Page · Email Nurture · SEO',
    cardSummary: 'Tại 1Office, tôi tham gia triển khai ba chiến dịch ebook B2B. Thay vì nhìn social, landing page và email như những asset tách rời, tôi cố gắng giữ một mạch thông điệp xuyên suốt hành trình của người đọc.',
    contributionLine: '3 Ebook Campaigns · Social acquisition · Confirmation email · ABM nurture · Landing pages · SEO',
    evidenceLabel: 'PER EBOOK CONTENT SYSTEM',
    evidenceValue: '2 FB Ads · 1 Zalo · 1 LinkedIn · 1 Confirmation · 3–6 ABM Emails',
    overview: 'Team Marketing sản xuất 1 ebook mỗi tháng xoay quanh các vấn đề về quản trị nhân sự, quản trị công việc/dự án và quản trị quan hệ khách hàng, nhằm thu về các lead phù hợp với ICP. 4 ebook đã và đang trong quá trình triển khai bao gồm:',
    context: ['Các ebook với nhiều chủ đề khác nhau cần thu về lead phù hợp từ doanh nghiệp quy mô 50–300 nhân sự.',
      '4 ebook của 1Office nhắm đến doanh nghiệp quy mô 50–300 nhân sự, với các chủ đề (tôi phụ trách từ ebook 02 đến ebook 04):',
      '• Xây dựng nền tảng dữ liệu – Tối ưu quản trị nhân sự thời AI',
      '• Kiểm soát tiến độ và chi phí dự án xây dựng (Ngành Xây dựng – Thi công)',
      '• Workforce Management Playbook – Quản trị nhân sự nhà máy (Ngành Sản xuất)',
      '• Rà soát tuân thủ Luật Lao động 2026',
      'Trong đó, chủ đề ebook Luật Lao động được lựa chọn vì HRM (quản trị nhân sự) hiện đang là module bán chạy nhất của 1Office, đồng thời một số quy định lao động cũng đã được thay đổi trong năm 2026 – gây ra rủi ro về mặt pháp lý. Ebook 05 đang được chuẩn bị, với chủ đề kiểm soát công – ca – lương, do mùa cao điểm đang đến.'],
    contributionBullets: ['Viết nội dung shortform cho toàn bộ funnel của 3 ebook (ebook 02–04): Facebook Ads, LinkedIn, Zalo, email xác nhận và ABM Email.',
      'Phụ trách 3 landing page ebook và landing page B2B của 1Office (1office.vn/dich-vu-b2b).',
      'Viết mới / audit và onpage SEO theo plan của team.'],
    challengeTitle: 'The content challenge',
    challenge: [
      'Mỗi channel đảm nhận một vai trò khác nhau trong funnel: Facebook tạo attention, LinkedIn contextualize vấn đề theo góc nhìn B2B, Zalo truyền tải proposition ngắn gọn, Confirmation Email nối conversion với nurture, còn ABM Email phát triển narrative sau khi lead đã được thu về.',
      'Bài toán là giữ một proposition nhất quán nhưng không biến toàn bộ funnel thành những phiên bản copy-paste của cùng một message.'
    ],
    sections: [
      {
        kicker: '01 — Acquisition',
        title: 'Facebook Ads: nhiều angle cho cùng một ebook',
        paragraphs: ['Mỗi ebook được triển khai với 2 Facebook Ads sử dụng các angle khác nhau. Ví dụ với ebook Xây dựng – Thiết kế – Thi công, một angle khai thác margin & cost control, angle còn lại tập trung vào approval & P&L visibility.']
      },
      {
        kicker: '02 — Channel Adaptation',
        title: 'Same proposition → different channel context',
        paragraphs: ['Mỗi ebook có một phiên bản LinkedIn riêng theo góc nhìn B2B/decision-maker và một phiên bản Zalo ngắn, trực tiếp hơn. Mục tiêu là điều chỉnh cách diễn đạt theo bối cảnh kênh thay vì sao chép nguyên nội dung.']
      },
      {
        kicker: '03 — Conversion',
        title: 'Ebook Landing Pages & B2B service landing page',
        paragraphs: ['Tôi phụ trách Landing Page quảng bá cho cả ba ebook, chuyển proposition từ short-form acquisition content thành một trang đủ thông tin để người dùng quyết định đăng ký.', 'Bên cạnh đó, tôi xây dựng Landing Page riêng cho nhóm ngành B2B tại 1office.vn/dich-vu-b2b, trong đó có ROI Calculator như một phần của trải nghiệm trang.']
      },
      {
        kicker: '04 — Registration Transition',
        title: 'Confirmation Email',
        paragraphs: ['Với mỗi ebook, tôi xây dựng email xác nhận sau khi người dùng hoàn tất form đăng ký. Email xác nhận hành động, cung cấp/hướng dẫn tiếp cận tài liệu, duy trì continuity của message sau Landing Page và tạo transition sang chuỗi nurture.']
      },
      {
        kicker: '05 — Lead Nurture',
        title: '3–6 ABM Emails / Ebook',
        paragraphs: ['Sau khi thu lead, cả 3 ebook đều tiếp tục bằng chuỗi 3–6 ABM Email do tôi trực tiếp xây dựng nội dung. Sequence phát triển từ problem awareness → pain-point deep dive → urgency/business implication → proof/case → self-assessment/educational value → solution framing.']
      },
      {
        kicker: '06 — Organic Content',
        title: '2–3 published SEO articles / day',
        paragraphs: ['Song song với 3 ebook campaign, tôi trực tiếp viết 2–3 bài SEO mỗi ngày theo các topic được phân công. Toàn bộ các bài tôi thực hiện trong workstream này đều đã được xuất bản; các bài hiển thị ở đây chỉ là một vài ví dụ trong số đó.']
      },
      {
        kicker: 'Content Funnel',
        title: 'Một hệ thống nội dung xuyên suốt hành trình',
        flow: ['Core Problem / Proposition', 'Facebook Ads · LinkedIn · Zalo', 'Landing Page', 'Confirmation Email', '3–6 ABM Emails', 'Continued B2B communication']
      }
    ],
    closingTitle: 'Điều tôi rút ra',
    closing: ['Sau khi chạy 3 ebook (ebook 04 vẫn đang chạy) và theo dõi qua số lượng lead, CPL (chi phí trên mỗi lead), L1 và L2 (từ trạng thái “Đang tư vấn” đến “Ký HĐ”), tôi rút ra rằng ảnh đơn, nội dung đánh vào vấn đề và dẫn về leadform / landing page hiệu quả hơn carousel, nội dung nói về kết quả và dẫn sang bài SEO. Đây là so sánh trong phạm vi các ebook đã chạy, không phải A/B test có ý nghĩa thống kê.']
  },

  'dream-christmas-delivery': {
      "displayTitle": "Dream Christmas Delivery: thiết kế trải nghiệm và điểm bàn giao",
      "categoryLine": "Customer Journey · Experience Strategy · Rollout Design",
      "cardSummary": "Dream Christmas Delivery là chương trình chuỗi phục vụ cho Chiến dịch Marketing mùa Giáng Sinh.",
      "contributionLine": "Customer Journey · Operating Flow · Training Script · Implementation Deck",
      "evidenceLabel": "PROJECT SCALE",
      "evidenceValue": "14 Locations · 18 Days",
      "overview": "Dream Christmas Delivery là chương trình chuỗi phục vụ cho Chiến dịch Marketing mùa Giáng Sinh - cần vận hành đồng bộ tại 14 trung tâm thương mại (TTTM) Vincom Mega Mall và Vincom Center trong 18 ngày, với nhiều phòng ban cùng phối hợp.",
      "context": [
          "Tài liệu hướng dẫn dùng cho cả 14 địa điểm, có bước đối chiếu ngay tại điểm PG (nhân viên gian hàng) bàn giao cho BQL (Ban quản lý) để hạn chế sai sót và trục lợi."
      ],
      "contributionBullets": [
          "Xây dựng hành trình khách hàng và quy trình vận hành, bao gồm các điểm bàn giao giữa những nhóm tham gia.",
          "Viết kịch bản training cho PG và các nhân sự liên quan.",
          "Thiết kế bộ tài liệu hướng dẫn triển khai (implementation deck) cho toàn bộ 14 địa điểm, chạy từ 06/12 đến 23/12."
      ],
      "challengeTitle": "",
      "challenge": [],
      "sections": [],
      "closingTitle": "Phạm vi & đóng góp",
      "closing": []
  },

  'ai-readiness': {
    displayTitle: 'AI Readiness Survey & Report Experience',
    categoryLine: 'Lead Generation · Survey Experience · Report Visualization · Multichannel Promotion',
    cardSummary: 'AI Readiness Survey là một assessment giúp doanh nghiệp tự đánh giá mức độ sẵn sàng ứng dụng AI, đồng thời là điểm chạm lead-generation cho 1Office.',
    contributionLine: 'Survey Visualization · Report Visualization · PTSP Handoff · Multichannel Promotion',
    evidenceLabel: 'EXPERIENCE SCOPE',
    evidenceValue: '4-Step Survey · 6 Capability Groups · Lead Generation',
    overview: 'AI Readiness Survey là một assessment giúp doanh nghiệp tự đánh giá mức độ sẵn sàng ứng dụng AI, đồng thời là điểm chạm lead-generation cho 1Office.',
    context: [
      'Trải nghiệm là một cuộc trao đổi giá trị: người dùng đi qua khảo sát 4 bước (thông tin doanh nghiệp → nền tảng số → đặc thù quy mô → rào cản & ưu tiên), rồi nhận lại report trực quan hóa theo 6 nhóm năng lực kèm biểu đồ radar và nhóm hành động ưu tiên. Tôi đảm nhận việc trực quan hóa flow khảo sát, tổ chức nội dung report thành các bước/screen dễ đọc, rồi bàn giao cho đội phát triển (PTSP) và hỗ trợ content quảng bá trên Facebook, LinkedIn, Zalo.',
      'Thay vì một lead form đơn thuần, campaign tạo value exchange: doanh nghiệp cung cấp thông tin về hiện trạng/mức độ sẵn sàng ứng dụng AI và nhận lại AI Readiness Report trực quan hóa kết quả cùng các nhóm hành động ưu tiên.',
      'Campaign được phân phối qua Facebook, LinkedIn và Zalo để đưa traffic tới AI Readiness Assessment.'
    ],
    contributionBullets: ['Trực quan hóa flow khảo sát và report; chuẩn bị output cho PTSP handoff.', 'Hỗ trợ content quảng bá đa kênh (Facebook, LinkedIn, Zalo).'],
    challengeTitle: 'The campaign & experience challenge',
    challenge: ['Campaign cần tạo đủ perceived value để doanh nghiệp sẵn sàng click vào assessment, hoàn thành khảo sát và cung cấp thông tin cần thiết.', 'Survey phải cân bằng giữa lượng thông tin cần thu và công sức người dùng phải bỏ ra; report phải đủ chi tiết nhưng vẫn giúp người xem nhanh chóng hiểu trạng thái hiện tại, nhóm năng lực cần chú ý và hành động ưu tiên.'],
    sections: [
      { kicker: '01 — Campaign Entry', title: 'Marketing touchpoint → Assessment Landing', paragraphs: ['Traffic từ Facebook, LinkedIn và Zalo được dẫn tới AI Readiness Assessment. Landing page giới thiệu giá trị của trải nghiệm trước khi người dùng bắt đầu survey.'] },
      { kicker: '02 — 4-Step Survey', title: 'Cấu trúc lượng thông tin thành flow dễ theo dõi', bullets: ['Thông tin doanh nghiệp', 'Nền tảng & năng lực số', 'Đặc thù theo quy mô', 'Rào cản & ưu tiên'] },
      { kicker: '03 — Readiness Overview', title: '6 capability groups & radar chart', paragraphs: ['Sau khi hoàn thành assessment, kết quả được tổ chức thành overview theo 6 nhóm năng lực. Radar chart tạo một snapshot trực quan để người xem so sánh tương đối trước khi đọc sâu.'] },
      { kicker: '04 — From Assessment to Action', title: 'Từ đánh giá sang hành động ưu tiên', flow: ['Assessment', 'Interpretation', 'Priority Actions'] },
      { kicker: 'Campaign Flow', title: 'Attract → Assess → Capture Lead → Deliver Value', flow: ['Facebook · LinkedIn · Zalo', 'AI Readiness Landing', '4-Step Assessment', 'Lead Acquisition', 'AI Readiness Report', 'Priority Actions'] }
    ],
    closingTitle: 'What this project demonstrates',
    closing: ['Tôi nhận thấy một góc nhìn mới về product marketing: giá trị của một campaign không chỉ ở việc thu hút người dùng, mà còn ở chính trải nghiệm và output họ nhận lại sau khi để lại thông tin.'],
    scopeNote: 'Tôi không trực tiếp xây dựng methodology, bộ câu hỏi hay scoring model của AI Readiness. Tôi tập trung vào survey visualization, report visualization, output cho PTSP handoff và content distribution. Mục tiêu lead generation thuộc về campaign tổng thể - không phải là kết quả cá nhân.'
  },

  'seasonal-campaign-operations': {
      "displayTitle": "Seasonal Campaign & Owned Media",
      "categoryLine": "Campaign Operations · Owned Media · Tenant Enablement",
      "cardSummary": "Xây dựng content calendar Facebook theo seasonal campaign, soạn brief và duyệt nội dung của nhà thầu, triển khai nội dung trên Web – App.",
      "contributionLine": "",
      "evidenceLabel": "CHANNEL SCOPE",
      "evidenceValue": "Facebook · Zalo OA · Website · MyVincom App",
      "overview": "Tôi tham gia xây dựng content calendar Facebook theo từng seasonal campaign, soạn brief cho nhà thầu và duyệt nội dung trước khi đăng, đồng thời trực tiếp triển khai nội dung trên Web – App (banner, thông tin sự kiện, ưu đãi, push notification) và tổng hợp số liệu báo cáo hàng tháng.",
      "context": [
          "Tôi tham gia xây dựng content calendar Facebook theo từng seasonal campaign, soạn brief cho nhà thầu và duyệt nội dung trước khi đăng, đồng thời trực tiếp triển khai nội dung trên Web – App (banner, thông tin sự kiện, ưu đãi, push notification) và tổng hợp số liệu báo cáo hàng tháng.",
          "Phần đáng giữ lại nhất là seasonal guideline cho tenant dịp Giáng Sinh 2025, do tôi tham gia xây dựng. Guideline đưa ra khung chung về vị trí, chủ đề, màu sắc và chất liệu, nhưng vẫn để từng thương hiệu điều chỉnh theo nhận diện và không gian riêng."
      ],
      "contributionBullets": [],
      "challengeTitle": "",
      "challenge": [],
      "sections": [],
      "closingTitle": "Phạm vi & đóng góp",
      "closing": []
  },

  'vincom-tiktok-production': {
      "displayTitle": "Vincom TikTok",
      "categoryLine": "Content Strategy · Script · Editing · Performance Review",
      "cardSummary": "Một format giống nhau không tạo ra cùng một phản ứng.",
      "contributionLine": "Idea · Script · Editing (dựng) · Quay: phối hợp với teammate · Performance Tracking",
      "evidenceLabel": "DIRECT OUTPUT — ORGANIC",
      "evidenceValue": "6 Videos · 241K+ Views · Highest: 225.1K",
      "overview": "Một format giống nhau không tạo ra cùng một phản ứng.",
      "context": [
          "Nội dung cần được triển khai trong thời gian tương đối ngắn (1-2 ngày) để bù đắp vào khoảng trống nội dung do tạm thời chưa có nhà thầu phụ trách, nhưng vẫn phải khai thác được góc độ phù hợp, truyền tải các điểm mạnh của tenant và giữ được tone, hình ảnh thương hiệu Vincom."
      ],
      "contributionBullets": [
          "Lên ý tưởng cho các video ngắn về trải nghiệm tại TTTM.",
          "Viết kịch bản và dựng sáu video trên TikTok chính thức của Vincom.",
          "Phối hợp với một teammate quay hình theo kịch bản đã thống nhất.",
          "Theo dõi lượt xem của từng video sau khi đăng."
      ],
      "challengeTitle": "",
      "challenge": [],
      "sections": [],
      "closingTitle": "Phạm vi & đóng góp",
      "closing": [
          "241K+ là tổng lượt xem của 6 video tôi trực tiếp thực hiện, không đại diện cho cả kênh TikTok Vincom."
      ]
  },

  'icp-lead-scoring': {
    displayTitle: 'ICP Scoring & Tracking Support',
    categoryLine: 'Audience Research · Data Structuring · Marketing Operations',
    cardSummary: 'Khi thông tin ICP, dữ liệu research và tracking nằm rải rác ở nhiều nguồn khác nhau, đội ngũ rất khó dùng chung một definition hay theo dõi lead nhất quán.',
    contributionLine: 'ICP Guideline · Research Structuring · Tracking File · Scoring-update Support · Demo Lead Form',
    evidenceLabel: 'RESEARCH SCOPE',
    evidenceValue: '8 Sub-industries · ~28,000 Businesses',
    overview: 'Khi thông tin ICP, dữ liệu research và tracking nằm rải rác ở nhiều nguồn khác nhau, đội ngũ rất khó dùng chung một definition hay theo dõi lead nhất quán.',
    context: ['Công việc của tôi là xây dựng guideline tài nguyên ICP cho nhóm 50–300 nhân sự (Growth Engine), cấu trúc research theo 8 sub-industries trong universe khoảng 28.000 doanh nghiệp, và tham gia mapping pain point sang giải pháp/messaging brief. Song song, tôi thiết lập và cập nhật tracking file theo các cấp L1 → L2 → L3, hỗ trợ cập nhật công thức ICP Scoring, và xây dựng một demo lead form để thử nghiệm cách dữ liệu đầu vào có thể đi vào tracking/scoring.',
      'ICP Scoring được hoàn thiện và thử nghiệm trong 05–06/2026, rồi đi vào sử dụng chính thức từ 07/2026.'],
    contributionBullets: ['Xây dựng guideline & tổng hợp tài nguyên ICP 50–300.', 'Cấu trúc research theo ngành/sub-industry; mapping pain point → solution → messaging.', 'Thiết lập/cập nhật tracking file; hỗ trợ cập nhật công thức ICP Scoring.', 'Xây dựng demo lead form thử nghiệm.'],
    challengeTitle: 'The problem',
    challenge: ['Khi thông tin ICP, research và tracking data nằm ở nhiều nguồn khác nhau, đội ngũ khó dùng cùng definition, cập nhật thông tin, theo dõi lead nhất quán và kết nối research với communication/scoring.', 'Phần việc của tôi tập trung tạo một lớp structure giữa research, tracking và activation.'],
    sections: [
      { kicker: '01 — ICP Research & Guideline', title: 'Structured ICP resource', paragraphs: ['Tổng hợp ngành mục tiêu, sub-industry, quy mô thị trường, pain point và input phục vụ communication trong phạm vi ICP 50–300.'] },
      { kicker: '02 — Solution Mapping', title: 'Pain point → solution → messaging', paragraphs: ['Tham gia mapping pain point với nhóm giải pháp, use case và messaging brief để research có thể trở thành input cho communication.'] },
      { kicker: '03 — Campaign Process', title: 'Một process tham chiếu', flow: ['Mục đích & Chuẩn bị', 'Truyền thông & Đào tạo', 'Triển khai & A/B Testing', 'Đo lường & Tối ưu'] },
      { kicker: '04 — Tracking Structure', title: 'Theo dõi theo lĩnh vực, ICP và lead level', paragraphs: ['Thiết lập/cập nhật tracking file để dữ liệu có thể được breakdown theo ngành, nhóm ICP và các cấp độ L1 → L2 → L3.'] },
      { kicker: '05 — Scoring Support', title: 'Hỗ trợ cập nhật scoring logic', paragraphs: ['Tôi hỗ trợ cập nhật công thức ICP Scoring dựa trên structure và dữ liệu đang dùng, không sở hữu toàn bộ scoring model.'] },
      { kicker: '06 — Demo Lead Form', title: 'Input experiment', paragraphs: ['Xây dựng demo lead form để thử nghiệm cách thu thập input và minh họa cách dữ liệu từ lead có thể đi vào tracking/scoring.'] },
      { kicker: 'From Research to Growth Operations', title: 'Research → structure → activation', flow: ['Market / ICP Research', 'Pain-point & Solution Mapping', 'Guideline', 'Lead Input', 'Tracking', 'Scoring Support'] }
    ],
    closingTitle: 'What this project demonstrates',
    closing: ['Điều tôi thấy giá trị nhất ở workstream này là: research chỉ thực sự hữu ích khi nó đi tiếp được thành segment, messaging và cách ưu tiên xử lý mà team có thể dùng ngay trong công việc, thay vì dừng ở một file tổng hợp thị trường.'],
    scopeNote: '~28.000 doanh nghiệp là quy mô thị trường trong phạm vi research, không phải số doanh nghiệp tôi trực tiếp tiếp cận hoặc chuyển đổi. Vai trò của tôi trong ICP Scoring là support, không phải ownership toàn bộ methodology.'
  },

  'area-green-leadership': {
      "displayTitle": "AREA Green Leadership 2025",
      "categoryLine": "ESG Content · Presentation",
      "cardSummary": "Viết nội dung và thiết kế presentation deck cho hồ sơ AREA Green Leadership 2025 của Vincom Retail.",
      "contributionLine": "",
      "evidenceLabel": "GIẢI THƯỞNG (VINCOM RETAIL)",
      "evidenceValue": "Green Leadership · AREA 2025",
      "overview": "Tôi tham gia viết nội dung và thiết kế presentation deck cho hồ sơ AREA Green Leadership 2025 của Vincom Retail, xoay quanh ba nhóm nội dung: Sustainable Operations, Stakeholder Engagement và tầm nhìn dài hạn.",
      "context": [
          "Tôi tham gia viết nội dung và thiết kế presentation deck cho hồ sơ AREA Green Leadership 2025 của Vincom Retail, xoay quanh ba nhóm nội dung: Sustainable Operations, Stakeholder Engagement và tầm nhìn dài hạn. Mục tiêu là hệ thống hóa các initiative sẵn có thành một narrative rõ ràng, thay vì tạo thêm một câu chuyện xanh tách rời hoạt động thực tế."
      ],
      "contributionBullets": [],
      "challengeTitle": "",
      "challenge": [],
      "sections": [],
      "closingTitle": "Phạm vi & đóng góp",
      "closing": [
          "Giải Green Leadership (06/2025) là thành tích của Vincom Retail; phần của tôi là nội dung và deck của hồ sơ dự thi."
      ]
  }
};


export const FLAGSHIP_PROJECT_IDS = PROJECT_ORDER.slice(0, 3);
export const SUPPORTING_PROJECT_IDS = PROJECT_ORDER.slice(3);

export const getProjectContent = (projectId: string): ProjectContent => {
  const content = PROJECT_CONTENT[projectId];
  if (!content) throw new Error(`Missing project content for: ${projectId}`);
  return content;
};


// Concise editorial layer used only on the long-scroll Selected Work page.
// Full project detail remains in PROJECT_CONTENT for modal/deep-read views.
export interface FeaturedProjectContent {
  overview: string;
  context: string[];
  contributionBullets: string[];
  sections?: ProjectContentSection[];
  scopeSummary?: string;
}

export const FEATURED_PROJECT_CONTENT: Partial<Record<ProjectId, FeaturedProjectContent>> = {
  'make-automation': {
      "overview": "Kết quả: thời gian xử lý mỗi bài giảm từ khoảng nửa ngày xuống 15–30 phút.",
      "context": [
          "Vấn đề: cùng một thông tin cần đăng tải / chỉnh sửa lặp lại trên 91 fanpage của Vincom."
      ],
      "contributionBullets": [
          "Luồng tạo 3 phiên bản caption cho Facebook, Zalo OA và TikTok từ nội dung có sẵn.",
          "Luồng tự động đăng và sửa bài, bao gồm đăng theo order.",
          "Luồng tự động bình luận đồng bộ."
      ],
      "sections": [
          {
              "kicker": "Đã đưa vào sử dụng",
              "title": "Multi-channel Content Workflow",
              "paragraphs": [
                  "Luồng tạo 3 phiên bản caption cho Facebook, Zalo OA (Official Account) và TikTok từ nội dung có sẵn."
              ]
          },
          {
              "kicker": "Đã đưa vào sử dụng",
              "title": "Đăng bài theo order",
              "paragraphs": [
                  "Luồng tự động đăng và sửa bài, bao gồm đăng theo order."
              ]
          },
          {
              "kicker": "Đã đưa vào sử dụng",
              "title": "Editing & Top Comment",
              "paragraphs": [
                  "Luồng tự động bình luận đồng bộ."
              ]
          },
          {
              "kicker": "Đang thử nghiệm",
              "title": "Ban quản lý và khách thuê",
              "bullets": [
                  "Luồng tự động đăng, sửa bài và bình luận cho Ban quản lý và khách thuê trên Facebook và TikTok."
              ]
          }
      ]
  },
  'v-creator': {
      "overview": "Vincom V-Creator là chương trình thúc đẩy các TTTM và các gian hàng sáng tạo, lan tỏa nội dung video trên Facebook/TikTok, xoay quanh sản phẩm / dịch vụ, chương trình khuyến mãi và trải nghiệm tại hệ thống Vincom. Tiến độ và hiệu quả triển khai cần được theo dõi và hỗ trợ đúng chỗ.",
      "context": [],
      "contributionBullets": [
          "Vai trò chính: theo dõi hiệu suất, phân tích nội dung và báo cáo hàng tháng. Tôi phụ trách chính phần báo cáo từ 09/2025, trước đó ở vai trò hỗ trợ.",
          "Thử nghiệm một số công cụ tracking trên Apify để theo dõi số lượng video và lượt xem.",
          "Phần việc phụ: hỗ trợ training hàng tháng cho TTTM và gian hàng bằng guideline, ví dụ và các nội dung cần lưu ý."
      ],
      "sections": [
          {
              "kicker": "Vòng lặp",
              "title": "Theo dõi",
              "paragraphs": [
                  "Số lượng video, lượt xem và tiến độ KPI của từng TTTM."
              ]
          },
          {
              "kicker": "Vòng lặp",
              "title": "Nhận định",
              "paragraphs": [
                  "Báo cáo tháng tổng hợp view theo tháng và lũy kế, mức hoàn thành KPI của TTTM/KPTM (khu phố thương mại), clip triệu view, video nổi bật, phân bổ tuyến nội dung, nhận xét và kế hoạch hành động."
              ]
          },
          {
              "kicker": "Vòng lặp",
              "title": "Hành động",
              "paragraphs": [
                  "Xếp từng TTTM/KPTM theo tỷ lệ hoàn thành KPI để biết nhóm nào cần ưu tiên hỗ trợ hoặc đào tạo lại, thay vì đưa cùng một khuyến nghị cho tất cả."
              ]
          },
          {
              "kicker": "Vòng lặp",
              "title": "Đưa vào training",
              "paragraphs": [
                  "Mỗi kỳ, nội dung training thay đổi để xử lý các vấn đề của kỳ trước và bóc tách kinh nghiệm từ những video thành công, nhờ đó báo cáo và training vận hành cùng một nhịp."
              ]
          }
      ]
  },
  'seo-content-ads': {
    overview: 'Team Marketing sản xuất 1 ebook mỗi tháng xoay quanh các vấn đề về quản trị nhân sự, quản trị công việc/dự án và quản trị quan hệ khách hàng, nhằm thu về các lead phù hợp với ICP. 4 ebook đã và đang trong quá trình triển khai bao gồm:',
    context: ['Các ebook với nhiều chủ đề khác nhau cần thu về lead phù hợp từ doanh nghiệp quy mô 50–300 nhân sự.',
      '4 ebook của 1Office nhắm đến doanh nghiệp quy mô 50–300 nhân sự, với các chủ đề (tôi phụ trách từ ebook 02 đến ebook 04):',
      '• Xây dựng nền tảng dữ liệu – Tối ưu quản trị nhân sự thời AI',
      '• Kiểm soát tiến độ và chi phí dự án xây dựng (Ngành Xây dựng – Thi công)',
      '• Workforce Management Playbook – Quản trị nhân sự nhà máy (Ngành Sản xuất)',
      '• Rà soát tuân thủ Luật Lao động 2026',
      'Trong đó, chủ đề ebook Luật Lao động được lựa chọn vì HRM (quản trị nhân sự) hiện đang là module bán chạy nhất của 1Office, đồng thời một số quy định lao động cũng đã được thay đổi trong năm 2026 – gây ra rủi ro về mặt pháp lý. Ebook 05 đang được chuẩn bị, với chủ đề kiểm soát công – ca – lương, do mùa cao điểm đang đến.'],
    contributionBullets: ['Viết nội dung shortform cho toàn bộ funnel của 3 ebook (ebook 02–04): Facebook Ads, LinkedIn, Zalo, email xác nhận và ABM Email.',
      'Phụ trách 3 landing page ebook và landing page B2B của 1Office (1office.vn/dich-vu-b2b).',
      'Viết mới / audit và onpage SEO theo plan của team.'],
    sections: [
      { kicker: '01 — Touchpoints', title: 'Cùng một thông điệp, nhưng mỗi touchpoint có một nhiệm vụ khác nhau', paragraphs: ['Social, landing page, email và SEO cùng nằm trong một hành trình, nhưng mỗi điểm chạm cần làm một việc khác nhau để người đọc có lý do tiếp tục tương tác.'] },
      { kicker: '02 — Landing Page', title: 'Social cần thu hút sự chú ý; landing page cần trở thành lý do để hành động', paragraphs: ['Ở social, tôi thường bắt đầu từ tension hoặc pain point gần với công việc hàng ngày của nhóm mục tiêu. Khi sang landing page, copy phải cụ thể hơn: người đọc nhận được gì, tài liệu này khác gì với một bài blog thông thường, và CTA nên xuất hiện ở đâu để không phá mạch đọc.'] },
      { kicker: '03 — Nurture', title: 'Email nurture phải biến câu chuyện trở nên sâu sắc hơn', paragraphs: ['Confirmation email và ABM sequence được triển khai để giữ mạch sau lần tải đầu tiên. Thay vì lặp lại toàn bộ nội dung tài liệu, tôi viết theo hướng tiếp tục vấn đề: hệ quả, cách tiếp cận và các tình huống người đọc có thể gặp trong thực tế.'] },
      { kicker: '04 — SEO', title: 'SEO cho tôi một góc nhìn khác về nhu cầu', paragraphs: ['Song song với các ebook, tôi viết 2-3 bài SEO mỗi ngày theo topic được phân công và thực hiện onpage. Nếu campaign content thường bắt đầu từ thông điệp mình muốn đưa ra, SEO buộc tôi nhìn nhiều hơn vào intent đã tồn tại: người dùng đang chủ động tìm gì và nội dung cần trả lời câu hỏi đó như thế nào.'] }
    ]
  },
  'dream-christmas-delivery': {
      "overview": "Dream Christmas Delivery là chương trình chuỗi phục vụ cho Chiến dịch Marketing mùa Giáng Sinh - cần vận hành đồng bộ tại 14 trung tâm thương mại (TTTM) Vincom Mega Mall và Vincom Center trong 18 ngày, với nhiều phòng ban cùng phối hợp.",
      "context": [
          "Tài liệu hướng dẫn dùng cho cả 14 địa điểm, có bước đối chiếu ngay tại điểm PG (nhân viên gian hàng) bàn giao cho BQL (Ban quản lý) để hạn chế sai sót và trục lợi."
      ],
      "contributionBullets": [
          "Xây dựng hành trình khách hàng và quy trình vận hành, bao gồm các điểm bàn giao giữa những nhóm tham gia.",
          "Viết kịch bản training cho PG và các nhân sự liên quan.",
          "Thiết kế bộ tài liệu hướng dẫn triển khai (implementation deck) cho toàn bộ 14 địa điểm, chạy từ 06/12 đến 23/12."
      ],
      "sections": []
  },
  'vincom-tiktok-production': {
      "overview": "Một format giống nhau không tạo ra cùng một phản ứng.",
      "context": [
          "Nội dung cần được triển khai trong thời gian tương đối ngắn (1-2 ngày) để bù đắp vào khoảng trống nội dung do tạm thời chưa có nhà thầu phụ trách, nhưng vẫn phải khai thác được góc độ phù hợp, truyền tải các điểm mạnh của tenant và giữ được tone, hình ảnh thương hiệu Vincom."
      ],
      "contributionBullets": [
          "Lên ý tưởng cho các video ngắn về trải nghiệm tại TTTM.",
          "Viết kịch bản và dựng sáu video trên TikTok chính thức của Vincom.",
          "Phối hợp với một teammate quay hình theo kịch bản đã thống nhất.",
          "Theo dõi lượt xem của từng video sau khi đăng."
      ],
      "sections": []
  }
};

export const getFeaturedProjectContent = (id: string): FeaturedProjectContent => {
  const fallback = getProjectContent(id);
  const featured = FEATURED_PROJECT_CONTENT[id as ProjectId];
  return featured || {
    overview: fallback.overview,
    context: fallback.context,
    contributionBullets: fallback.contributionBullets,
    sections: fallback.sections,
    scopeSummary: fallback.scopeNote,
  };
};
