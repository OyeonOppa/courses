/* ════════════════════════════════════════════════════════════
   config.js — ตั้งค่าส่วนกลาง (แก้ไฟล์นี้ไฟล์เดียวจบ)
   ════════════════════════════════════════════════════════════
   
   วิธีใช้:
   1. Deploy Code.gs เป็น Web App
   2. คัดลอก URL มาวางแทน '' ด้านล่าง
   3. ทุกหน้า (index, application, admin) จะใช้ URL นี้อัตโนมัติ
   
   ตัวอย่าง:
   GAS_URL: 'https://script.google.com/macros/s/AKfycbx.../exec',
   
   ⚠️ ถ้า GAS_URL เป็นค่าว่าง '' → ระบบจะทำงานใน Mock Mode
      (ทดสอบได้โดยไม่ต้องมี Backend จริง)
   
   ════════════════════════════════════════════════════════════ */

const CONFIG = {

    // ★★★ ใส่ GAS Web App URL ตรงนี้ ★★★
    GAS_URL: 'https://script.google.com/macros/s/AKfycbyNiLUBuwfSh_4QhplEX6qw6BwlcK6e1XtwnxDbcczCD9OOBYbUULewU1QEXzGm0Tz5/exec',

    // ── ระบบจะเช็คเอง ──
    get isMock() { return !this.GAS_URL; },

    // ── Session ──
    SESSION_KEY: 'kpi_course_session',

    // ── File Upload ──
    MAX_FILE: 5 * 1024 * 1024,  // 5MB
    FILE_TYPES: ['application/pdf', 'image/jpeg', 'image/png'],

    // ── Admin (ใช้เฉพาะ Mock Mode, ระบบจริงควร check ฝั่ง server) ──
    ADMIN_USER: 'admin',
    ADMIN_PASS: 'kpi@admin2026',
};