import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import owlMascot from "../../assets/theme/cloudy-owl-mascot.png";

const DIALOGUES = {
  about: [
    "Chào thầy cô và các bạn nhé! Mình là Cú Mây thông thái — trợ thủ công nghệ của Khánh Đào đây! 🦉",
    "Khánh đam mê luật pháp, nghiện cầu lông và cực kỳ thích ứng dụng AI vào học tập đấy!",
    "Hãy nhớ 3 nguyên tắc bất di dịch của tụi mình: Nguyên bản, Độc lập và Minh bạch nhé! ✨",
  ],
  projects: [
    "Hành trình số của Khánh được ghi dấu qua 6 chương bài tập đấy! Click vào từng chương để xem nhé!",
    "Mỗi tập sách luật đều được tụi mình thiết kế phát sáng lộng lẫy chuẩn thư viện bay luôn!",
    "Bật mí: Chương 3 và Chương 5 tụi mình đã thiết kế câu lệnh AI đỉnh chóp luôn nha! 🚀",
  ],
  conclusion: [
    "Khánh đã xuất sắc làm chủ các công cụ công nghệ và hoàn thiện không gian số này thật trọn vẹn!",
    "Rủi ro thông tin luật pháp AI bịa ra rất lớn, nhưng Khánh đã giải quyết triệt để bằng phản xạ kiểm chứng gốc!",
    "Cảm ơn bạn rất nhiều vì đã lắng nghe và đồng hành cùng câu chuyện của Đào Ngọc Khánh! ❤️",
  ],
};

export default function CloudyOwl({ page = "about" }) {
  const [speechIndex, setSpeechIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);

  // Cycle speeches when clicked
  const handleOwlClick = () => {
    const list = DIALOGUES[page] || DIALOGUES.about;
    setSpeechIndex((prev) => (prev + 1) % list.length);
    setShowBubble(true);
  };

  // Automatically show bubble on mount
  useEffect(() => {
    setSpeechIndex(0);
    setShowBubble(true);
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 8000); // hide after 8s of idle
    return () => clearTimeout(timer);
  }, [page]);

  const speechList = DIALOGUES[page] || DIALOGUES.about;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        pointerEvents: "none",
      }}
    >
      {/* Speaking Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            style={{
              pointerEvents: "auto",
              cursor: "pointer",
              background: "var(--deep-navy)",
              color: "#ffffff",
              padding: "12px 18px",
              borderRadius: "18px 18px 2px 18px",
              fontSize: "0.85rem",
              fontWeight: "600",
              maxWidth: "250px",
              boxShadow: "0 8px 24px rgba(26, 50, 68, 0.25)",
              marginBottom: "10px",
              lineHeight: "1.5",
              fontFamily: "var(--font-body)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
            onClick={handleOwlClick}
          >
            {speechList[speechIndex]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Interactive Owl Trigger */}
      <motion.div
        style={{
          pointerEvents: "auto",
          cursor: "pointer",
          width: "90px",
          height: "90px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOwlClick}
      >
        <img
          src={owlMascot}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="Linh vật Cú Mây"
        />
      </motion.div>
    </div>
  );
}
