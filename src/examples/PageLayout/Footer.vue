<template>
  <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
  <footer class="py-5 footer">
    <div class="container">
      <div dir="rtl" class="row">
        <div class="mx-auto mb-4 text-center col-lg-8">
          <a
            href="#"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            صفحه اصلی
          </a>
          <a
            href="https://rialpayment.com/"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            سوالات متداول
          </a>
          <a
            href="https://rialpayment.com/"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            تماس با ما
          </a>

          <a
            href="https://rialpayment.com/"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            درگاه پرداخت اینترنتی
          </a>
          <a
            href="https://rialpayment.com/"
            target="_blank"
            class="mb-2 text-secondary me-xl-5 me-3 mb-sm-0"
          >
            پشتیبانی:75181000-021
          </a>
        </div>
        <div class="mx-auto mt-2 mb-4 text-center col-lg-8">
          <a
            href="javascript:;"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-dribbble"></span>
          </a>
          <a
            href="javascript:;"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-twitter"></span>
          </a>
          <a
            href="javascript:;"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-instagram"></span>
          </a>
          <a
            href="javascript:;"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-pinterest"></span>
          </a>
          <a
            href="javascript:;"
            target="_blank"
            class="text-secondary me-xl-4 me-4"
          >
            <span class="text-lg fab fa-github"></span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="mx-auto mt-1 text-center col-8">
          <p class="mb-0 text-secondary">
            © تمامی حقوق محفوظ و متعلق به ریال پیمنت می‌باشد.
            {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
