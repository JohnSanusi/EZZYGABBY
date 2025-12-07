<script setup></script>

<template>
  <footer class="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-12 lg:py-16">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center gap-3">
            <img src="/logo.png" class="w-16 h-16" alt="EzzyGabby Logo" />
            <div>
              <h3 class="text-2xl font-bold text-white">EzzyGabby</h3>
              <p class="text-emerald-400 text-sm">Photography</p>
            </div>
          </div>
          <p class="text-slate-300 leading-relaxed max-w-md">
            Capturing life's precious moments with passion and creativity. Let's create memories that last forever.
          </p>
          
          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a
              href="mailto:Bymini2007@gmail.com"
              class="group w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <i class="pi pi-envelope text-lg text-slate-300 group-hover:text-emerald-400 transition-colors duration-300"></i>
            </a>
            <a
              href="tel:+447 49506859"
              class="group w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <i class="pi pi-phone text-lg text-slate-300 group-hover:text-emerald-400 transition-colors duration-300"></i>
            </a>
            <a
              href="https://wa.me/message/I3R2FEEATO4PA1"
              class="group w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <i class="pi pi-whatsapp text-lg text-slate-300 group-hover:text-emerald-400 transition-colors duration-300"></i>
            </a>
            <a
              href="#"
              class="group w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <i class="pi pi-facebook text-lg text-slate-300 group-hover:text-emerald-400 transition-colors duration-300"></i>
            </a>
            <a
              href="#"
              class="group w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
            >
              <i class="pi pi-instagram text-lg text-slate-300 group-hover:text-emerald-400 transition-colors duration-300"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <a href="/#about" class="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group">
                <i class="pi pi-chevron-right text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                About Me
              </a>
            </li>
            <li>
              <a href="/#services" class="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group">
                <i class="pi pi-chevron-right text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                Services
              </a>
            </li>
            <li>
              <a href="/#gallery" class="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group">
                <i class="pi pi-chevron-right text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                Gallery
              </a>
            </li>
            <li>
              <a href="/#contact" class="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group">
                <i class="pi pi-chevron-right text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-white mb-4">Get In Touch</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="pi pi-map-marker text-emerald-400 text-lg mt-1"></i>
              <span class="text-slate-300 text-sm">170 Romford Rd, London E7 9HY, UK</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="pi pi-envelope text-emerald-400 text-lg mt-1"></i>
              <a href="mailto:Bymini2007@gmail.com" class="text-slate-300 text-sm hover:text-emerald-400 transition-colors duration-200">
                Bymini2007@gmail.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="pi pi-phone text-emerald-400 text-lg mt-1"></i>
              <a href="tel:+447 49506859" class="text-slate-300 text-sm hover:text-emerald-400 transition-colors duration-200">
                +44 7495 06859
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-400 text-sm text-center md:text-left">
            &copy; 2025 <span class="text-emerald-400">EzzyGabby</span>. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" class="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template
