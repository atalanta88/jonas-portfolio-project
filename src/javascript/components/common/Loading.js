import React from "react";

export default function LoaderComponent() {
  return (
    <>
      <button type="button" class="bg-rose-600 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing
      </button>
    </>
  );
}
