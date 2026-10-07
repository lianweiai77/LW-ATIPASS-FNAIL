// config.js
const CONFIG = {
  EMAILJS_PUBLIC_KEY: "PS5_BPkQ_IWh4ncFA",
  EMAILJS_SERVICE_ID: "service_dkmpinw",
  EMAILJS_TEMPLATE_ID: "template_9os41eu",

  BOSS_EMAIL: "lianweoai77@gmail.com",
  B_MANAGER_EMAIL: "kathy_liu@lianwei.tw",

  // 1. 各組別設定：加入主管 Email 以及該組別的所有同事清單
  DEPARTMENTS: {
    "會審E組": {
      managerEmail: "eric_lin@example.com", // 會審E組主管
      members: [
        { name: "Eric林文舜", email: "eric_lin@example.com" },
        { name: "Ula范瀞云", email: "Ula_fan@example.com" },
        { name: "Alison郭欣憶", email: "alison_guo@example.com" },
        { name: "Lina劉家伶", email: "lina_liu@example.com" }
      ]
    },
    "會審F組": {
      managerEmail: "kimi_lee@example.com", // 會審F組主管
      members: [
        { name: "Kimi李淑芬", email: "kimi_lee@example.com" },
        { name: "Wendy温惠閔", email: "wendy_wen@example.com" },
        { name: "Coco黃淳暄", email: "coco_huang@example.com" },
        { name: "Peggy胡沛琪", email: "peggy_hu@example.com" }
      ]
    },
    "會審G組": {
      managerEmail: "iris_chen@example.com", // 會審G組主管
      members: [
        { name: "Iris陳思瑋", email: "iris_chen@example.com" },
        { name: "Ruby胡珞晴", email: "ruby_hu@example.com" },
        { name: "Vicky童婷怡", email: "vicky_tong@example.com" },
        { name: "Audrey黃淳暄", email: "audrey_huang@example.com" },
        { name: "Pegg余泳霈", email: "pegg_yu@example.com" }
      ]
    }
  },

  // B部門可派案的同事清單
  DISPATCH_ASSIGNEES: [
    { name: "Mina王麗茹", email: "mina_wang@example.com" },
    { name: "Nancy李紫筠", email: "nancy_lee@example.com" },
    { name: "Kathy劉怡萱", email: "kathy_liu@example.com" }
  ]
};

//之後更新程式碼要開終端機輸入
//Bash
//git add .
//git commit -m "更新內容說明"
