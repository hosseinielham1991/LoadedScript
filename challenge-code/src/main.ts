import './style.css'
import { onAddScript } from './loadScripts/addScript.ts'
import {intialAddAdvertise} from './addAdvertis/intial.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <label> 1 - A module load script with a src attribute</label>
      <button id="addRightScript" type="button">Add right Script</button>
      <button id="addWrongScript" type="button">Add wrong Script</button>
  </div>
  <label class="pt"> 2 - load advertis by fetch</label>
  <div class="card">
    <div data-ad-slot></div>  
  </div>
  <p class="pt">3 - security</p>
  <div style="direction:rtl"> 
  <p>
  احتمال XSS و CSRF برای مشتریانی که یک script خارجی را لود میکنند وجود دارد
  مشتریان این احتمال می دهند که یا کد مخرب در اسکریپت ما وجود داشته باشد که میشه حالت xss
  <p>
  <p>
   یا اینکه میتواند در اسکریپت ما درخواست های به api داخلی آن ها زده شودکه چون ممکن است کاربر لاگین کرده باشد و کوکی های لازم ست شده باشد اون درخواست ها اجرا شوند که می شود حالت CSRF
  </p>
  <p>
یکی از ایمن ترین راه حل ها استفاده از ifram با sandbox که ایزوله ترین حالت اجرا کد در صفحه را در اختیار شما قرار میده
این روش درسته برای مشتری خیلی ایمن هست ولی ممکن برای اسکریپت ما محدودیت هایی ایجاد کنه و ما برای دسترسی به بخش های از سایت دچار محدودیت بشیم
  </p>
  <p>
  یکی از کارهای دیگه ای مشتری میتونه انجام بده برای اینکه تا حدودی کنترل روی درخواست های اسکریپت ها داشته باشه استفاده از Content-Security-Policy هست وب سرور میتواند با استفاده از قابلیت تعیین کن که در اسکریپت به چه مسیر هایی میتوان درخواست زد. که البته باز این مورد خیلی قطعیتی به مشتری نمیده 
  </p>
<p>
برای حالت CSRF یکی از کارهایی که میتونه مشتری انجام بده اینه که برای تمام فرم ها یا api  های حساس و امنیتیش یه توکن یکتا توی هدر درخواست هاش قرار بده و سمت بک اند اونو چک کنه که مشکل امنیتی براش پیش نیاد
یکی از روش های دیگه هم Integrity  که از حملاتی که موقع استفاده از cdn ها اتفاق می افته میتونه جلوگیری کنه
ولی خوب این مورد هم مشکلات خودشو برای ما داره هر بار با تغییر فایل ما احتیاج به یه کد هش جدید هست 
</p>
<p>
یکی دیگه از روش ها هم اینه که مشتری اسکریپت رو با sanitize  قرار بده که اینم باز برای ما مشکلات زیادی به وجود میاره
با توجه به محدودیت های مشتری و امنیت اون باید ترکیبی از این راه حل ها ارائه شود
</p>
  </div>  
`

onAddScript(document.querySelector<HTMLButtonElement>('#addRightScript')!, "/alert.js")
onAddScript(document.querySelector<HTMLButtonElement>('#addWrongScript')!, "/alert1.js")

intialAddAdvertise();
