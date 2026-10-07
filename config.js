const CONFIG = {
  // 貼上你的 Google Apps Script Web App URL
  GAS_URL: "https://script.google.com/macros/s/AKfycbyTeClAkJqdEnyLIJUry7iP_EdDuOHZiAhj-iEik2W3MSjA62JXS82ln2GiVWUPllMK/exec",

  BOSS_EMAIL: "lianweoai77@gmail.com",

  // 會審組結構 (E, F, G 組)
  AUDIT_GROUPS: {
    "E組": {
          leader_email: "eric_lin@example.com", // E組長信箱
          members: {
            "Eric 林文舜": "eric_lin@example.com",
            "Ula 范瀞云": "ula_fan@example.com",
            "Alison 郭欣憶": "alison_guo@example.com",
            "Lina 劉家伶": "lina_liu@example.com"
      }
    },
    "F組": {
          leader_email: "kimi_lee@example.com", // F組長信箱
          members: {
            "Kimi 李淑芬": "kimi_lee@example.com",
            "Wendy 温惠閔": "wendy_wen@example.com",
            "Coco 黃淳暄": "coco_huang@example.com",
            "Peggy 胡沛琪": "peggy_hu@example.com"
          }
        },
        "G組": {
          leader_email: "iris_chen@example.com", // G組長信箱
          members: {
            "Iris 陳思瑋": "iris_chen@example.com",
            "Ruby 胡珞晴": "ruby_hu@example.com",
            "Vicky 童婷怡": "vicky_tong@example.com",
            "Audrey 黃淳暄": "audrey_huang@example.com",
            "Pegg 余泳霈": "pegg_yu@example.com"
          }
        }
  },

  // 工商組結構 (Mina 為主管)
  BUSINESS_DEPT: {
    manager_email: "kathy_liu@lianwei.tw",
    staff_emails: {
        "Mina 王麗茹": "mina_wang@example.com",
        "Nancy 李紫筠": "nancy_lee@example.com",
        "Kathy 劉怡萱": "kathy_liu@example.com"
    }
  }
};
  

//之後更新程式碼要開終端機輸入
//git add .
//git commit -m "Fix alignment and responsive layout for contact table in form.html"
//git push
