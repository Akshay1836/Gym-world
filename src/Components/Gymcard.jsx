import React from "react";

function Gymcard(props) {
  return (
    <article class="w-2/3 rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 m-4">
      <div class="flex items-start sm:gap-8">
        <div
          class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-cyan-800"
          aria-hidden="true"
        >
          <div class="flex items-center gap-1">
            <span class="h-8 w-0.5 rounded-full bg-cyan-800"></span>
            <span class="h-6 w-0.5 rounded-full bg-cyan-800"></span>
            <span class="h-4 w-0.5 rounded-full bg-cyan-800"></span>
            <span class="h-6 w-0.5 rounded-full bg-cyan-800"></span>
            <span class="h-8 w-0.5 rounded-full bg-cyan-800"></span>
          </div>
        </div>

        <div>
          <strong class="rounded border border-indigo-500 bg-cyan-800 px-3 py-1.5 text-[10px] font-medium text-white">
            {props.type}
          </strong>
          <strong class="rounded border m-2 border-indigo-500 bg-cyan-800 px-3 py-1.5 text-[10px] font-medium text-white">
            {props.diff}
          </strong>
          <strong class="rounded border border-indigo-500 bg-cyan-800 px-3 py-1.5 text-[10px] font-medium text-white">
            {props.muscle}
          </strong>

          <h3 class="mt-4 text-lg font-medium sm:text-xl">
            <a href="" class="hover:underline">
              {" "}
              {props.name}{" "}
            </a>
          </h3>

          <p class="mt-1 text-sm text-gray-700"></p>

          <div class="mt-4 sm:flex sm:flex-col sm:items-center sm:gap-2">
            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-xs font-medium">{props.instructions}</p>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}

export default Gymcard;
