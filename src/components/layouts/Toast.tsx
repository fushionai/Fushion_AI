import React from "react";

const Toast = ({
  message,
  variant,
}: {
  message: string;
  variant: "success" | "error";
}) => {
  return (
    <div
      id="toast-default"
      className="flex fixed top-[5%] z-50 right-9  items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500  rounded-lg dark:bg-blue-800 dark:text-blue-200">
        {variant === "error" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
              fill="#E53E3E"
            />
          </svg>
        ) : (
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.3267 6.16992C17.8524 6.16992 6.07666 17.9457 6.07666 32.4199C6.07666 46.8942 17.8524 58.6699 32.3267 58.6699C46.8009 58.6699 58.5767 46.8942 58.5767 32.4199C58.5767 29.4642 58.0621 26.6297 57.1565 23.9758L52.9062 28.2261C53.1819 29.5806 53.3267 30.984 53.3267 32.4199C53.3267 43.9988 43.9055 53.4199 32.3267 53.4199C20.7478 53.4199 11.3267 43.9988 11.3267 32.4199C11.3267 20.841 20.7478 11.4199 32.3267 11.4199C36.6133 11.4199 40.6005 12.7164 43.929 14.9319L47.687 11.1738C43.361 8.03958 38.0623 6.16992 32.3267 6.16992ZM56.7207 9.56396L29.7017 36.583L21.0576 27.939L17.3457 31.6509L29.7017 44.0068L60.4326 13.2759L56.7207 9.56396Z"
              fill="#2ADB3C"
            />
          </svg>
        )}
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-collapse-toggle="toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        {/* <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </button>
    </div>
  );
};

export default Toast;
