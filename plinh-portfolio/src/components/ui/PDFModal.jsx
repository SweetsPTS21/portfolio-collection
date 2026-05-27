import React from 'react';
import { Modal, Button } from 'antd';
import { FileDown, EyeOff, BookOpen } from 'lucide-react';

export default function PDFModal({ open, onCancel, fileUrl, fileName, title }) {
  return (
    <Modal
      title={
        <div className="flex items-center gap-2 pr-6">
          <BookOpen className="w-5 h-5 text-[#588157] flex-shrink-0" />
          <div className="leading-tight">
            <span className="text-xs font-bold uppercase tracking-wider text-[#588157] block">Tệp Minh Chứng</span>
            <span className="text-lg text-[#3A5A40] font-semibold">{title}</span>
          </div>
        </div>
      }
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="close" onClick={onCancel} icon={<EyeOff className="w-4 h-4" />}>
          Đóng
        </Button>,
        <Button
          key="download"
          type="primary"
          icon={<FileDown className="w-4 h-4" />}
          href={fileUrl}
          download={fileName}
        >
          Tải Xuống PDF
        </Button>,
      ]}
      width={1000}
      style={{ top: 40 }}
      styles={{
        body: {
          padding: 0,
          height: '70vh',
          minHeight: '400px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          border: '1px solid #A3B18A'
        }
      }}
    >
      {fileUrl ? (
        <iframe
          src={`${fileUrl}#toolbar=0`}
          title={`Tài liệu minh chứng - ${title}`}
          width="100%"
          height="100%"
          className="border-0"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#F5F5F5]">
          <EyeOff className="w-12 h-12 text-[#A3B18A] mb-4" />
          <p className="text-lg text-[#3A5A40] font-semibold">Tài liệu không khả dụng</p>
          <p className="text-sm text-[#588157] mt-2">Đường dẫn tệp tài liệu này hiện tại không tồn tại hoặc chưa được tải lên.</p>
        </div>
      )}
    </Modal>
  );
}
