import { useState } from "react";
import PageTransition from "../ui/PageTransition.jsx";
import LagoonCard from "../ui/LagoonCard.jsx";
import { conclusion } from "../../data/portfolioData.js";
import bottleRippleUrl from "../../assets/lagoon-kayak-adventure/signal-bottle-ripple.svg";
import { Send, CheckCircle2, Check, Scale } from "lucide-react";
import { Button, Input, Form, message } from "antd";

export default function LagoonSignalContactPage() {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success("Tín hiệu của bạn đã được gửi thành công vào Lagoon!");
      form.resetFields();
    }, 1200);
  };

  return (
    <PageTransition className="conclusion-page">
      <div className="page-heading">
        <span className="welcome-badge">Voyage Completion</span>
        <h2>Tổng kết & Liên hệ</h2>
        <p className="page-intro-text">
          Nhìn lại chặng đường chèo kayak qua biển hồ kỹ năng số để đúc rút những giá trị trưởng thành sâu sắc nhất.
        </p>
      </div>

      <div className="conclusion-layout-grid">
        {/* Left Column: Personal Reflections */}
        <div className="reflections-stack">
          {conclusion.items.map((item, index) => (
            <LagoonCard key={index} title={item.title} eyebrow={`Stop ${index + 1}`}>
              {item.text ? <p className="reflection-text">{item.text}</p> : null}
              {item.points ? (
                <ul className="reflection-points-list">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <Check size={14} style={{ color: 'var(--kayak-teal)', marginRight: '8px', marginTop: '6px', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </LagoonCard>
          ))}
        </div>

        {/* Right Column: Send a Signal Contact Form */}
        <div className="contact-column">
          <div className="signal-form-container">
            <div className="signal-header">
              <img src={bottleRippleUrl} alt="Message bottle" className="asset-bottle-floating" />
              <h3>Gửi tín hiệu cho Phương</h3>
              <p>Hãy ném một chiếc chai chứa lời nhắn của bạn vào lagoon, nó sẽ trôi đến hộp thư của mình ngay lập tức!</p>
            </div>

            {submitted ? (
              <div className="success-overlay">
                <CheckCircle2 size={48} className="icon-success-check" />
                <h4>Tín hiệu đã được nhận!</h4>
                <p>Cảm ơn bạn đã ghé thăm không gian số của Hoài Phương. Chúc bạn có một ngày chèo kayak vui vẻ!</p>
                <Button 
                  type="primary" 
                  shape="round" 
                  onClick={() => setSubmitted(false)}
                  className="reset-btn"
                >
                  Gửi lời nhắn mới
                </Button>
              </div>
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                className="signal-form"
              >
                <Form.Item
                  label="Họ và Tên"
                  name="name"
                  rules={[{ required: true, message: "Vui lòng nhập tên của bạn!" }]}
                >
                  <Input placeholder="Tên của bạn..." className="lagoon-input" />
                </Form.Item>

                <Form.Item
                  label="Email liên hệ"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email!" },
                    { type: "email", message: "Email không đúng định dạng!" }
                  ]}
                >
                  <Input placeholder="your.email@example.com" className="lagoon-input" />
                </Form.Item>

                <Form.Item
                  label="Lời nhắn / Thông điệp"
                  name="message"
                  rules={[{ required: true, message: "Vui lòng ghi lời nhắn!" }]}
                >
                  <Input.TextArea 
                    placeholder="Viết thông điệp ném vào chai..." 
                    rows={4} 
                    className="lagoon-input"
                  />
                </Form.Item>

                <Form.Item className="submit-item">
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    loading={loading}
                    icon={<Send size={14} />}
                    className="lagoon-submit-btn"
                  >
                    Ném chai thông điệp
                  </Button>
                </Form.Item>
              </Form>
            )}
          </div>

          {/* Academic Integrity Pledge */}
          <div className="academic-integrity-card">
            <Scale size={28} style={{ color: 'var(--kayak-teal)', alignSelf: 'center', flexShrink: 0 }} />
            <div>
              <h5>Liêm chính học thuật</h5>
              <p>
                Hoài Phương tự đặt ra lằn ranh đỏ cho bản thân: không sao chép nguyên văn lời máy tính, luôn khai báo minh bạch sự hỗ trợ của công nghệ và bảo vệ tính nguyên bản của tư duy cá nhân trong mọi bài luận.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
