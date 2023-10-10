const menuButton = document.querySelector('.logos');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});
// للتحقق من وجود معلومات تسجيل الدخول
const user = localStorage.getItem('user');

if (user) {
  // قم بعرض محتوى المستخدم المسجل
  console.log('مرحبًا، ' + user);
} else {
  // إذا لم يتم العثور على معلومات تسجيل الدخول، قم بعرض نموذج تسجيل الدخول
  console.log('الرجاء تسجيل الدخول');
}
fetch('https://api.example.com/recommended-videos')
  .then(response => response.json())
  .then(data => {
    // عرض الفيديوهات الموصى بها في واجهة المستخدم
  })
  .catch(error => {
    console.error('حدث خطأ في الاستعلام عن الفيديوهات الموصى بها: ' + error);
  });
