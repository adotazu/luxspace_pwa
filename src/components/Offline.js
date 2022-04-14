function Offline() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
            fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 Ol5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.9815.58-9.92ZM11 13al 1 0 11-2 0 1 1 O 012 Ozm-1-8al 1 0 00-1 lv3al 1 0 002 OV6al 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            You are offline. Don't you worry, you still can do things.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Offline;