const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919074818752";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_23_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAzMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0SVdEeTdONEY2TXBETE5UYU5vRCthVmhTcTZxUlIzS2NwQXMzQ0JRWGx3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIZURSNzdJQ1QteWtLNnFpZ2VYQXhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3MmI1M2UwLTkwZjUtNDU1NS05NDQ4LTNjZTNjMmJhZGEyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAxOTksXG4gICAgICAxNSxcbiAgICAgIDIsXG4gICAgICAxNixcbiAgICAgIDUyLFxuICAgICAgMjQ5LFxuICAgICAgMTY3LFxuICAgICAgMTUsXG4gICAgICAxMTgsXG4gICAgICA4NSxcbiAgICAgIDcyLFxuICAgICAgMTE5LFxuICAgICAgNjUsXG4gICAgICAxMjMsXG4gICAgICAxMzgsXG4gICAgICAxMDUsXG4gICAgICAyNTEsXG4gICAgICAxODQsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDEyNyxcbiAgICAgIDI0NixcbiAgICAgIDE5MixcbiAgICAgIDE2MyxcbiAgICAgIDE4OCxcbiAgICAgIDIxNSxcbiAgICAgIDE4NSxcbiAgICAgIDEzMCxcbiAgICAgIDMxLFxuICAgICAgMjI1LFxuICAgICAgMTAxLFxuICAgICAgMTE4LFxuICAgICAgMjI2LFxuICAgICAgOTgsXG4gICAgICAyMDEsXG4gICAgICAxNzMsXG4gICAgICA3OCxcbiAgICAgIDI0OSxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU2V0syWkhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwNzQ4MTg3NTI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1FTlRBTElTVCBBU0hJU0hcIixcbiAgICBcImxpZFwiOiBcIjE1ODg0NTMwNTM2MDQ3ODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xMHEvMERFTSt4Z0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUNFYUlzUzl2S1ZpRFArWGtWZmZDbkdobktYQmV5RDkxaXdxSGdvQm1TYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsdEx6MnU4ZDFOdmJ6Ym5YQ1d6Y2orcUpJMzVsaFIva3dFUlVEM0pnM3g2NFdkTDZ5SXc0Unp6eVl2aUxjZno4RTk4Y3ZXdnM4SW5FTzk2TTAweDBEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDTzdQbjdEeXV1a1N4OVhKVVdPbmdqMG1FNURxa1dtRE5wWEd3VWtXdFNWbENXbVUydGhoWHIzYVQ4ejB3TThrbTFVUUVhYVpNR0IvamR2L09YWkNDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwNzQ4MTg3NTI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY3MDk5NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxmcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGZwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjEwa1ZsU2hub0R4Y1JBU0J3MHlPaVVEenRJak5naXFKWm1uK2Q4aWJWcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY4MTYxNjI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
