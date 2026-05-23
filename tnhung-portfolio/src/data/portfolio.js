import { FolderOpen, BarChart2, Brain, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import bt1Pdf from '../assets/Bt1.pdf';
import bt2Pdf from '../assets/Bt2.pdf';
import bt3Pdf from '../assets/Bt3.pdf';
import bt4Pdf from '../assets/Bt4.pdf';
import bt5Pdf from '../assets/Bt5.pdf';
import bt6Pdf from '../assets/Bt6.pdf';

export const person = {
  name: 'Trịnh Thị Thúy Nhung',
  role: 'Sinh viên Luật – Nhà khám phá số',
  school: 'Trường Đại học Luật, ĐHQGHN',
  hobbies: 'Đọc sách, viết lách, nghiên cứu, thiết kế, khám phá công nghệ',
  quote: 'Dịu dàng trong cách thể hiện, sắc sảo trong tư duy.',
  intro: 'Tại không gian nhỏ này, những nguyên tắc pháp lý khô khan được kết hợp hài hòa cùng sự phát triển của công nghệ số, thông qua lăng kính của một tâm hồn luôn trân trọng sự tinh tế và chiều sâu học thuật.',
};

export const projects = [
  {
    id: '01',
    icon: FolderOpen,
    title: 'Dự án 1',
    subtitle: 'Tổ chức dữ liệu',
    desc: 'Thao tác quản lý tệp tin, xây dựng hệ thống lưu trữ học thuật mạch lạc và tinh tế.',
    color: '#c084fc',
    pdf: bt1Pdf,
  },
  {
    id: '02',
    icon: BarChart2,
    title: 'Dự án 2',
    subtitle: 'Khai thác dữ liệu',
    desc: 'Thu thập, đánh giá và trích dẫn tài liệu pháp lý theo chuẩn Harvard từ Google Scholar.',
    color: '#f472b6',
    pdf: bt2Pdf,
  },
  {
    id: '03',
    icon: Brain,
    title: 'Dự án 3',
    subtitle: 'Trí tuệ nhân tạo',
    desc: 'Ứng dụng AI để hỗ trợ học tập và giải quyết vấn đề pháp lý phức tạp.',
    color: '#818cf8',
    pdf: bt3Pdf,
  },
  {
    id: '04',
    icon: MessageSquare,
    title: 'Dự án 4',
    subtitle: 'Giao tiếp số',
    desc: 'Tổ chức cuộc họp trực tuyến chuyên nghiệp, xây dựng kỹ năng làm việc nhóm văn minh.',
    color: '#fb7185',
    pdf: bt4Pdf,
  },
  {
    id: '05',
    icon: ShieldCheck,
    title: 'Dự án 5',
    subtitle: 'An toàn số',
    desc: 'Xây dựng bộ nguyên tắc liêm chính học thuật và bảo vệ thông tin cá nhân trong môi trường số.',
    color: '#34d399',
    pdf: bt5Pdf,
  },
  {
    id: '06',
    icon: Sparkles,
    title: 'Dự án 6',
    subtitle: 'Sáng tạo nội dung số',
    desc: 'Ứng dụng công cụ tạo sinh để xây dựng sản phẩm truyền thông học thuật mang dấu ấn riêng.',
    color: '#fbbf24',
    pdf: bt6Pdf,
  },
];

export const projections = [
  {
    type: 'PROJECTION',
    label: 'Tư duy',
    content: 'Em không muốn AI suy nghĩ thay mình. Em muốn học cách đối thoại với nó bằng tư duy của chính mình.',
  },
  {
    type: 'CONCLUSION',
    label: 'Kết luận',
    content: 'Trong thời đại AI, điều quan trọng nhất không phải là sử dụng công nghệ, mà là làm chủ tư duy của chính mình.',
  },
];
