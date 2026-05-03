import "./globals.css";

export const metadata = {
  title: "Paw & Pure 宠物洗护店",
  description: "Paw & Pure 宠物洗护店提供宠物洗澡、吹毛、修剪、护理和 SPA 服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
