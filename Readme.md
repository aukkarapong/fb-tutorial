Ref. การสร้าง app login ด้วย Facebook
https://medium.com/@fraxool/add-facebook-login-to-your-ionic-3-app-the-step-by-step-guide-88879e391a3b

Ref. การรัน emulate ios
https://stackoverflow.com/questions/51114318/no-virtual-devices-found-ionic-cordova-emulate-ios

สร้าง application ที่ facebook
> https://developers.facebook.com/
> กด create แล้ว ให้ไปที่ Basic -> Add Platform
> กรอก Privacy Policy URL (ชี้ไป host จริงสักอัน) -> http://theptarin.com/
> เพิ่ม iOS กรอก Bundle ID ของใครของมัน (com.cscku.ionic3.fblogin)
> เพิ่ม Android กรอก Google Play Package Name ของใครของมัน (com.cscku.ionic3.fblogin)

Ref. วิธีการสร้าง application id บน Facebook ดูได้จาก VDO
> https://www.youtube.com/watch?v=0iSJs2o5Ra8

สร้าง ionic application
> ionic start fb-tutorial blank
> cd fb-tutorial
> ionic cordova platform add ios

แก้ไข config.xml ตรง id ให้ตรงกับ Bundle ID, Google Play Package Name ที่ create application ใน facebook
> <widget id="com.cscku.ionic3.fblogin" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">

install plugin
> ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="2402016280117173" --variable APP_NAME="CSCKUIONIC3"
> APP_ID = App ID ใน facebook
> APP_NAME = Display Name ใน facebook

install package 
> npm install --save @ionic-native/facebook

แก้ package.json ให้เหมือน project นี้ ยกแว้นตรงข้อมูล cordova-plugin-facebook4

ลบ node_module
> rm -rf node_module

install package 
> npm i

copy plugin จาก project นี้ไปทับของเดิม
> plugins -> cordova-plugin-facebook4

แก้ code app.module.ts
> import { Facebook } from '@ionic-native/facebook';
> providers: [
    ...
    Facebook,
    ...
  ]

แก้ home.html
แก้ home.scss
แก้ home.ts

การรับบน ios
> ionic cordova platform remove ios
> ionic cordova platform add ios
> cd platforms/ios/cordova
> npm install ios-sim@latest
> cd ../../../
> ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0"

รวบคำสั่งแบบสั้น
> ionic cordova platform remove ios && ionic cordova platform add ios
> cd platforms/ios/cordova && npm install ios-sim@latest && cd ../../../
> ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0"



*** หมายเหตุ ***
> จะต้องใช้ Facebook App ID ของใครของมัน ไม่งั้นจะ login ไม่ผ่าน ​(ยังไม่ได้หาสาเหตุ)
> Facebook App ID Status จะต้องเป็น Live ถึงจะ login ได้


/***** ไม่ใช้
ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="2402016280117173" --variable APP_NAME="CSCKU IONIC3"

npm install --save @ionic-native/facebook

cd platforms/ios/cordova
npm install ios-sim@latest
cd ../../../
ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0"

ionic cordova platform remove ios && ionic cordova platform add ios
cd platforms/ios/cordova && npm install ios-sim@latest && cd ../../../
ionic cordova emulate ios -- --buildFlag="-UseModernBuildSystem=0"
*****/