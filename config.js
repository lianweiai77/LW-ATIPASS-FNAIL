const CONFIG = {
  // 貼上你的 Google Apps Script Web App URL
  GAS_URL: "https://script.google.com/macros/s/AKfycbwQGkiG6oJNcBiQyAcWhmUJ6K3-ySyJ2GkGP-hTRoKUL2mM_-LXHh7dCZBI0FmHOeTDfg/exec",

  BOSS_EMAIL: "lianweoai77@gmail.com",

  // 會審組結構 (E, F, G 組)
  AUDIT_GROUPS: {
    "會審E組": {
          leader_email: "eric_lin@example.com", // E組長信箱
          members: {
            "Eric林文舜": "eric_lin@example.com",
            "Ula范瀞云": "ula_fan@example.com",
            "Alison郭欣憶": "alison_guo@example.com",
            "Lina劉家伶": "lina_liu@example.com"
      }
    },
    "會審F組": {
          leader_email: "kimi_lee@example.com", // F組長信箱
          members: {
            "Kimi李淑芬": "kimi_lee@example.com",
            "Wendy温惠閔": "wendy_wen@example.com",
            "Coco黃淳暄": "coco_huang@example.com",
            "Peggy胡沛琪": "peggy_hu@example.com"
          }
        },
        "會審G組": {
          leader_email: "iris_chen@example.com", // G組長信箱
          members: {
            "Iris陳思瑋": "iris_chen@example.com",
            "Ruby胡珞晴": "ruby_hu@example.com",
            "Vicky童婷怡": "vicky_tong@example.com",
            "Audrey黃淳暄": "audrey_huang@example.com",
            "Pegg余泳霈": "pegg_yu@example.com"
          }
        }
  },

  // 工商組結構 (Mina 為主管)
  BUSINESS_DEPT: {
    manager_email: "mina_wang@example.com",
    staff_emails: {
        "Mina王麗茹": "mina_wang@example.com",
        "Nancy李紫筠": "nancy_lee@example.com",
        "Kathy劉怡萱": "kathy_liu@example.com"
    }
  }
};
  

//之後更新程式碼要開終端機輸入
//Bash
//git add .
//git commit -m "更新內容說明"
