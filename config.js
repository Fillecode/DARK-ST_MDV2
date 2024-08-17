
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9Da21PM1NsTmkzd2tOdWtPL1E3RjdPWEhkK29MTEx3YUFSRExBeUNtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGN5aWNtY0dKN2swdVhiQUg3Q0haYU41STVpYkJ5MWJhbkJvN0pGS0VRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RkhMMkJiSWpEWVpDS1dIaFF6REZ4TU5rMGlQL1BOekxxSDV5a1Q3VVhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsNjZMUXVKZk5MR1B4L1FGRWxzRVNNTkZyNjJZc2RpMlZ3Wnd1MU13VVdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJTHAyeng0NTZKbkp2SFRyQ3NOTkpoL2h0S3FVWWF5cTBJOHZEcGt4VUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoxUmNWNmNLUng0dEswTlgwbWwxKy8vUmFpRGlPNEF5bFJJR1F4b0NzUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RVKzJPcjk2MWJxUW96UlU1U2xDaUlRQXFZSXNxNUZ0alUwOEhLWC8wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEY0STVmbEJKSlpQZm1mMDYzYVlLU1ZGMm42MDlLbWxzaEpjR0JJMW1rdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9RNjBBS2w4V05pMklvbWIvb25hNThNQUJ0M1JIYVVJc0ZHTnpOMUVoS084RHRaM3dZRXBOZFBuRFN1aXI0QzhGN0duT1ViQXJmbUdHc1dxcXRPUERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6ImMzd1NHR2lOYTFkdXhXQytQay82U2Qyd29CeEd3dlpVUlR6ZDJpK2RLazg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODI3Njc1MzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzIzQUE2QUYyRTY0RjExRjBCOUE2NzVEM0Y5QjVBOEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzg2NzU0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODI3Njc1MzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjgwQzMyNzEyMTAyNDA2Q0RCRUM0M0Q4RUIxMTE5QTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzg2NzU0N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiclpzbGVIRlBUaVcyTmVnaXZ6WlhmZyIsInBob25lSWQiOiJjMWRkYzBlMS02ZGI1LTRjYmYtOTNmMi03YjJmYjE1ZjRkZTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXJsK0hUL2pFTVRwaEJORURYQUpkekRSdHkwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRXZ1BRalB3M3Z2bDZ4SEMxZGdhOGp5eWFDWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJBTkZFVFM1OSIsIm1lIjp7ImlkIjoiMTQzODI3Njc1MzY6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4HwnZCH8J2QiPCdkI3wnZCA8J2Qk/CdkIDqp4LqqIQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0oySHZXUVFpc09BdGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlublF6UTZpSU9vZXVGZSt5Tmhqbkliamt6bEVaQ2tuZlloWGI2VVROVDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InB1YkQ1clhwSFVlb2hEaGw4TnZHSXl2OGF1R3BSdlFRODhXU0pSL3gwMkwzSlh4U0dwZzJRdDZidWgvRjVub3M2R09XT2JUbGhaeGc1cHZEUTdBVUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4RTRTZnh2MVBnZ3hmYTRIZmhqTnNUellLYXNWK2hIVVRWNWNJZURkdnJOaGwxd3lXbm92TU5SZHFFNlovVUF6VmxCVm5LeURmaERhTk9jVGIvMUREQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0MzgyNzY3NTM2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZlo1ME0wT29pRHFIcmhYdnNqWVk1eUc0NU01UkdRcEozMklWMitsRXpVOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzg2NzU0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLZlgifQ==" 



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
