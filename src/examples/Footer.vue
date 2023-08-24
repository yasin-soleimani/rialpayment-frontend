<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="this.$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            <p class="mb-0 text-secondary">
              © تمامی حقوق محفوظ و متعلق به ریال پیمنت می‌باشد.
              {{ new Date().getFullYear() }}
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a
                class="nav-link text-muted"
                href="https://rialpayment.com/"
                target="_blank"
                >صفحه اصلی</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://rialpayment.com/"
                class="nav-link text-muted"
                target="_blank"
                >نماس با ما</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://rialpayment.com/"
                class="nav-link text-muted"
                target="_blank"
                >سوالات متداول</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://rialpayment.com/"
                class="nav-link pe-0 text-muted"
                target="_blank"
                >پشتیبانی :75181000-021</a
              >
            </li>
          </ul>
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
