const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 创建邮件传输器
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: true, // 启用调试
  logger: true // 启用日志
});

// 测试邮件连接
transporter.verify(function(error, success) {
  if (error) {
    console.log("SMTP连接错误:", error);
  } else {
    console.log("邮件服务器连接成功!");
  }
});

// 邮件发送接口
app.post('/api/send-email', async (req, res) => {
  console.log('收到请求:', req.body);
  
  const { email, message } = req.body;
  
  if (!email || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      details: 'Email and message are required' 
    });
  }

  try {
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact from ${email}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact from Portfolio</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    console.log('准备发送邮件:', mailOptions);

    const info = await transporter.sendMail(mailOptions);
    
    console.log("邮件发送成功:", info);
    res.json({ 
      success: true,
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('邮件发送错误:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('服务器错误:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    details: err.message 
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
}); 