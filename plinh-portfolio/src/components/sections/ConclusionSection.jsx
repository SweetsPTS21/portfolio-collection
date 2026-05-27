import React, { useState } from 'react';
import { conclusionData, personalInfo } from '../../data/portfolioData';
import PulpCard from '../ui/PulpCard';
import { motion } from 'framer-motion';
import { Award, Compass, MessageSquare, Send } from 'lucide-react';
import { notification } from 'antd';

export default function ConclusionSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      api.warning({
        message: 'Lưu ý gửi tin',
        description: 'Vui lòng điền đầy đủ các trường thông tin trước khi gửi.',
        placement: 'bottomRight'
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      api.success({
        message: 'Gửi thư thành công',
        description: `Cảm ơn bạn đã liên hệ! Phương Linh sẽ phản hồi email ${formData.email} sớm nhất có thể.`,
        placement: 'bottomRight'
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  // Motion variants for stagger reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const sproutVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 px-4 md:px-12 max-w-6xl mx-auto space-y-8"
    >
      {contextHolder}

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-widest text-[#588157] font-bold">Tổng Kết Trải Nghiệm</span>
        <h2 className="text-4xl font-bold text-[#3A5A40] botanical-underline pb-1">
          {conclusionData.title}
        </h2>
        <p className="text-sm text-[#588157] leading-relaxed">
          Đánh giá tổng kết quá trình tiếp thu học tập và cam kết áp dụng công nghệ số vào tương lai Luật học.
        </p>
      </div>

      {/* Intro Card */}
      <motion.div variants={itemVariants}>
        <PulpCard className="bg-[#DAD7CD]/35">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-16 h-16 flex-shrink-0 cursor-pointer"
              style={{
                backgroundImage: `url('./src/assets/botanical/legal-leaf-seal.svg')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <p className="text-sm text-[#3A5A40] leading-relaxed m-0 italic font-medium">
              "{conclusionData.intro}"
            </p>
          </div>
        </PulpCard>
      </motion.div>

      {/* Skills Learned & Reflection side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Skills Learned */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-2xl font-bold text-[#3A5A40] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#588157]" />
            {conclusionData.skillsLearned.title}
          </h3>
          <div className="space-y-6 border-l-2 border-[#A3B18A]/50 pl-6 ml-3 relative">
            {conclusionData.skillsLearned.points.map((point, index) => (
              <div key={index} className="relative space-y-1">
                {/* SVG Sprout Node placement with Framer Motion spring pop */}
                <motion.div 
                  variants={sproutVariants}
                  className="absolute -left-[38px] top-0.5 w-[24px] h-[24px]"
                  style={{
                    backgroundImage: `url('./src/assets/botanical/sprout-timeline-node.svg')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <h4 className="text-base font-bold text-[#3A5A40] m-0">{point.label}</h4>
                <p className="text-xs text-[#588157] m-0 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reflection success/challenges */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-2xl font-bold text-[#3A5A40] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#588157]" />
            {conclusionData.reflection.title}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {/* Success */}
            <motion.div 
              whileHover={{ x: 4, scale: 1.01 }}
              className="p-5 rounded-[18px] bg-[#588157]/10 border border-[#588157]/20 space-y-2 cursor-pointer transition-all"
            >
              <strong className="text-sm text-[#3A5A40] font-bold block flex items-center gap-1.5">
                <span className="text-emerald-600">🌿</span>
                {conclusionData.reflection.success.title}
              </strong>
              <p className="text-xs text-[#3A5A40]/90 leading-relaxed m-0">
                {conclusionData.reflection.success.content}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div 
              whileHover={{ x: 4, scale: 1.01 }}
              className="p-5 rounded-[18px] bg-[#D6A25F]/10 border border-[#D6A25F]/20 space-y-2 cursor-pointer transition-all"
            >
              <strong className="text-sm text-[#3A5A40] font-bold block flex items-center gap-1.5">
                <span className="text-amber-600">⚖️</span>
                {conclusionData.reflection.challenge.title}
              </strong>
              <p className="text-xs text-[#3A5A40]/90 leading-relaxed m-0">
                {conclusionData.reflection.challenge.content}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Future Vision & Contact Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
        {/* Future Vision (Left 7 cols) */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex">
          <PulpCard hasClip={true} className="flex flex-col justify-between w-full">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#3A5A40] flex items-center gap-2">
                <span>🌱</span>
                {conclusionData.future.title}
              </h3>
              <p className="text-sm text-[#3A5A40]/95 leading-relaxed">
                {conclusionData.future.content}
              </p>
            </div>

            {/* Signature Box */}
            <div className="mt-8 pt-4 border-t border-[#A3B18A]/30 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-[#588157] tracking-wider leading-none">Chuyên viên pháp chế số</p>
                <p className="font-bold text-base text-[#3A5A40] mt-1 leading-none">{personalInfo.name}</p>
              </div>
              {/* Handwritten style signature simulation */}
              <motion.div 
                whileHover={{ skewX: -6, scale: 1.05 }}
                className="italic text-2xl text-[#588157]/45 select-none pr-4 font-semibold rotate-3 cursor-pointer transition-all"
              >
                Dang Phuong Linh
              </motion.div>
            </div>
          </PulpCard>
        </motion.div>

        {/* Contact Form (Right 5 cols) */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex">
          <PulpCard className="bg-[#DAD7CD]/35 flex flex-col justify-between w-full">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#3A5A40] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#588157]" />
                Gửi Thư Cho Linh
              </h3>
              <p className="text-xs text-[#588157]">
                Hãy gửi lại lời nhắn hoặc câu hỏi cho Phương Linh nhé. Sổ nhật ký điện tử này luôn đón nhận mọi chia sẻ cởi mở.
              </p>
              
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <label className="text-[10px] uppercase font-bold text-[#3A5A40] block mb-1">Tên của bạn</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nguyễn Văn A..."
                    className="w-full text-xs p-2.5 rounded-[8px] border border-[#A3B18A] bg-[#F5F5F5] text-[#3A5A40] focus:outline-none focus:border-[#588157] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-[#3A5A40] block mb-1">Địa chỉ Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com..."
                    className="w-full text-xs p-2.5 rounded-[8px] border border-[#A3B18A] bg-[#F5F5F5] text-[#3A5A40] focus:outline-none focus:border-[#588157] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-[#3A5A40] block mb-1">Lời nhắn gửi</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Xin chào Linh, mình có một số thắc mắc về..."
                    className="w-full text-xs p-2.5 rounded-[8px] border border-[#A3B18A] bg-[#F5F5F5] text-[#3A5A40] focus:outline-none focus:border-[#588157] transition-colors resize-none"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#588157] hover:bg-[#3A5A40] disabled:bg-[#A3B18A] text-[#F5F5F5] text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Đang gửi...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi Thư Kẹp Lá</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </PulpCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
