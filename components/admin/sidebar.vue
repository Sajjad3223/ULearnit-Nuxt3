<template>
  <aside id="sidebar" class="hidden lg:block fixed rounded-xl top-0 right-0 z-40 w-64 h-screen pt-24 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <NuxtLink to="/admin" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
            <span class="mr-3">داشبورد</span>
          </NuxtLink>
        </li>
        <li>
          <admin-sidebar-accordion title="دوره ها">
            <template #icon>
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1 15.38 9.1 13.48V12V10.52C9.1 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73Z" fill="currentColor"/>
              </svg>
            </template>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/courses" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                
                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0717 19.8211C18.8817 19.8211 18.6917 19.7511 18.5417 19.6011C18.2517 19.3111 18.2517 18.8311 18.5417 18.5411C22.1517 14.9311 22.1517 9.06109 18.5417 5.46109C18.2517 5.17109 18.2517 4.69109 18.5417 4.40109C18.8317 4.11109 19.3117 4.11109 19.6017 4.40109C23.7917 8.59109 23.7917 15.4111 19.6017 19.6011C19.4517 19.7511 19.2617 19.8211 19.0717 19.8211Z" fill="currentColor"/>
                  <path d="M4.93031 19.8211C4.74031 19.8211 4.55031 19.7511 4.40031 19.6011C0.210312 15.4111 0.210312 8.59109 4.40031 4.40109C4.69031 4.11109 5.17031 4.11109 5.46031 4.40109C5.75031 4.69109 5.75031 5.17109 5.46031 5.46109C1.85031 9.07109 1.85031 14.9411 5.46031 18.5411C5.75031 18.8311 5.75031 19.3111 5.46031 19.6011C5.31031 19.7511 5.12031 19.8211 4.93031 19.8211Z" fill="currentColor"/>
                  <path d="M11.9988 22.7119C10.7488 22.7019 9.55878 22.5019 8.44878 22.1119C8.05878 21.9719 7.84878 21.5419 7.98878 21.1519C8.12878 20.7619 8.54878 20.5519 8.94878 20.6919C9.90878 21.0219 10.9288 21.2019 12.0088 21.2019C13.0788 21.2019 14.1088 21.0219 15.0588 20.6919C15.4488 20.5619 15.8788 20.7619 16.0188 21.1519C16.1588 21.5419 15.9488 21.9719 15.5588 22.1119C14.4388 22.5019 13.2488 22.7119 11.9988 22.7119Z" fill="currentColor"/>
                  <path d="M15.2988 3.33906C15.2188 3.33906 15.1288 3.32906 15.0488 3.29906C14.0988 2.95906 13.0688 2.78906 11.9988 2.78906C10.9288 2.78906 9.90878 2.96906 8.94878 3.29906C8.54878 3.42906 8.12878 3.22906 7.98878 2.83906C7.84878 2.44906 8.05878 2.01906 8.44878 1.87906C9.56878 1.48906 10.7588 1.28906 11.9988 1.28906C13.2388 1.28906 14.4388 1.48906 15.5488 1.87906C15.9388 2.01906 16.1488 2.44906 16.0088 2.83906C15.8988 3.14906 15.6088 3.33906 15.2988 3.33906Z" fill="currentColor"/>
                  <path d="M8.73828 12.0001V10.3301C8.73828 8.25014 10.2083 7.40014 12.0083 8.44014L13.4583 9.28014L14.9083 10.1201C16.7083 11.1601 16.7083 12.8601 14.9083 13.9001L13.4583 14.7401L12.0083 15.5801C10.2083 16.6201 8.73828 15.7701 8.73828 13.6901V12.0001Z" fill="currentColor"/>
                </svg>
                <span class="mr-3">لیست دوره ها</span>
              </NuxtLink>
            </li>
            <li class="mr-2 p-2">
              <NuxtLink to="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98H15.67C16.44 22.62 17.43 23 18.5 23C19.64 23 20.67 22.58 21.46 21.88C21.81 21.58 22.11 21.22 22.35 20.82C22.76 20.14 23 19.34 23 18.5C23 17.42 22.62 16.42 21.98 15.65ZM20.76 17.94L18.36 20.16C18.22 20.29 18.03 20.36 17.85 20.36C17.66 20.36 17.47 20.29 17.32 20.14L16.21 19.03C15.92 18.74 15.92 18.26 16.21 17.97C16.5 17.68 16.98 17.68 17.27 17.97L17.87 18.57L19.74 16.84C20.04 16.56 20.52 16.58 20.8 16.88C21.09 17.19 21.07 17.66 20.76 17.94Z" fill="currentColor"/>
                  <path d="M14.7295 5.86V2.5C14.7295 2.22 14.5095 2 14.2295 2H9.76953C9.48953 2 9.26953 2.22 9.26953 2.5V5.86C9.26953 6.14 9.48953 6.36 9.76953 6.36H14.2295C14.5095 6.36 14.7295 6.14 14.7295 5.86Z" fill="currentColor"/>
                  <path d="M7.24851 2.0207C4.68851 2.1807 2.93851 3.5007 2.28851 5.7007C2.18851 6.0307 2.42851 6.3607 2.76851 6.3607H7.26851C7.54851 6.3607 7.76851 6.1407 7.76851 5.8607V2.5207C7.76851 2.2407 7.52851 2.0007 7.24851 2.0207Z" fill="currentColor"/>
                  <path d="M16.7505 2.00898C19.3105 2.16898 21.0605 3.48898 21.7105 5.68898C21.8105 6.01898 21.5705 6.34898 21.2305 6.34898H16.7305C16.4505 6.34898 16.2305 6.12898 16.2305 5.84898V2.50898C16.2305 2.22898 16.4705 1.98898 16.7505 2.00898Z" fill="currentColor"/>
                  <path d="M22 8.35937V12.7394C22 13.1094 21.61 13.3494 21.28 13.1794C20.44 12.7394 19.48 12.4994 18.5 12.4994C16.89 12.4994 15.32 13.1594 14.2 14.3094C13.1 15.4294 12.5 16.9194 12.5 18.4994C12.5 19.3094 12.82 20.3494 13.22 21.2194C13.38 21.5694 13.14 21.9994 12.75 21.9994H7.81C4.6 21.9994 2 19.3994 2 16.1894V8.35937C2 8.07937 2.22 7.85938 2.5 7.85938H21.5C21.78 7.85938 22 8.07937 22 8.35937Z" fill="currentColor"/>
                </svg>
                <span class="mr-3">بررسی قسمت ها</span>
              </NuxtLink>
            </li>
          </admin-sidebar-accordion>
        </li>
        <li>
          <admin-sidebar-accordion title="مدرسین">
            <template #icon>
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5119 5.85L13.5719 2.42C12.6019 1.86 11.4019 1.86 10.4219 2.42L4.49187 5.85C3.52187 6.41 2.92188 7.45 2.92188 8.58V15.42C2.92188 16.54 3.52187 17.58 4.49187 18.15L10.4319 21.58C11.4019 22.14 12.6019 22.14 13.5819 21.58L19.5219 18.15C20.4919 17.59 21.0919 16.55 21.0919 15.42V8.58C21.0819 7.45 20.4819 6.42 19.5119 5.85ZM12.0019 7.34C13.2919 7.34 14.3319 8.38 14.3319 9.67C14.3319 10.96 13.2919 12 12.0019 12C10.7119 12 9.67188 10.96 9.67188 9.67C9.67188 8.39 10.7119 7.34 12.0019 7.34ZM14.6819 16.66H9.32187C8.51187 16.66 8.04187 15.76 8.49187 15.09C9.17187 14.08 10.4919 13.4 12.0019 13.4C13.5119 13.4 14.8319 14.08 15.5119 15.09C15.9619 15.75 15.4819 16.66 14.6819 16.66Z" fill="currentColor"/>
              </svg>
            </template>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/masters" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
                  <path d="M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z" fill="currentColor"/>
                  <path d="M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z" fill="currentColor"/>
                  <path d="M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z" fill="currentColor"/>
                </svg>
                <span class="mr-3">لیست مدرسین</span>
              </NuxtLink>
            </li>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/masters/requests" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"/>
                  <path d="M17.0809 14.1606C14.2909 12.3006 9.74094 12.3006 6.93094 14.1606C5.66094 15.0006 4.96094 16.1506 4.96094 17.3806C4.96094 18.6106 5.66094 19.7506 6.92094 20.5906C8.32094 21.5306 10.1609 22.0006 12.0009 22.0006C13.8409 22.0006 15.6809 21.5306 17.0809 20.5906C18.3409 19.7406 19.0409 18.6006 19.0409 17.3606C19.0309 16.1406 18.3409 14.9906 17.0809 14.1606ZM14.3309 16.5606L11.8109 19.0806C11.6909 19.2006 11.5309 19.2606 11.3709 19.2606C11.2109 19.2606 11.0509 19.1906 10.9309 19.0806L9.67094 17.8206C9.43094 17.5806 9.43094 17.1806 9.67094 16.9406C9.91094 16.7006 10.3109 16.7006 10.5509 16.9406L11.3709 17.7606L13.4509 15.6806C13.6909 15.4406 14.0909 15.4406 14.3309 15.6806C14.5809 15.9206 14.5809 16.3206 14.3309 16.5606Z" fill="currentColor"/>
                </svg>
                <span class="mr-3">درخواست ها</span>
              </NuxtLink>
            </li>
          </admin-sidebar-accordion>
        </li>
        <li>
          <NuxtLink to="/admin/users" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 mr-3 whitespace-nowrap">کاربران</span>
          </NuxtLink>
        </li>
        <li>
          <admin-sidebar-accordion title="دسترسی ها">
            <template #icon>
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5119 5.85L13.5719 2.42C12.6019 1.86 11.4019 1.86 10.4219 2.42L4.49187 5.85C3.52187 6.41 2.92188 7.45 2.92188 8.58V15.42C2.92188 16.54 3.52187 17.58 4.49187 18.15L10.4319 21.58C11.4019 22.14 12.6019 22.14 13.5819 21.58L19.5219 18.15C20.4919 17.59 21.0919 16.55 21.0919 15.42V8.58C21.0819 7.45 20.4819 6.42 19.5119 5.85ZM12.0019 7.34C13.2919 7.34 14.3319 8.38 14.3319 9.67C14.3319 10.96 13.2919 12 12.0019 12C10.7119 12 9.67188 10.96 9.67188 9.67C9.67188 8.39 10.7119 7.34 12.0019 7.34ZM14.6819 16.66H9.32187C8.51187 16.66 8.04187 15.76 8.49187 15.09C9.17187 14.08 10.4919 13.4 12.0019 13.4C13.5119 13.4 14.8319 14.08 15.5119 15.09C15.9619 15.75 15.4819 16.66 14.6819 16.66Z" fill="currentColor"/>
              </svg>
            </template>
          <li class="mr-2 p-2">
            <NuxtLink to="/admin/roles" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
                <path d="M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z" fill="currentColor"/>
                <path d="M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z" fill="currentColor"/>
                <path d="M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z" fill="currentColor"/>
              </svg>
              <span class="mr-3">لقب ها</span>
            </NuxtLink>
          </li>
          <li class="mr-2 p-2">
            <NuxtLink to="/admin/roles/permissions" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"/>
                <path d="M17.0809 14.1606C14.2909 12.3006 9.74094 12.3006 6.93094 14.1606C5.66094 15.0006 4.96094 16.1506 4.96094 17.3806C4.96094 18.6106 5.66094 19.7506 6.92094 20.5906C8.32094 21.5306 10.1609 22.0006 12.0009 22.0006C13.8409 22.0006 15.6809 21.5306 17.0809 20.5906C18.3409 19.7406 19.0409 18.6006 19.0409 17.3606C19.0309 16.1406 18.3409 14.9906 17.0809 14.1606ZM14.3309 16.5606L11.8109 19.0806C11.6909 19.2006 11.5309 19.2606 11.3709 19.2606C11.2109 19.2606 11.0509 19.1906 10.9309 19.0806L9.67094 17.8206C9.43094 17.5806 9.43094 17.1806 9.67094 16.9406C9.91094 16.7006 10.3109 16.7006 10.5509 16.9406L11.3709 17.7606L13.4509 15.6806C13.6909 15.4406 14.0909 15.4406 14.3309 15.6806C14.5809 15.9206 14.5809 16.3206 14.3309 16.5606Z" fill="currentColor"/>
              </svg>
              <span class="mr-3">دسترسی ها</span>
            </NuxtLink>
          </li>
        </admin-sidebar-accordion>
        </li>
        <li>
          <NuxtLink to="/admin/blog" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048Z" fill="currentColor"/>
              <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor"/>
            </svg>
            <span class="flex-1 mr-3 whitespace-nowrap">مقالات</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/comments" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.4704 16.83L18.8604 19.99C18.9604 20.82 18.0704 21.4 17.3604 20.97L13.9004 18.91C13.6604 18.77 13.6004 18.47 13.7304 18.23C14.2304 17.31 14.5004 16.27 14.5004 15.23C14.5004 11.57 11.3604 8.59 7.50038 8.59C6.71038 8.59 5.94038 8.71 5.22038 8.95C4.85038 9.07 4.49038 8.73 4.58038 8.35C5.49038 4.71 8.99038 2 13.1704 2C18.0504 2 22.0004 5.69 22.0004 10.24C22.0004 12.94 20.6104 15.33 18.4704 16.83Z" fill="currentColor"/>
              <path d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z" fill="currentColor"/>
            </svg>
            <span class="flex-1 mr-3 whitespace-nowrap">نظرات</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/questions" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.4 21.86 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" fill="currentColor"/>
              <path d="M17.75 15.6C19.02 15.6 20.09 15.18 20.83 14.43C21.58 13.69 22 12.62 22 11.35V6.25C22 3.9 20.1 2 17.75 2H9.25C6.9 2 5 3.9 5 6.25V7C5 7.28 5.22 7.5 5.5 7.5H12.19C14.9 7.5 17.09 9.69 17.09 12.4V15.1C17.09 15.38 17.31 15.6 17.59 15.6H17.75V15.6Z" fill="currentColor"/>
            </svg>
            <span class="flex-1 mr-3 whitespace-nowrap">پرسش و پاسخ ها</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/tickets" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill="currentColor"/>
            </svg>
            <span class="flex-1 mr-3 whitespace-nowrap">تیکت ها</span>
          </NuxtLink>
        </li>
        <li>
          <admin-sidebar-accordion title="دسته بندی ها">
            <template #icon>
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 16.75H18.25V14.5C18.25 14.09 17.91 13.75 17.5 13.75C17.09 13.75 16.75 14.09 16.75 14.5V16.75H14.5C14.09 16.75 13.75 17.09 13.75 17.5C13.75 17.91 14.09 18.25 14.5 18.25H16.75V20.5C16.75 20.91 17.09 21.25 17.5 21.25C17.91 21.25 18.25 20.91 18.25 20.5V18.25H20.5C20.91 18.25 21.25 17.91 21.25 17.5C21.25 17.09 20.91 16.75 20.5 16.75Z" fill="currentColor"/>
                <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="currentColor"/>
                <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="currentColor"/>
                <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="currentColor"/>
              </svg>

            </template>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/categories/courseCategories" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 7.85938H2V16.1894C2 16.2494 2 16.3094 2.01 16.3594H11.25V7.85938Z" fill="currentColor"/>
                  <path d="M7.69141 6.36H11.2514V2H7.72141V6.24C7.72141 6.28 7.70141 6.32 7.69141 6.36Z" fill="currentColor"/>
                  <path d="M6.21891 6.24016V2.16016C3.99891 2.62016 2.54891 4.10016 2.12891 6.36016H6.23891C6.22891 6.32016 6.21891 6.28016 6.21891 6.24016Z" fill="currentColor"/>
                  <path d="M16.22 2H12.75V6.36H16.22V2Z" fill="currentColor"/>
                  <path d="M17.7109 6.35844H21.8709C21.4509 4.07844 19.9809 2.58844 17.7209 2.14844V6.32844C17.7209 6.33844 17.7109 6.34844 17.7109 6.35844Z" fill="currentColor"/>
                  <path d="M17.7188 21.8494C19.9088 21.4194 21.3488 20.0194 21.8188 17.8594H17.7188V21.8494Z" fill="currentColor"/>
                  <path d="M16.22 17.8594H12.75V21.9994H16.22V17.8594Z" fill="currentColor"/>
                  <path d="M12.75 16.3594H21.99C22 16.3094 22 16.2494 22 16.1894V7.85938H12.75V16.3594Z" fill="currentColor"/>
                  <path d="M11.2488 17.8594H7.71875V21.9994H11.2488V17.8594Z" fill="currentColor"/>
                  <path d="M2.17969 17.8594C2.64969 19.9994 4.06969 21.3994 6.21969 21.8394V17.8594H2.17969Z" fill="currentColor"/>
                </svg>
                <span class="flex-1 mr-3 whitespace-nowrap">دوره ها</span>
              </NuxtLink>
            </li>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/categories/blogCategories" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9303 2.5V8.4C14.9303 8.84 14.4103 9.06 14.0903 8.77L12.3403 7.16C12.1503 6.98 11.8503 6.98 11.6603 7.16L9.91031 8.76C9.59031 9.06 9.07031 8.83 9.07031 8.4V2.5C9.07031 2.22 9.29031 2 9.57031 2H14.4303C14.7103 2 14.9303 2.22 14.9303 2.5Z" fill="currentColor"/>
                  <path d="M16.98 2.05891C16.69 2.01891 16.43 2.26891 16.43 2.55891V8.57891C16.43 9.33891 15.98 10.0289 15.28 10.3389C14.58 10.6389 13.77 10.5089 13.21 9.98891L12.34 9.18891C12.15 9.00891 11.86 9.00891 11.66 9.18891L10.79 9.98891C10.43 10.3289 9.96 10.4989 9.49 10.4989C9.23 10.4989 8.97 10.4489 8.72 10.3389C8.02 10.0289 7.57 9.33891 7.57 8.57891V2.55891C7.57 2.26891 7.31 2.01891 7.02 2.05891C4.22 2.40891 3 4.29891 3 6.99891V16.9989C3 19.9989 4.5 21.9989 8 21.9989H16C19.5 21.9989 21 19.9989 21 16.9989V6.99891C21 4.29891 19.78 2.40891 16.98 2.05891ZM17.5 18.7489H9C8.59 18.7489 8.25 18.4089 8.25 17.9989C8.25 17.5889 8.59 17.2489 9 17.2489H17.5C17.91 17.2489 18.25 17.5889 18.25 17.9989C18.25 18.4089 17.91 18.7489 17.5 18.7489ZM17.5 14.7489H13.25C12.84 14.7489 12.5 14.4089 12.5 13.9989C12.5 13.5889 12.84 13.2489 13.25 13.2489H17.5C17.91 13.2489 18.25 13.5889 18.25 13.9989C18.25 14.4089 17.91 14.7489 17.5 14.7489Z" fill="currentColor"/>
                </svg>
                <span class="flex-1 mr-3 whitespace-nowrap">مقالات</span>
              </NuxtLink>
            </li>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/categories/roadmapCategories" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19.35 8.84C19.31 8.93 19.26 9.01 19.19 9.08L17.39 10.88C17.24 11.03 17.05 11.1 16.86 11.1C16.67 11.1 16.48 11.03 16.33 10.88C16.04 10.59 16.04 10.11 16.33 9.82L16.85 9.3H16.7C14.6 9.3 12.88 11.01 12.88 13.11V15.07V17.24C12.88 17.65 12.54 17.99 12.13 17.99C11.72 17.99 11.38 17.65 11.38 17.24V15.07V13.11C11.38 11.01 9.67 9.3 7.57 9.3H7.15L7.67 9.82C7.96 10.11 7.96 10.59 7.67 10.88C7.52 11.03 7.33 11.1 7.14 11.1C6.95 11.1 6.76 11.03 6.61 10.88L4.81 9.08C4.52 8.79 4.52 8.31 4.81 8.02L6.61 6.22C6.9 5.93 7.38 5.93 7.67 6.22C7.96 6.51 7.96 6.99 7.67 7.28L7.15 7.8H7.58C9.53 7.8 11.22 8.87 12.14 10.44C13.06 8.87 14.75 7.8 16.71 7.8H16.86L16.34 7.28C16.05 6.99 16.05 6.51 16.34 6.22C16.63 5.93 17.11 5.93 17.4 6.22L19.2 8.02C19.27 8.09 19.32 8.17 19.36 8.26C19.43 8.45 19.43 8.66 19.35 8.84Z" fill="currentColor"/>
                </svg>
                <span class="flex-1 mr-3 whitespace-nowrap">نقشه راه</span>
              </NuxtLink>
            </li>
            <li class="mr-2 p-2">
              <NuxtLink to="/admin/categories/shopCategories" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.3596 8.27L22.0696 5.5C21.6496 2.48 20.2796 1.25 17.3497 1.25H14.9896H13.5097H10.4697H8.98965H6.58965C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C6.89965 12.75 8.10965 12.12 8.86965 11.11C9.54965 12.12 10.7097 12.75 11.9997 12.75C13.2896 12.75 14.4197 12.15 15.1096 11.15C15.8797 12.14 17.0696 12.75 18.3096 12.75C19.6396 12.75 20.8396 12.16 21.5896 11.12C22.1896 10.32 22.4597 9.31 22.3596 8.27Z" fill="currentColor"/>
                  <path d="M11.3491 16.6602C10.0791 16.7902 9.11914 17.8702 9.11914 19.1502V21.8902C9.11914 22.1602 9.33914 22.3802 9.60914 22.3802H14.3791C14.6491 22.3802 14.8691 22.1602 14.8691 21.8902V19.5002C14.8791 17.4102 13.6491 16.4202 11.3491 16.6602Z" fill="currentColor"/>
                  <path d="M21.3709 14.3981V17.3781C21.3709 20.1381 19.1309 22.3781 16.3709 22.3781C16.1009 22.3781 15.8809 22.1581 15.8809 21.8881V19.4981C15.8809 18.2181 15.4909 17.2181 14.7309 16.5381C14.0609 15.9281 13.1509 15.6281 12.0209 15.6281C11.7709 15.6281 11.5209 15.6381 11.2509 15.6681C9.47086 15.8481 8.12086 17.3481 8.12086 19.1481V21.8881C8.12086 22.1581 7.90086 22.3781 7.63086 22.3781C4.87086 22.3781 2.63086 20.1381 2.63086 17.3781V14.4181C2.63086 13.7181 3.32086 13.2481 3.97086 13.4781C4.24086 13.5681 4.51086 13.6381 4.79086 13.6781C4.91086 13.6981 5.04086 13.7181 5.16086 13.7181C5.32086 13.7381 5.48086 13.7481 5.64086 13.7481C6.80086 13.7481 7.94086 13.3181 8.84086 12.5781C9.70086 13.3181 10.8209 13.7481 12.0009 13.7481C13.1909 13.7481 14.2909 13.3381 15.1509 12.5981C16.0509 13.3281 17.1709 13.7481 18.3109 13.7481C18.4909 13.7481 18.6709 13.7381 18.8409 13.7181C18.9609 13.7081 19.0709 13.6981 19.1809 13.6781C19.4909 13.6381 19.7709 13.5481 20.0509 13.4581C20.7009 13.2381 21.3709 13.7181 21.3709 14.3981Z" fill="currentColor"/>
                </svg>
                <span class="flex-1 mr-3 whitespace-nowrap">فروشگاه</span>
              </NuxtLink>
            </li>
          </admin-sidebar-accordion>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "sidebar"
}
</script>

<style scoped>

</style>