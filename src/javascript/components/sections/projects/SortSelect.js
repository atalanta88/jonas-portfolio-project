export default function SortSelect() {
  return (
    <>
      <div class="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
        <div class="container py-6">
          <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div class="flex mt-4 md:m-0">
              <div class="-mx-4">
                <a
                  href="#"
                  class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  All
                </a>
                <a
                  href="#"
                  class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  School
                </a>
                <a
                  href="#"
                  class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Personal
                </a>
                <a
                  href="#"
                  class="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
                >
                  Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
